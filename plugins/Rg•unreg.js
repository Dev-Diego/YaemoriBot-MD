let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false
/*return conn.reply(m.chat, `🚩 Usted anuló su registro de *YaemoriBot-MD 🌻✨️*

🚩 Puede usar #reg nombre.edad para realizar un nuevo registro`, m, rcanal)*/

let chtxt = '`REGISTRO ANULADO`\n\n👤 User: ' + user

await conn.sendMessage(global.channelid, { text: chtxt, contextInfo: {
externalAdReply: {
title: "🔔 Notificación General 🔔 ",
body: '🐢 Un usuario anuló su registrado',
thumbnailUrl: fotoperfil,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })

}
handler.help = ['unreg']
handler.tags = ['rg']
handler.command = ['unreg', 'unregister']
handler.register = true
export default handler
