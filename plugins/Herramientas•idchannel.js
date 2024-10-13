let handler = async (m, { conn, text, usedPrefix, groupMetadata, command}) => {

if (!text) return conn.reply(m.chat, `🌵 Te faltó el enlace del canal.`,  m, rcanal, )

try {
await m.react(rwait)
await m.reply('🚀 Sacando la id del canal.....')

const chat = await m.getChat();
const channelId = chat.id._serialized;
await m.reply('Id: ' + groupMetadata.id)
await m.react(done)

} catch {
await m.react(error)
await conn.reply(m.chat, '🌵 Ocurrió un error al sacar la id del canal', m, rcanal)
}}

handler.help = ['idchannel']
handler.tags = ['tools']
handler.command = ['id', 'idchannel']
handler.register = true 
export default handler

