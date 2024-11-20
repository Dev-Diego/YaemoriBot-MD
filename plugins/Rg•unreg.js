let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')

user.registered = false

let txt = `
*Un usuario menos en mi base de datos* 😿

👤 *User* » ${m.pushName || 'Anónimo'}
🌍 *Pais* » ${global.pais}
📆 *Fecha* » ${moment.tz('America/Bogota').format('DD/MM/YY')}
🕑 *Hora* » ${moment.tz('America/Bogota').format('HH:MM:SS')}
`.trim()
await conn.sendMessage(global.channelid, { text: txt, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '😿 ¡Un usuario menos en mi base de datos!',
thumbnailUrl: perfil,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })

return conn.reply(m.chat, `🚩 Tu registro ha sido anulado correctamente.`, m, rcanal)

}
handler.help = ['unreg']
handler.tags = ['rg']
handler.command = ['unreg', 'unregister']
handler.register = true
export default handler
