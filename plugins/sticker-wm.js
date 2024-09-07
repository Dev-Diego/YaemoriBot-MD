import { addExif } from '../lib/sticker.js'


let handler = async (m, { conn, text }) => {
  if (!m.quoted) await m.reply('*⚠ El sticker!*')
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) await m.reply('⚠️ *Responde a un sticker.*')
    let img = await m.quoted.download()
    if (!img) await m.reply('⚠ *Responde a un sticker!*')
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
  await m.react(rwait)
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: packname, body: dev, mediaType: 2, sourceUrl: redes, thumbnail: icons}}}, { quoted: fkontak })
   await m.react(done)
    else throw '⚠️ *La conversión falló.*'
  }
}
handler.help = ['take *<nombre>|<autor>*']
handler.tags = ['sticker']
handler.command = ['take', 'robar', 'wm'] 

export default handler