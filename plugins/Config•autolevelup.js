//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg') 
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
let name = m.pushName || 'Anónimo'
if (!chat.autolevelup) return !0
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier))
user.level++
if (before !== user.level) {

global.db.data.users[m.sender].money += hasil
global.db.data.users[m.sender].cookies += hasil2
global.db.data.users[m.sender].exp += hasil3
global.db.data.users[m.sender].joincount += hasil4

m.reply(`*🎉 ¡ F E L I C I D A D E S ! 🎉*\n\n💫 Nivel Actual » *${user.level}*\n🌵 Rango » *${user.role}*\n📆 Fecha » *${moment.tz('America/Bogota').format('DD/MM/YY')}*\n\n> *\`¡Has alcanzado un Nuevo Nivel!\`*`)

await conn.sendMessage(global.channelid, { text: `👤 *Usuario:* ${name}
🐢 *Nivel anterior:* ${before}
⭐️ *Nivel actual:* ${user.level}
👾 *Rango:* ${user.role}

💰 *Recompensa por alacanzar el nivel ${user.level}:*
- *${hasil} Cookies 🍪*
- *${hasil2} Exp ✨️*
- *${hasil3} money 💸*
- *${hasil4} Joincount 🪙*

> 👀 Siguiente recompensa en el otro *nivel*`, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '🥳 ¡Un usuario tiene un nuevo nivel!',
thumbnailUrl: perfil, 
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
}}   

let hasil = ["20", "5", "7", "8", "88", "40", "50", "70", "90", "999", "300"].getRandom()

let hasil2 = ["20", "5", "7", "8", "88", "40", "50", "70", "90", "999", "300"].getRandom()    

let hasil3 = ["20", "5", "7", "8", "88", "40", "50", "70", "90", "999", "300"].getRandom()

let hasil4 = ["20", "5", "7", "8", "88", "40", "50", "70", "90", "999", "300"].getRandom()