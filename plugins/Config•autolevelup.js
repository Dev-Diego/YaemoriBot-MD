import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
let cookies = `${pickRandom([6, 7, 10, 20, 15, 90, 100, 345, 87, 1, 2, 33, 12, 25])}` * 1; 
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 

let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup)
return !0

let before = user.level * 
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
m.reply(`*🎉 ¡ F E L I C I D A D E S ! 🎉*\n\n💫 Nivel Actual » *${user.level}*\n🎁 Recompensa » *+${cookies} Galletas*\n📆 Fecha » *${moment.tz('America/Bogota').format('DD/MM/YY')}*\n\n> *\`¡Has alcanzado un Nuevo Nivel!\`*
`.trim())
    }
user.cookies += cookies
} 