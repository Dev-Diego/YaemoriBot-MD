let handler = m => m
handler.before = async function (m) {
let pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg'
this.suit = this.suit ? this.suit : {}
if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
if (room) {
let win = '' 
let tie = false
if (m.sender == room.p2 && /^(acc(ept)?|Aceptar|acerta|aceptar|gas|aceptare?|nao|Rechazar|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
let textno = `🌵 @${room.p2.split`@`[0]} Rechazó el pvp, el juego se cancela.`
m.reply(textno, null, {mentions: this.parseMention(textno)})
delete this.suit[room.id]
return !0 }
room.status = 'play' 
room.asal = m.chat
clearTimeout(room.waktu)
let textplay = `🎮 Game - Pvp - Game 🎮\n\n🌵 El juego comienza, las opciones han sido enviados a los chats privados de: @${room.p.split`@`[0]} y @${room.p2.split`@`[0]}\n\n🌵 Seleccionen una opción en sus chats privados, respectivamente.\n*🌵 Elegir opción en: wa.me/${conn.user.jid.split`@`[0]}*`
m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)})
let comienzop = `🎮 Game - Pvp - Game 🎮\n\n🌵 El juego comienza, las opciones han sido enviados a los chats privados de: @${room.p.split`@`[0]} y @${room.p2.split`@`[0]}\n\n🌵 Seleccionen una opción en sus chats privados, respectivamente.\n*🌵 Elegir opción en: wa.me/${conn.user.jid.split`@`[0]}*`

if (!room.pilih) this.sendMessage(room.p, { text: comienzop }, { quoted: fkontak })  
if (!room.pilih2) this.sendMessage(room.p2, { text: comienzop2 }, { quoted: fkontak })
room.waktu_milih = setTimeout(() => {
let iniciativa = `🌵 Ningun jugador tomo la iniciativa de empezar el juego, el pvp de ha cancelado.`                              
if (!room.pilih && !room.pilih2) this.sendMessage(m.chat, { text: iniciativa }, { quoted: fkontak })
else if (!room.pilih || !room.pilih2) {
win = !room.pilih ? room.p2 : room.p 
let textnull = `@${(room.pilih ? room.p2 : room.p).split`@`[0]} 𝙉𝙊 𝙀𝙇𝙀𝙂𝙄𝙎𝙏𝙀 𝙉𝙄𝙉𝙂𝙐𝙉𝘼 𝙊𝙋𝘾𝙄𝙊𝙉, 𝙁𝙄𝙉 𝘿𝙀𝙇 𝙋𝙑𝙋`
this.sendMessage(m.chat, { text: textnull }, { quoted: fkontak }, { mentions: this.parseMention(textnull) })
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
}
delete this.suit[room.id]
return !0
}, room.timeout)}
let jwb = m.sender == room.p
let jwb2 = m.sender == room.p2
let g = /tijera/i
let b = /piedra/i
let k = /papel/i
let reg = /^(tijera|piedra|papel)/i
if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
room.pilih = reg.exec(m.text.toLowerCase())[0]
room.text = m.text
m.reply(`✅ 𝙃𝘼𝙎 𝙀𝙇𝙀𝙂𝙄𝘿𝙊 ${m.text}, 𝙍𝙀𝙂𝙍𝙀𝙎𝘼 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊 𝙔 ${room.pilih2 ? `*𝙍𝙀𝙑𝙄𝙎𝘼 𝙇𝙊𝙎 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎*` : '*𝙀𝙎𝙋𝙀𝙍𝘼 𝙇𝙊𝙎 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎*'}`) 
if (!room.pilih2) this.reply(room.p2, `🌵 El otro usuario ya eligió, te toca a ti elejir.`, fkontak, 0)}
if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
room.pilih2 = reg.exec(m.text.toLowerCase())[0]
room.text2 = m.text
m.reply(`✅ 𝙃𝘼𝙎 𝙀𝙇𝙀𝙂𝙄𝘿𝙊 ${m.text}, 𝙍𝙀𝙂𝙍𝙀𝙎𝘼 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊 𝙔 ${room.pilih ? `*𝙍𝙀𝙑𝙄𝙎𝘼 𝙇𝙊𝙎 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎*` : '*𝙀𝙎𝙋𝙀𝙍𝘼 𝙇𝙊𝙎 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎*'}`)
if (!room.pilih) this.reply(room.p, `🌵 El otro usuario ya eligió, te toca a ti elejir.`, fkontak, 0)}
let stage = room.pilih
let stage2 = room.pilih2
if (room.pilih && room.pilih2) {
clearTimeout(room.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = room.p
else if (b.test(stage) && k.test(stage2)) win = room.p2
else if (g.test(stage) && k.test(stage2)) win = room.p
else if (g.test(stage) && b.test(stage2)) win = room.p2
else if (k.test(stage) && b.test(stage2)) win = room.p
else if (k.test(stage) && g.test(stage2)) win = room.p2
else if (stage == stage2) tie = true 

this.reply(room.asal, `🥳 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 𝘿𝙀𝙇 𝙋𝙑𝙋\n\n${tie ? '🥴 𝙀𝙈𝙋𝘼𝙏𝙀!!' : ''} *@${room.p.split`@`[0]} (${room.text})* ${tie ? '' : room.p == win ? ` *𝙂𝘼𝙉𝘼𝙍𝙏𝙀 🥳 ${room.poin} XP*` : ` *𝙋𝙀𝙍𝘿𝙄𝙊́ 🤡 ${room.poin_lose} XP*`}
*@${room.p2.split`@`[0]} (${room.text2})* ${tie ? '' : room.p2 == win ? `*𝙂𝘼𝙉𝘼𝙍𝙏𝙀 🥳 ${room.poin} XP*` : ` *𝙋𝙀𝙍𝘿𝙄𝙊́ 🤡 ${room.poin_lose} XP*`}
`.trim(), m, { mentions: [room.p, room.p2] } )
if (!tie) {
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose
}
delete this.suit[room.id]}}
return !0
}
handler.exp = 0
handler.game = true
export default handler
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]}