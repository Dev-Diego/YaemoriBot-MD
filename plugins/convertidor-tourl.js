import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return conn.reply(m.chat, '🚩 Responde a una *Imagen* o *Vídeo.*', m, rcanal)
  try {
  await m.react(rwait)
  conn.reply(m.chat, '🚩 Convirtiendo imagen en *url*...', m, {
  contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
  title: packname,
  body: dev,
  previewType: 0, thumbnail: icons,
  sourceUrl: channel }}})
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  await conn.reply(m.chat, `🚩 *Url:* ${link}`, m, rcanal)
  await m.react(done)
  } catch {
  await conn.reply(m.chat, '🌱 Ocurrió un error', m, fake)
  await m.react(error)}
 }

handler.help = ['tourl']
handler.tags = ['transformador']
handler.command = ['upload', 'tourl']

export default handler