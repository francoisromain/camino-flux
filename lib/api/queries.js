const { join } = require('path')
const fileImport = require('./_utils/file-import')

const titresQuery = fileImport(join(__dirname, 'queries/titres.gql'))
const domainesQuery = fileImport(join(__dirname, 'queries/domaines.gql'))
const typesQuery = fileImport(join(__dirname, 'queries/types.gql'))
const statutsQuery = fileImport(join(__dirname, 'queries/statuts.gql'))
const tokenQuery = fileImport(join(__dirname, 'queries/token.gql'))

module.exports = {
  titresQuery,
  domainesQuery,
  typesQuery,
  statutsQuery,
  tokenQuery
}
