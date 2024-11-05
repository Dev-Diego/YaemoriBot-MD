let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false

let txt = `\`REGISTRO ANULADO\`\n\n👤 *User* » ${m.pushName || 'Anónimo'}\n🌍 *Pais* » ${global.userNationality}\n🌺 *Bot* » ${packname}`.trim()
await conn.sendMessage(global.channelid, { text: txt, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '😿 ¡Un usuario menos en mi base de datos!',
thumbnailUrl: fotoperfil,
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
