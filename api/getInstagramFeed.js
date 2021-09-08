import axios from 'axios'

export default {
  path: '/api',
  handler: async (req, res) => {
    const baseURL = process.env.NODE_ENV === 'production' ? 'https://veriweb.netlify.app' : 'http://192.168.1.6:3000'
    const currentUrl = new URL(req.url, baseURL)
    const queries = currentUrl.searchParams

    const data = await axios.get('https://graph.instagram.com/me/media', {
      params: { access_token: process.env.INSTAGRAM_ACCESS_TOKEN, fields: queries.get('fields') }
    })
      .then((response) => {
        if (response.status === 400) {
          // this.error = response.error.message
        }
        if (response.status === 200) {
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
        throw error
      })

    return res.end(JSON.stringify(data))
  }
}
