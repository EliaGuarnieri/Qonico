/* eslint-disable no-console */
const axios = require('axios')
const NetlifyAPI = require('netlify')

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
  const updateNetlifyEnv = async function () {
    const client = new NetlifyAPI('zJwjwqy1CXNSdJWq64h_2wo7aPVnqcgN0NupmGlu67E')
    try {
      const sites = await client.updateSite({
        site_id: 'a3dd5d30-3267-407b-bd31-fa70b249ff9d',
        body: {
          build_settings: {
            env: {
              INSTAGRAM_ACCESS_TOKEN: response.access_token
            }
          }
        }
      })
      return sites
    } catch (error) {
      return error
    }
  }
  return updateNetlifyEnv
})
