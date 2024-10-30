const handler = async (m, {conn, text}) => {

if (!text) return await conn.reply(m.chat, `🚩 Y el mensaje que quieres compartir al canal?`, m)

try {
await m.react(rwait)

await conn.reply(m.chat, `🚩 El texto se envió correctamente al canal.\n\n🚀 Verifica tu mensaje aquí:\nhttps://whatsapp.com/channel/0029Vam7yUg77qVaz3sIAp0z`, m, fake)
await conn.reply(global.channelid, text, null, fake)
await m.react(done)

} catch {
await conn.reply(m.chat, `🐢 No se pudo enviar el mensaje al canal.`, m, rcanal)
await m.react(error)}}

handler.command = ['enviarmsg', 'enviarmsgcanal', 'enviarmsgchannel']
handler.rowner = false
handler.premium = true
export default handler