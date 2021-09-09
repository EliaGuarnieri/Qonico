/* eslint-disable no-console */
const axios = require('axios')

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Methods Not Allowed' }
  }

  const queries = event.queryStringParameters

  const data = await axios.get('https://graph.instagram.com/me/media', {
    params: { access_token: process.env.INSTAGRAM_ACCESS_TOKEN, fields: queries.fields }
  })
    .then((response) => {
      const feed = []
      if (response.status === 400) {
        return response.status
      }
      if (response.status === 200) {
        for (const n in response.data.data) {
          // correggere qui inviare come parametri tutte le cose
          if (queries['mediatypes[]'].includes(response.data.data[n].media_type)) {
            feed.push(response.data.data[n])
            if (feed.length >= queries.count) {
              return feed
            }
          }
        }
      }
    })
    .catch((error) => {
      throw error
    })

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
