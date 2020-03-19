const fetch = require('node-fetch')

const apiFetch = async (url, body, token = '') => {
  const params = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }

  if (token) {
    params.headers.authorization = `Bearer ${token}`
  }

  const res = await fetch(url, params)

  return res.json()
}

module.exports = apiFetch
