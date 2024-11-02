import { createHash } from 'crypto'  
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i 
let handler = async function (m, { conn, text, usedPrefix, command }) {
let codigosIdiomas = ['es', 'en']
let nombresIdiomas = {
'es': 'Español',
'en': 'English'
}

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => icons)

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
} 
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]

if (/^(verify|verificar|reg(ister)?)$/i.test(command)) {
if (user.registered === true) return m.reply('Ya está registrado.')
if (!Reg.test(text)) return m.reply('Y el nonbre')
let [_, name, splitter, age] = text.match(Reg)  
if (!name) return m.reply(lenguajeGB.smsVerify2())
if (!age) return m.reply(lenguajeGB.smsVerify3())
age = parseInt(age)
if (age > 50) return m.reply(lenguajeGB.smsVerify4()) 
if (age < 10) return m.reply(lenguajeGB.smsVerify5())
if (name.length >= 30) return m.reply(lenguajeGB.smsVerify6())
user.name = name + '✓ᚲ'.trim()
user.age = age
let listaIdiomasTexto = ''
listaIdiomasTexto += `🚩 Elije tu idioma.\n\n[ 1 ] Español\n[ 2 ] Ingles\n\nEjemplo: #idioma 2`
await conn.sendMessage(m.chat, { text: genText }, { quoted: m })        
} 

if (command == 'idioma') {        
if (!user.name || !user.age) return conn.sendMessage(m.chat, { text: `🌺 Verifique su edad y nombre para poder usar este comando.` }, { quoted: m })   
var emojiANumero = { "0", "1", "2" }
text = text.replace(/[\u{0030}-\u{0039}]\u{FE0F}\u{20E3}/gu, function(match) {
return emojiANumero[match] || match
})
let idioma = ''
function asignarIdioma(text) { 
if (!text) return conn.sendMessage(m.chat, { text: `🚩 Escriba el numero del idioma\n\n>[ 1 ] Español.\n[ 2 ] Ingles.` }, { quoted: m })          
if (text < 1 || (text > 5 && text)) {
conn.reply(m.chat, `*"${text}" no es válido.`, m) 
}
switch (text) {
case "1":
idioma = 'es'
break
case "2":
idioma = 'en'
break
default:
if (text == 0 || text > 5) return
return conn.reply(m.chat, `🚩 Recuerda usar el numero del idioma.\n\nEjemplo: #idioma 2`, m)
}
asignarIdioma(text)
user.Language = idioma
if (!user.Language) return m.reply(`🌺 No se logró configurar el idioma.`)
if (codigosIdiomas.includes(user.Language)) {
nombresIdiomas = nombresIdiomas[user.Language]
} else {
nombresIdiomas = `🌻 Idioma no detectado.`
}  
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
let caption = `👤 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗥 𝗢 👤
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
「💭」𝗡𝗼𝗺𝗯𝗿𝗲: ${user.name}
「✨️」𝗘𝗱𝗮𝗱: ${user.age} años
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
「🎁」𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:
• 15 Cookies 🍪
• 5 MiniCoins 🪙
• 245 Experiencia 💸
• 12 Tokens 💰
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
⪛✰ 𝐀𝐢 𝐘𝐚𝐞𝐦𝐨𝐫𝐢 - 𝐌𝐃 ✰⪜`.trim()
await conn.sendFile(m.chat, pp, 'yaemori.jpg', caption, m, false, { mentions: [aa] }) 
/*await conn.sendMessage(global.channelid, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '🥳 ¡Un usuario nuevo en mi base de datos!',
thumbnailUrl: fotoperfil,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })*/
}
}
handler.command = ['verify', 'verificar', 'reg', 'register', 'idioma']
export default handler