import ws from 'ws'

async function handler(m, { conn: _envio, usedPrefix }) {
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])]
function convertirMsADiasHorasMinutosSegundos(ms) {
var segundos = Math.floor(ms / 1000)
var minutos = Math.floor(segundos / 60)
var horas = Math.floor(minutos / 60)
var días = Math.floor(horas / 24)

segundos %= 60
minutos %= 60
horas %= 24

var resultado = ''
if (días !== 0) {
resultado += días + ' días, '
}
if (horas !== 0) {
resultado += horas + ' horas, '
}
if (minutos !== 0) {
resultado += minutos + ' minutos, '
}
if (segundos !== 0) {
resultado += segundos + ' segundos'
}

return resultado
}

const message = users.map((v, index) => `${index + 1} @${v.user.jid.replace(/[^0-9]/g, '')}\n wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n*Nombre:* ${v.user.name || '-'}\n*Actividad:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : 'Desconocido'}`).join('\n\n')
const replyMessage = message.length === 0 ? '🍟 *No hay sub bots disponibles por el momento.*\n- Verifique más tarde.' : message
const totalUsers = users.length
const responseMessage = `${replyMessage.trim()}`.trim()

await conn.reply(m.chat, `🌸 *Aquí tiene la lista de los subbots activós en estos momentos*\n\nJadiBots conectados: ${totalUsers || '0'}`, fkontak, rcanal)

await conn.reply(m.chat, responseMessage, fkontak, rcanal)

}
handler.help = ['bots']
handler.tags = ['serbot']
handler.command = ['bots', 'listjadibot']
export default handler

/*import ws from 'ws'

async function handler(m, { conn: stars, usedPrefix }) {
  let uniqueUsers = new Map()

  global.conns.forEach((conn) => {
    if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
      uniqueUsers.set(conn.user.jid, conn)
    }
  })

  let users = [...uniqueUsers.values()]

  let message = users.map((v, index) => `╭─⬣「 ${packname} 」⬣\n│⁖ฺ۟̇࣪·֗٬̤⃟🌸 *${index + 1}.-* @${v.user.jid.replace(/[^0-9]/g, '')}\n│❀ *Link:* https://wa.me/${v.user.jid.replace(/[^0-9]/g, '')}\n│❀ *Nombre:* ${v.user.name || '𝚂𝚄𝙱-𝙱𝙾𝚃'}\n╰─⬣`).join('\n\n')

  let replyMessage = message.length === 0 ? '' : message
  global.totalUsers = users.length
  let responseMessage = `╭━〔 𝗦𝗨𝗕-𝗕𝗢𝗧𝗦 𝗝𝗔𝗗𝗜𝗕𝗢𝗧 🤍 〕⬣\n┃ *𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝚂𝚄𝙱𝙱𝙾𝚃𝚂* : ${totalUsers || '0'}\n╰━━━━━━━━━━━━⬣\n\n${replyMessage.trim()}`.trim()

await stars.sendMessage(m.chat, { text: responseMessage, mentions: stars.parseMention(responseMessage) }, { quoted: fkontak })
// await conn.reply(m.chat, responseMessage, m, rcanal)
}

handler.help = ['bots']
handler.tags = ['serbot']
handler.command = ['listjadibot', 'bots']
export default handler*/
