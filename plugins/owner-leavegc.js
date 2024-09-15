let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let pp = 'https://telegra.ph/file/5ab1ca8bf65c1ddb36c20.mp4'
await conn.sendMessage(m.chat, { video: { url: pp }, gifPlayback: true, caption: '《✧》 *Ai Yaemori* Abandona El Grupo, Fué Genial Estar Aquí', mentions: [m.sender] }, { quoted: estilo })
await conn.groupLeave(id)}
handler.command = ['leave', 'leavegc', 'salir']
handler.group = true
handler.rowner = true
export default handler

export default handler

/*let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `🚩 *Ai Yaemori* Abandona El Grupo, Fué Genial Estar Aquí 👋`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = ['leave', 'leavegc', 'salir']
handler.group = true
handler.rowner = true
export default handler*/
