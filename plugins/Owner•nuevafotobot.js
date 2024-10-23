//
// Creditos:
// @DevDiego
//

async function handler(m, { conn: command, usedPrefix, args }) {

  let q = m.quoted ? m.quoted : m
  let img = await q.download?.()
  if (!img) return conn.reply(m.chat, `🚩 Responde a una imagen.`, m, rcanal)
  try {
    const imagePath = './src/img/catalogo.jpg'
    const imageData = fs.readFileSync(imagePath, { encoding: 'base64' })
    await m.setProfilePic(imageData);
    await m.reply('🌵 Foto de perfil cambiada con éxito.');
    await m.react(done)
  } catch (e) {
   await m.react(error)
   await m.reply(`🚩 No se pudo cambiar la foto de perfil.\n\n${e}`)
}}

handler.tags = ['owner']
handler.help = ['nuevafotobot *<imagen>*']
handler.command = ['nuevafotobot']
handler.owner = true 
export default handler