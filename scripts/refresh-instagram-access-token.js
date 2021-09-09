/* eslint-disable no-console */
const fs = require('fs')
const axios = require('axios')

console.log(process.env.INSTAGRAM_ACCESS_TOKEN)

const refreshAccessToken = async () => {
  const freshAccessToken = await axios.get('https://graph.instagram.com/refresh_access_token', {
    params: {
      grant_type: 'ig_refresh_token',
      access_token: process.env.INSTAGRAM_ACCESS_TOKEN
    }
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    })

  return freshAccessToken
}

refreshAccessToken().then((response) => {
  console.log(response.expires_in)
  fs.writeFileSync('./.env', `INSTAGRAM_ACCESS_TOKEN=${response.access_token}\n`)
})
