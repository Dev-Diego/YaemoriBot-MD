import db from '../lib/database.js'
import { createHash } from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`🍭 Ya estás registrado.\n\n*¿Quiere volver a registrarse?*\n\nUse este comando para eliminar su registro.\n*${usedPrefix}unreg*`)
  if (!Reg.test(text)) return m.reply(`🌹 Formato incorrecto.\n\nUso del comamdo: *${usedPrefix + command} nombre.edad*\nEjemplo : *${usedPrefix + command} ${name2}.666*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('🚩 El nombre no puede estar vacío.')
  if (!age) return m.reply('🚩 La edad no puede estar vacía.')
  if (name.length >= 100) return m.reply('🚩 El nombre es demasiado largo.' )
  age = parseInt(age)
  if (age > 100) return m.reply('👴🏻 Wow el abuelo quiere jugar al bot.')
  if (age < 5) return m.reply('🚼  hay un abuelo bebé jsjsj. ')
  user.name = name + '✓'.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  global.db.data.users[m.sender].money += 600
  global.db.data.users[m.sender].cookies += 15
  global.db.data.users[m.sender].exp += 245
  global.db.data.users[m.sender].joincount += 5
  let sn = createHash('md5').update(m.sender).digest('hex')
let regbot = `👤 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗥 𝗢 👤\n`
regbot += `•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`
regbot += `「💭」𝗡𝗼𝗺𝗯𝗿𝗲: ${name}\n`
regbot += `「✨️」𝗘𝗱𝗮𝗱: ${age} años\n`
regbot += `•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`
regbot += `「🎁」𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:\n`
regbot += `• 15 Cookies 🍪\n`
regbot += `• 5 MiniCoins 🪙\n`
regbot += `• 245 Experiencia 💸\n`
regbot += `• 12 Tokens 💰\n`
regbot += `•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`
regbot += `${packname}`
await m.react('📩')
await conn.sendMessage(m.chat, { text: regbot, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: global.channelid, serverMessageId: '', newsletterName: 'YaemoriBot - Test 🚩' }, forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": '⊱『✅𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥✅』⊰', "body": dev, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: [yt, channel, tiktok, correo].getRandom()}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
let chtxt = `👤 *Usuario* » ${m.pushName || 'Anónimo'}\n🌎 *Pais* » ${global.userNationality}\n🗃 *Verificación* » ${user.name}\n🌺 *Edad* » ${user.age} años\n📆 *Fecha* » ${moment.tz('America/Bogota').format('DD/MM/YY')}`.trim()
await conn.sendMessage(global.channelid, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '🥳 ¡Un usuario nuevo en mi base de datos!',
thumbnailUrl: fotoperfil,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler