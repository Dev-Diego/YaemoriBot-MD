import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 

let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')
let userName = m.pushName || 'Anónimo'
let chtxt = `
👤 *Usuario:* ${userName}
🐢 *Nivel anterior:* ${before}
✨️ *Nivel actual:* ${user.level}
👾 *Rango:* ${user.role}
`.trim()
if (!chat.autolevelup)
return !0
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
await conn.sendMessage(global.channelid, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '🥳 ¡Alguien a subido de nivel!',
thumbnailUrl: perfil,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })

m.reply(`*🎉 ¡ F E L I C I D A D E S ! 🎉*\n\n💫 Nivel Actual » *${user.level}*\n🌵 Rango » *${user.role}*\n📆 Fecha » *${moment.tz('America/Bogota').format('DD/MM/YY')}*\n\n> *\`¡Has alcanzado un Nuevo Nivel!\`*
`.trim())
    }
} 