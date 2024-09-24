import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !/اكتب.*لمح/i.test(m.quoted.text)) return !0
  this.tebakgame = this.tebakgame ? this.tebakgame : {}
  if (!(id in this.tebakgame)) return m.reply('✳ انتهت اللعبه')
  if (m.quoted.id == this.tebakgame[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakgame[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tebakgame[id][2]
      global.db.data.users[m.sender].limit += 1
      m.reply(`*اجـابـة صـحـيـحـة✅ ❯*\n+${this.tebakgame[id][2]} الـجـائـزة💰↞\n+1 نقطة`)
      clearTimeout(this.tebakgame[id][3])
      delete this.tebakgame[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`اقتربت من الاجابه`)
    else m.reply(`*اجـابـة خـاطـئـة❌ ❯*`)
  }
  return !0
}
handler.exp = 0

export default handler
