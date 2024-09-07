import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw return m.reply('⚠️ *Te faltó el sticker')
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) return m.reply('⚠️ *Te faltó el sticker')
    const img = await m.quoted.download();
    if (!img) return m.reply('⚠️ *Te faltó el sticker')
    stiker = await addExif(img, packname || global.packsticker, author || global.author)
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
        if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: packname, body: dev, mediaType: 2, sourceUrl: redes, thumbnail: icons}}}, { quoted: fkontak })

    else throw '🚩 *Ocurrió un error*'
  }
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = ['take', 'wm']
export default handler