import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
    if (!mime) return conn.reply(m.chat, '🚩 Responde a una *Imagen* o *Vídeo.*', m, rcanal)
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let img = await (await fetch(`${link}`)).buffer()

let txt = `▢ ${media.length} Byte(s)\n`
    txt += `• ${isTele ? '(Sin fecha de caducidad)' : '(Desconocido)'}\n`
    txt += `• *URL :* ${link}`

await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, fkontak, rcanal)
}
handler.help = ['tourl']
handler.tags = ['transformador']
handler.command = ['tourl', 'upload']

export default handler