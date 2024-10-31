const handler = async (m, {conn, text}) => {

let ch

ch
if (!text) return await conn.reply(m.chat, `🚩 Envia el link del canak donde quieras enviar el texto, y envia el mensaje que quiera enviar.`, m)

if (text.includes("@newsletter")) {
ch = text
} else {
ch = await conn.newsletterMetadata("invite", channelUrl).then(data => data.id).catch(e => null)
}

try {
await m.react(rwait)

ch = await conn.newsletterMetadata("invite", channelUrl).then(data => data.id).catch(e => null)
await conn.reply(m.chat, `🚩 El texto se envió correctamente al canal.`, m, fake)
await conn.reply(ch, text, null, fake)
await m.react(done)

} catch {
await conn.reply(m.chat, `🐢 No se pudo enviar el mensaje al canal.`, m, rcanal)
await m.react(error)}}

handler.command = ['enviarmsg', 'enviarmsgcanal', 'enviarmsgchannel']
handler.rowner = true
export default handler