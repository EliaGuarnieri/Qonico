/* eslint-disable no-console */
const { URL } = require('url')
const axios = require('axios')
const connect = require('connect')
const app = connect()

const path = process.env.NODE_ENV === 'production' ? '/.netlify/functions' : '/functions'

app.use(path, async (req, res) => {
  const baseURL = process.env.NODE_ENV === 'production' ? process.env.URL : 'http://192.168.1.6:3000'
  const currentUrl = new URL(req.url, baseURL)
  const queries = currentUrl.searchParams

  const data = await axios.get('https://graph.instagram.com/me/media', {
    params: { access_token: process.env.INSTAGRAM_ACCESS_TOKEN, fields: queries.get('fields') }
  })
    .then((response) => {
      const feed = []
      if (response.status === 400) {
        return response.status
      }
      if (response.status === 200) {
        for (const n in response.data.data) {
          // correggere qui inviare come parametri tutte le cose
          if (queries.getAll('mediatypes[]').includes(response.data.data[n].media_type)) {
            feed.push(response.data.data[n])
            if (feed.length >= queries.get('count')) {
              return feed
            }
          }
        }
      }
    })
    .catch((error) => {
      console.log('non capisco')
      throw error.response.statusText
    })

  return res.end(JSON.stringify(data))
})

exports.handler = app

/*
module.exports = {
  path: '/functions',
  handler: async (req, res) => {
    const baseURL = process.env.NODE_ENV === 'production' ? process.env.URL : 'http://192.168.1.6:3000'
    const currentUrl = new URL(req.url, baseURL)
    const queries = currentUrl.searchParams

    const data = await axios.get('https://graph.instagram.com/me/media', {
      params: { access_token: process.env.INSTAGRAM_ACCESS_TOKEN, fields: queries.get('fields') }
    })
      .then((response) => {
        if (response.status === 400) {
          res.statusCode = response.status
          return response.status
        }
        if (response.status === 200) {
          res.statusCode = response.status
          const feed = []
          for (const n in response.data.data) {
            // correggere qui inviare come parametri tutte le cose
            if (queries.getAll('mediatypes[]').includes(response.data.data[n].media_type)) {
              feed.push(response.data.data[n])
              if (feed.length >= queries.get('count')) {
                return feed
              }
            }
          }
        }
      })
      .catch((error) => {
        console.log(error.response.statusText)
        throw error.response.statusText
      })

    return res.end(JSON.stringify(data))
  }
}
*/
