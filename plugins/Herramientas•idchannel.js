let handler = async (m, { conn, usedPrefix, command}) => {

if (!text) return conn.reply(m.chat, `🌵 Te faltó el enlace del canal.`,  m, rcanal, )

const chat = await m.getChat();
const channelId = chat.id._serialized;

await m.reply('Id: ' + channelId)

}
handler.help = ['idchannel']
handler.tags = ['tools']
handler.command = ['id', 'idchannel']
handler.register = true 
export default handler

