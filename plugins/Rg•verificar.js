import { createHash } from 'crypto'  
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i 
let handler = async function (m, { conn, text, usedPrefix, command }) {
let codigosIdiomas = ['es', 'en']
let nombresIdiomas = {
'es': 'Español',
'en': 'English'
}

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let api = await axios.get(`${apis}/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
let userNationalityData = api.data.result
let userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido' 

let pp = await conn.profilePictureUrl(who, 'image').catch(_ => gataImg.getRandom())
let ppch = await conn.profilePictureUrl(who, 'image').catch(_ => gataMenu.getRandom())

let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]

if (/^(verify|verificar|reg(ister)?)$/i.test(command)) {
if (user.registered === true) return m.reply('*')
if (!Reg.test(text)) return m.reply('*')
let [_, name, splitter, age] = text.match(Reg)  
if (!name) return m.reply('**')
if (!age) return m.reply('***')
age = parseInt(age)
if (age > 50) return m.reply('****') 
if (age < 10) return m.reply('*****')
if (name.length >= 30) return m.reply('******')
user.name = name + '✓'.trim()
user.age = age
let listaIdiomasTexto = ''
listaIdiomasTexto += '*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n' 
listaIdiomasTexto += '*┆ 🌐 IDIOMA DINÁMICO 🌐*\n' 
listaIdiomasTexto += '*┆┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n' 
codigosIdiomas.forEach((codigo, index) => {
listaIdiomasTexto += `*┆* \`\`\`[ ${index + 1} ] » ${nombresIdiomas[codigo]}\`\`\`\n`
})
listaIdiomasTexto += '*╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n'    
let genText = `🌟 *NUEVA FUNCIÓN - MULTI LENGUAJE DINÁMICO (BETA)*\n
👉 *ESCRIBA EL NÚMERO PARA ELEGIR EL IDIOMA, EJEMPLO:*
✓ \`\`\`${usedPrefix}idiomayl 1️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomayl 1\`\`\`\n
${listaIdiomasTexto}
⚠️ *TENGA EN CONSIDERACIÓN QUE EL IDIOMA QUE SELECCIONE ${packname} SE ENCARGARÁ DE INTERACTUAR EN DICHO IDIOMA, SI SU IDIOMA NO APARECE SOLICITE QUE SE AGREGUE*\n${ig}\n
❇️ *SU REGISTRO ESTÁ EN PAUSA, COMPLETE EL IDIOMA PARA CONTINUAR*`
await conn.sendMessage(m.chat, { text: genText }, { quoted: m })        
} 

if (command == 'idiomayl') {        
if (!user.name || !user.age) return conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoFG']()}*REGISTRE SU NOMBRE Y EDAD PARA PODER USAR ESTE COMANDO*` }, { quoted: m })   
var emojiANumero = { "0️⃣": "0", "1️⃣": "1", "2️⃣": "2" }
text = text.replace(/[\u{0030}-\u{0039}]\u{FE0F}\u{20E3}/gu, function(match) {
return emojiANumero[match] || match
})
let idioma = ''
async function asignarIdioma(text) { 
if (!text) return conn.sendMessage(m.chat, { text: `Elije` }, { quoted: m })          
if (text < 1 || (text > codigosIdiomas.length && text)) {
conn.reply(m.chat, `Idioma no hay`, m) 
}
switch (text) {
case "1️⃣":
case "1":
idioma = 'es'
break
case "2️⃣":
case "2":
idioma = 'en'
break
default:
if (text == 0 || text > codigosIdiomas.length) return
return conn.reply(m.chat, `NUMERO`, m)
}}
await asignarIdioma(text)
user.YLLanguage = idioma
if (!user.YLLanguage) return m.reply(`ERROR`)
if (codigosIdiomas.includes(user.YLLanguage)) {
nombresIdiomas = nombresIdiomas[user.YLLanguage]
} else {
nombresIdiomas = `IDIOMA NO DETECTADO`
}  
await m.reply(`NLC`)
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
let caption = `Listo`.trim()
await conn.sendFile(m.chat, pp, 'gata.jpg', caption, m, false, { mentions: [aa] }) 
await m.reply(lenguajeGB.smsVerify8(usedPrefix)) 
await m.reply(`${sn}`) 
let chtxt = `🌐 *Idioma:* ${nombresIdiomas}\n🌎 *País:* ${userNationality}\n👤 *Usuario:* ${m.pushName || 'Anónimo'}\n✅ *Verificación:* ${user.name}\n🔢 *Edad:* ${user.age} años\n🐈 *Bot:* ${packname}`.trim()
await conn.sendMessage(global.channelid, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 Notificación General 🔔 】",
body: '🥳 ¡Nuevo usuario registrado!',
thumbnailUrl: ppch,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
}}
handler.command = ['verify', 'verificar', 'reg', 'register', 'idiomagb']
export default handler