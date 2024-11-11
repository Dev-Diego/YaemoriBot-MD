const handler = async (m, {conn, text}) => {

let q = m.quoted ? m.quoted : m
let img = await q.download()
let imagen = (q.msg || q).mimetype || q.mediaType || "";
if (!imagen) return await conn.reply(m.chat, '🚩 Te faltó la foto', m)

try {
await m.react(rwait)

await conn.reply(m.chat, `🚩 Se envió correctamente al canal.`, m, fake)
//await conn.reply(global.channelid, text, null, fake)
await conn.sendFile(global.channelid, img, 'error.jpg', text, m, null, rcanal);
await m.react(done)

} catch {
await conn.reply(m.chat, `🐢 No se pudo enviar el mensaje al canal.`, m, rcanal)
await m.react(error)}}

handler.command = ['enviarmsg', 'enviarmsgcanal', 'enviarmsgchannel']
handler.rowner = true
export default handler