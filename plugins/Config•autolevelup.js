import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 

let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup)
return !0

let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
m.reply(`*🎉 ¡ F E L I C I D A D E S ! 🎉*\n\n💫 Nivel Actual » *${user.level}*\n🌵 Rango » *${user.role}*\n📆 Fecha » *${moment.tz('America/Bogota').format('DD/MM/YY')}*\n\n> *\`¡Has alcanzado un Nuevo Nivel!\`*
`.trim())
let niveltext = `${m.pushName || 'Anónimo'} Obtiene un nuevo nivel 🥳\n✨️ *Nuevo Nivel* » ${user.level}\n🌻 *Rango* » ${user.role}\n📆 *Fecha* » ${moment.tz('America/Bogota').format('DD/MM/YY')}`.trim()
await conn.sendMessage(global.channelid, { text: niveltext, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '🥳 ¡Un usuario obtiene un nivel nuevo!',
thumbnailUrl: fotoperfil,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
    }
} 