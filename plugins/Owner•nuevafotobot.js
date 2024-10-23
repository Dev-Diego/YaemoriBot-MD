async function handler(m, { conn: _envio, usedPrefix }) {

  try {
     const imagePath = 'https://qu.ax/CfboF.jpg'
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