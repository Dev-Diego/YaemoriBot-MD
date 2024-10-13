import { Client } from 'whatsapp-web.js'

let handler = async (m, { conn, text, usedPrefix, command}) => {

if (!text) return conn.reply(m.chat, `🌵 Te faltó el enlace del canal.`,  m, rcanal, )

try {
await m.react(rwait)
await m.reply('🚀 Sacando la id del canal.....')

await m.reply(`Id: ${chat.id._serialized}`)
await m.react(done)

} catch (e) {
await m.react(error)
console.log(e)
await conn.reply(m.chat, '🌵 Ocurrió un error al sacar la id del canal', m, rcanal)
}}

handler.help = ['idchannel']
handler.tags = ['tools']
handler.command = ['id', 'idchannel']
handler.register = true 
export default handler

