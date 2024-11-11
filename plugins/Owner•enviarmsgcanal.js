const handler = async (m, {conn, text}) => {

let q = m.quoted ? m.quoted : m
let img = await q.download()
if (!img) return await conn.reply(m.chat, '🚩 Te faltó la foto', m)

else {
if (!text) return await conn.reply(m.chat, `🚩 Y el texto que quiere transmitir al canal?`, m)}

try {
await m.react(rwait)

await conn.reply(m.chat, `🚩 El texto se envió correctamente al canal.`, m, fake)
//await conn.reply(global.channelid, text, null, fake)
await conn.sendFile(global.channelid, img, 'error.jpg', text, m, null, rcanal);
await m.react(done)

} catch {
await conn.reply(m.chat, `🐢 No se pudo enviar el mensaje al canal.`, m, rcanal)
await m.react(error)}}

handler.command = ['enviarmsg', 'enviarmsgcanal', 'enviarmsgchannel']
handler.rowner = true
export default handler