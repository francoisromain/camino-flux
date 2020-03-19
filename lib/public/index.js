// efface le dossier /public/geojson, le recréé et y ajoute:
// - un fichier .geojson par definition présent dans le fichier definitions.js
// - un fichier infos.json contenant la liste des fichiers générés

require('dotenv').config()
const { join } = require('path')
var { job } = require('cron')

const apiGet = require('../api/index')
const {
  titresQuery,
  domainesQuery,
  typesQuery,
  statutsQuery
} = require('../api/queries')
const geojsonFormat = require('../utils/geojson-format')

const fileCreate = require('./_utils/file-create')
const directoryDelete = require('./_utils/directory-delete')
const directoryCreate = require('./_utils/directory-create')
const definitions = require('./definitions')
const EXPORT_DIRECTORY = '../../public/geojson/'

const domainesCouleurs = {
  m: '#498bd6',
  h: '#856940',
  s: '#8468b1',
  g: '#d16c3e',
  w: '#3ed1ac',
  r: '#c2d13e',
  c: '#3ea3d1',
  f: '#a8782f'
}

const metasBuild = (definition, metas) =>
  Object.keys(definition).reduce(
    (metasObj, metaIdsName) => {
      const metaName = `${metaIdsName.slice(0, -3)}`

      return definition[metaIdsName].reduce((metasObj, metaId) => {
        const meta = metas[metaName].find(m => m.id === metaId)

        metasObj[metaName].push(meta)

        return metasObj
      }, metasObj)
    },
    { domaines: [], statuts: [], types: [] }
  )

const geojsonsBuild = async (definitions, query, metas) =>
  definitions.reduce(async (geojsons, definition) => {
    const titres = await apiGet('titres', { query, variables: definition })

    if (!titres || !titres.length) return geojsons

    const { domaines, types, statuts } = metasBuild(definition, metas)

    const couleur = domainesCouleurs[definition.domainesIds[0]]

    const fichier = fileNameFormat({
      domaines,
      types,
      statuts
    })

    const properties = {
      fichier,
      couleur,
      ...metasFormat(metas)
    }

    const geojson = geojsonFormat(titres, properties)

    return (await geojsons).concat(geojson)
  }, Promise.resolve([]))

const filesCreate = async geojsons =>
  Promise.all(
    geojsons.map(async geojson => {
      await fileCreate(
        join(__dirname, EXPORT_DIRECTORY, geojson.properties.fichier),
        JSON.stringify(geojson, null, 2)
      )

      return geojson.properties
    })
  )

// génère un fichier infos contenant la liste des fichiers générés
const infosFileCreate = async infos => {
  await fileCreate(
    join(__dirname, EXPORT_DIRECTORY, 'infos.json'),
    JSON.stringify(infos, null, 2)
  )

  console.log(`${infos.length} fichiers générés`)
}

const fileNameFormat = ({ domaines, types, statuts }) => {
  return `titres-${domaines.map(d => d.id).join('-')}-${types
    .map(t => t.id)
    .join('-')}-${statuts.map(s => s.id).join('-')}.geojson`
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

// ------------------------------------
// process
// ------------------------------------

const run = async () => {
  try {
    // efface le dossier cible et son contenu
    await directoryDelete(join(__dirname, EXPORT_DIRECTORY))

    // créé le dossier cible
    await directoryCreate(join(__dirname, EXPORT_DIRECTORY))

    // récupère les domaines, types et statuts
    const domaines = await apiGet('domaines', { query: domainesQuery })
    const types = await apiGet('types', { query: typesQuery })
    const statuts = await apiGet('statuts', { query: statutsQuery })

    const metas = { types, domaines, statuts }

    // parcourt les définitions et construit un tableau de geojsons
    // dont l'entrée properties contient, entre autre le nom du fichier
    const geojsons = await geojsonsBuild(definitions, titresQuery, metas)

    // génère un fichier par geojson
    // retourne la liste des fichiers générés
    const infos = await filesCreate(geojsons)

    // créé le fichier récapitulatif infos.json
    await infosFileCreate(infos)
  } catch (e) {
    console.error(e)
  }
}

job(
  // cronTime
  '00 00 04 * * 1-5',
  // onTick
  run,
  //  onComplete
  null,
  // start
  true,
  // timezone
  'Europe/Paris',
  // context
  null,
  // runOnInit
  true
  // utcOffset
  // unrefTimeout
)
