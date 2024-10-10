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
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  global.db.data.users[m.sender].money += 600
  global.db.data.users[m.sender].cookies += 15
  global.db.data.users[m.sender].exp += 245
  global.db.data.users[m.sender].joincount += 5
  let sn = createHash('md5').update(m.sender).digest('hex')
let menu = ``
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
let listSections = []
listSections.push({
title: `✎ SELECCIÓNA LO QUE NECESITES`, highlight_label: ``,
rows: [
{
header: "𓆩࿔ྀુ⃟🌹⃟𝘾𝙍𝙀𝘼𝘿𝙊𝙍 ╎👑",
title: ``,
description: `✨️ Muestra el creador de la bot.`,
id: `#creador`,
},
{
header: "𓆩࿔ྀુ⃟🌹⃟𝙂𝙍𝙐𝙋𝙊𝙎 ╎📢",
title: ``,
description: `🌸 Muestra los grupos principales de la bot.`,
id: `#grupos`,
},
{
header: "𓆩࿔ྀુ⃟🌹⃟𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 ╎ 🍿ꪳ͢",
title: ``,
description: `🐢 Muestra el menú completo.`,
id: `#allmenu`,
},
],
})
let vid = "https://qu.ax/OlTj.jpg"
let img = "https://qu.ax/OlTj.jpg"
await conn.sendListB(m.chat, menu, regbot, ` 𓏲᭨ ̤̤֟✧⏤͟͞ू⃪٭ۣۜ ፝͜⁞Oᴘᴄɪᴏɴᴇs ᭄፝🍟𑜟꙲𒁑⁩`, [vid, img].getRandom(), listSections, m)
}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler