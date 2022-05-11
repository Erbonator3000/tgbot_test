const axios = require('axios')
  
const botToken = process.env.BOT_TOKEN
const chat_id = process.env.CHAT_ID

const getUrl = `https://api.telegram.org/bot${botToken}/getUpdates`
const sendUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chat_id}&text=appAlive`

setInterval(() => {
  axios.get(getUrl)
.then(res => {
  const result = res.data
  if (result.ok === true) {
    const updates = result.result
    const latest = updates.reduce((p, c) => p.updateId>c.updateId?p:c, {updateId: 0})
    console.log(latest)
    if (latest.message.text === 'check') {
      axios.get(sendUrl)
    }
  }
})
}, 5000)
