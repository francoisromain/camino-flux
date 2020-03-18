const { join } = require('path')
const fileImport = require('./_utils/file-import')

const queries = async () => {
  const titresQuery = await fileImport(join(__dirname, 'queries/titres.gql'))
  const domainesQuery = await fileImport(
    join(__dirname, 'queries/domaines.gql')
  )
  const typesQuery = await fileImport(join(__dirname, 'queries/types.gql'))
  const statutsQuery = await fileImport(join(__dirname, 'queries/statuts.gql'))

  return { titresQuery, domainesQuery, typesQuery, statutsQuery }
}

module.exports = queries
