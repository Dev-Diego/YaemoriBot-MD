let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🌹 *EQUIPO DE AYUDANTES*
🌱 *Bot:* ${botname}
🍟 *Versión:* ${vs}
🪴 *Libreria:* ${libreria + baileys}

👑 *Propietario:*

• DevDiego
🌱 *Rol:* Propietario
🌴 *Número:* ${creador}
🚩 *GitHub:* https://github.com/Dev-Diego

🪴  *Colaboradores:*

• GataDios
🌱 *Rol:* Developer
🌴 *Número:* Wa.me/593968263524
🚩 *GitHub:* https://github.com/GataNina-Li


• David Chian 
🌱 *Rol:* Developer
🌴 *Número:* Wa.me/5351524614
🚩 *GitHub:* https://github.com/David-Chian

• elrebelde21
🌱 *Rol:* Developer
🌴 *Número:* Wa.me/573147616444
🚩 *GitHub:* https://github.com/elrebelde21

• AzamiJs
🌱 *Rol:* Developer
🌴 *Número:* Wa.me/5214434703586
🚩 *GitHub:* https://github.com/AzamiJs

• GabrielVz
🌱 *Rol:* Developer
🌴 *Número:* Wa.me/5493794297363
🚩 *GitHub:* https://github.com/glytglobal`
await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
await m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler