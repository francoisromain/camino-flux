const apiFetch = require('./_utils/fetch')

const apiUrl = process.env.API_URL

const apiGet = async (prop, { query, variables = {} }, token = '') => {
  const res = await apiFetch(
    apiUrl,
    JSON.stringify({ query, variables }),
    token
  )

  return res && res.data && res.data[prop]
}

module.exports = apiGet
