//import db from '../lib/database.js'
import { levelup } from '../lib/canvas.js'

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
user.role = global.rpg.role(user.level).name
if (before !== user.level) {

m.reply(`*🎉 ¡ F E L I C I D A D E S ! 🎉*\n\n💫 Nivel Actual » *${user.level}*\n🌵 Rango » *${user.role}*\n📆 Fecha » *${moment.tz('America/Bogota').format('DD/MM/YY')}*\n\n> *\`¡Has alcanzado un Nuevo Nivel!\`*`).trim()

await conn.sendMessage(global.ch.ch1, { text: `👤 *Usuario:* ${name}
🐢 *Nivel anterior:* ${before}
✨️ *Nivel actual:* ${user.level}
👾 *Rango:* ${user.role}

💰 *Recompensa por alacanzar el nivel ${user.level}:*
- *1 🎫 Mini Tickets*
- *1 🪧 Cartón*
- *1 〽️ Barra de Oro*
- *1 💐 Caja de Jardinería*

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