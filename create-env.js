const fs = require('fs')
fs.writeFileSync('./.env', `INSTAGRAM_ACCESS_TOKEN=${process.env.INSTAGRAM_ACCESS_TOKEN}\n`)
