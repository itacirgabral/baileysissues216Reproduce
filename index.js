const { WAConnection } = require('@adiwajshing/baileys')

;(async () => {
  const conn = new WAConnection()
  conn.on('message-new', console.dir)
  await conn.connect()
})()