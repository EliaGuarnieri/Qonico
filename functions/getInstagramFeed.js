const axios = require('axios')

exports.handler = async (event, context) => {
  try {
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
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTION'
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
