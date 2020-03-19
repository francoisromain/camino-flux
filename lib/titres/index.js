require('dotenv').config()
const basicAuth = require('basic-auth')

const apiGet = require('../api/index')
const geojsonFormat = require('../utils/geojson-format')

// importe les requêtes graphQL
const {
  titresQuery,
  domainesQuery,
  typesQuery,
  statutsQuery,
  tokenQuery
} = require('../api/queries')

const params = {
  arrays: ['typesIds', 'domainesIds', 'statutsIds'],
  strings: ['entreprises', 'noms', 'references', 'substances', 'territoires']
}

// pour chaque definition (domainesIds, typesIds, statutsIds)
// retourne un tableau avec les noms correspondant aux ids
// - domaines: []
// - types: []
// - statuts: []
const metasFormat = metas =>
  Object.keys(metas).reduce((metasObj, metaName) => {
    metasObj[metaName] = metas[metaName].map(m => m.nom || m.type.nom)

    return metasObj
  }, {})

const tokenGet = async (email, motDePasse) => {
  const variables = { email, motDePasse }

  const data = await apiGet('utilisateurTokenCreer', {
    query: tokenQuery,
    variables
  })

  return (data && data.token) || null
}

const auth = async (req, res, next) => {
  const credentials = basicAuth.parse(req.headers.authorization)

  const token = await tokenGet(credentials.name, credentials.pass)

  if (!token) {
    next(
      new Error(
        `Identifiants incorrects pour l'utilisateur ${credentials.user}`
      )
    )

    return
  }

  req.auth = token

  next()
}

const queryParse = query =>
  Object.keys(query).reduce((variables, key) => {
    if (params.arrays.includes(key)) {
      variables[key] = query[key].split(',')
    } else if (params.strings.includes(key)) {
      variables[key] = query[key]
    }

    return variables
  }, {})

const titresAuth = (req, res, next) => {
  if (req.headers.authorization) {
    auth(req, res, next)
  } else {
    next()
  }
}

const titresGet = async (req, res) => {
  try {
    // récupère le token
    const token = req.auth

    // récupère les domaines, types et statuts
    const domaines = await apiGet('domaines', { query: domainesQuery }, token)
    const types = await apiGet('types', { query: typesQuery }, token)
    const statuts = await apiGet('statuts', { query: statutsQuery }, token)

    const metas = { types, domaines, statuts }

    // récupère les paramètres de requête et formate
    const variables = queryParse(req.query)

    const titres = await apiGet(
      'titres',
      { query: titresQuery, variables },
      token
    )

    if (!titres || !titres.length) return res.send([])

    // construit le flux geojson
    const geojson = geojsonFormat(titres, {
      ...metasFormat(metas)
    })

    res.send(geojson)
  } catch (e) {
    console.error(e)

    res.status(500)
    res.end()
  }
}

module.exports = { titresAuth, titresGet }
