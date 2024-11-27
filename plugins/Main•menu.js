import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
const { levelling } = '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {        
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, chocolates, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let delirius = await axios.get(`https://deliriussapi-oficial.vercel.app/tools/country?text=${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}`)
let paisdata = delirius.data.result
let mundo = paisdata ? `${paisdata.name} ${paisdata.emoji}` : 'Desconocido'
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
const img = ['https://qu.ax/zzWdD.jpg', 'https://qu.ax/LkHoh.jpg', 'https://qu.ax/JceST.jpg']
let menu = `*˚₊·˚₊· ͟͟͞͞➳❥ ${taguser}*
*˚₊·˚₊· ͟͟͞͞➳❥* 𝙔𝙖𝙚𝙢𝙤𝙧𝙞𝘽𝙤𝙩-𝙈𝘿 🌻✨
 
╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Info User*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟👤┊Cliente » \`\`\`${nombre}\`\`\`
│🍂⃟🌍┊Pais » \`\`\`${mundo}\`\`\`
│🍂⃟🍫┊Chocolates » \`\`\`${chocolates}\`\`\`
│🍂⃟💰┊Experiencia » \`\`\`${exp}\`\`\`
│🍂⃟⭐️┊Rango » \`\`\`${role}\`\`\`
│🍂⃟🧋┊Nivel » \`\`\`${level}\`\`\`
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Info Bot*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟👑┊Author » \`\`\`@DevDiego\`\`\`
│🍂⃟🍟┊Bot » \`\`\`${(conn.user.jid == global.conn.user.jid ? 'Oficial' : 'SubBot')}\`\`\`
│🍂⃟☁️┊Librería » \`\`\`Baileys\`\`\`
│🍂⃟📆┊Fecha » \`\`\`${moment.tz('America/Bogota').format('DD/MM/YY')}\`\`\`
│🍂⃟🕑┊Activa » \`\`\`${uptime}\`\`\`
│🍂⃟👥️️┊Usuarios » \`\`\`${totalreg}\`\`\`
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Main*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🍄┊${usedPrefix}afk 
│🍂⃟🍄┊${usedPrefix}grupos
│🍂⃟🍄┊${usedPrefix}skyplus
│🍂⃟🍄┊${usedPrefix}instalaryaemori
│🍂⃟🍄┊${usedPrefix}menu
│🍂⃟🍄┊${usedPrefix}menu2
│🍂⃟🍄┊${usedPrefix}hornymenu
│🍂⃟🍄┊${usedPrefix}runtime
│🍂⃟🍄┊${usedPrefix}script
│🍂⃟🍄┊${usedPrefix}solicitud
│🍂⃟🍄┊${usedPrefix}blocklist
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Busquedas*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🎋┊${usedPrefix}githubsearch
│🍂⃟🎋┊${usedPrefix}google 
│🍂⃟🎋┊${usedPrefix}mercadolibre
│🍂⃟🎋┊${usedPrefix}npmjs
│🍂⃟🎋┊${usedPrefix}tiktoksearch <txt>
│🍂⃟🎋┊${usedPrefix}tweetposts
│🍂⃟🎋┊${usedPrefix}ytsearch
│🍂⃟🎋┊${usedPrefix}imagen <query>
│🍂⃟🎋┊${usedPrefix}pinterest
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Juegos*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟☁️┊${usedPrefix}abrazar <@usuario>
│🍂⃟☁️┊${usedPrefix}acertijo
│🍂⃟☁️┊${usedPrefix}sonrojarse 
│🍂⃟☁️┊${usedPrefix}gay 
│🍂⃟☁️┊${usedPrefix}lesbiana 
│🍂⃟☁️┊${usedPrefix}pajero 
│🍂⃟☁️┊${usedPrefix}pajera 
│🍂⃟☁️┊${usedPrefix}puto 
│🍂⃟☁️┊${usedPrefix}puta 
│🍂⃟☁️┊${usedPrefix}manco 
│🍂⃟☁️┊${usedPrefix}manca 
│🍂⃟☁️┊${usedPrefix}rata 
│🍂⃟☁️┊${usedPrefix}prostituta 
│🍂⃟☁️┊${usedPrefix}prostituto 
│🍂⃟☁️┊${usedPrefix}apostar 
│🍂⃟☁️┊${usedPrefix}cf
│🍂⃟☁️┊${usedPrefix}consejo
│🍂⃟☁️┊${usedPrefix}dance
│🍂⃟☁️┊${usedPrefix}doxear
│🍂⃟☁️┊${usedPrefix}formarpareja
│🍂⃟☁️┊${usedPrefix}violar 
│🍂⃟☁️┊${usedPrefix}enamorada 
│🍂⃟☁️┊${usedPrefix}math
│🍂⃟☁️┊${usedPrefix}meme
│🍂⃟☁️┊${usedPrefix}acariciar 
│🍂⃟☁️┊${usedPrefix}personalidad
│🍂⃟☁️┊${usedPrefix}piropo
│🍂⃟☁️┊${usedPrefix}pokedex 
│🍂⃟☁️┊${usedPrefix}pucheros 
│🍂⃟☁️┊${usedPrefix}ppt
│🍂⃟☁️┊${usedPrefix}pregunta
│🍂⃟☁️┊${usedPrefix}dormir 
│🍂⃟☁️┊${usedPrefix}reto
│🍂⃟☁️┊${usedPrefix}ruleta 
│🍂⃟☁️┊${usedPrefix}triste 
│🍂⃟☁️┊${usedPrefix}ship
│🍂⃟☁️┊${usedPrefix}love
│🍂⃟☁️┊${usedPrefix}simi
│🍂⃟☁️┊${usedPrefix}bot
│🍂⃟☁️┊${usedPrefix}top
│🍂⃟☁️┊${usedPrefix}zodiac
│🍂⃟☁️┊${usedPrefix}slot
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *JadiBots*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🌸┊${usedPrefix}serbot
│🍂⃟🌸┊${usedPrefix}serbot --code
│🍂⃟🌸┊${usedPrefix}token
│🍂⃟🌸┊${usedPrefix}pausarai
│🍂⃟🌸┊${usedPrefix}sockets
│🍂⃟🌸┊${usedPrefix}deletebot
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Rpg*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🍁┊${usedPrefix}bank
│🍂⃟🍁┊${usedPrefix}chocolates
│🍂⃟🍁┊${usedPrefix}crimen
│🍂⃟🍁┊${usedPrefix}daily
│🍂⃟🍁┊${usedPrefix}claim
│🍂⃟🍁┊${usedPrefix}depositar
│🍂⃟🍁┊${usedPrefix}lb
│🍂⃟🍁┊${usedPrefix}levelup
│🍂⃟🍁┊${usedPrefix}minar
│🍂⃟🍁┊${usedPrefix}retirar
│🍂⃟🍁┊${usedPrefix}rob2
│🍂⃟🍁┊${usedPrefix}rob
│🍂⃟🍁┊${usedPrefix}addprem 
│🍂⃟🍁┊${usedPrefix}slut
│🍂⃟🍁┊${usedPrefix}trabajar
│🍂⃟🍁┊${usedPrefix}transfer
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Registro*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🚩┊${usedPrefix}perfil
│🍂⃟🚩┊${usedPrefix}unreg
│🍂⃟🚩┊${usedPrefix}reg
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Exp*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🍿┊${usedPrefix}daily
│🍂⃟🍿┊${usedPrefix}Buy
│🍂⃟🍿┊${usedPrefix}Buyall
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Stickers*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟⭐️┊${usedPrefix}qc
│🍂⃟⭐️┊${usedPrefix}stiker
│🍂⃟⭐️┊${usedPrefix}wm
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Animes*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟✨️┊${usedPrefix}animelink
│🍂⃟✨️┊${usedPrefix}akira
│🍂⃟✨️┊${usedPrefix}akiyama
│🍂⃟✨️┊${usedPrefix}anna
│🍂⃟✨️┊${usedPrefix}asuna
│🍂⃟✨️┊${usedPrefix}ayuzawa
│🍂⃟✨️┊${usedPrefix}boruto
│🍂⃟✨️┊${usedPrefix}chiho
│🍂⃟✨️┊${usedPrefix}chitoge
│🍂⃟✨️┊${usedPrefix}deidara
│🍂⃟✨️┊${usedPrefix}erza
│🍂⃟✨️┊${usedPrefix}elaina
│🍂⃟✨️┊${usedPrefix}eba
│🍂⃟✨️┊${usedPrefix}emilia
│🍂⃟✨️┊${usedPrefix}hestia
│🍂⃟✨️┊${usedPrefix}hinata
│🍂⃟✨️┊${usedPrefix}inori
│🍂⃟✨️┊${usedPrefix}isuzu
│🍂⃟✨️┊${usedPrefix}itachi
│🍂⃟✨️┊${usedPrefix}itori
│🍂⃟✨️┊${usedPrefix}kaga
│🍂⃟✨️┊${usedPrefix}kagura
│🍂⃟✨️┊${usedPrefix}kaori
│🍂⃟✨️┊${usedPrefix}keneki
│🍂⃟✨️┊${usedPrefix}kotori
│🍂⃟✨️┊${usedPrefix}kurumi
│🍂⃟✨️┊${usedPrefix}madara
│🍂⃟✨️┊${usedPrefix}mikasa
│🍂⃟✨️┊${usedPrefix}miku
│🍂⃟✨️┊${usedPrefix}minato
│🍂⃟✨️┊${usedPrefix}naruto
│🍂⃟✨️┊${usedPrefix}nezuko
│🍂⃟✨️┊${usedPrefix}sagiri
│🍂⃟✨️┊${usedPrefix}sasuke
│🍂⃟✨️┊${usedPrefix}sakura
│🍂⃟✨️┊${usedPrefix}cosplay
│🍂⃟✨️┊${usedPrefix}infoanime
│🍂⃟✨️┊${usedPrefix}lolice
│🍂⃟✨️┊${usedPrefix}waifu
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Grupos*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🌻┊${usedPrefix}add
│🍂⃟🌻┊${usedPrefix}banchat 
│🍂⃟🌻┊${usedPrefix}grupo abrir / cerrar
│🍂⃟🌻┊${usedPrefix}delete
│🍂⃟🌻┊${usedPrefix}demote
│🍂⃟🌻┊${usedPrefix}encuesta 
│🍂⃟🌻┊${usedPrefix}hidetag
│🍂⃟🌻┊${usedPrefix}infogrupo
│🍂⃟🌻┊${usedPrefix}invite 
│🍂⃟🌻┊${usedPrefix}kick
│🍂⃟🌻┊${usedPrefix}link
│🍂⃟🌻┊${usedPrefix}listadv
│🍂⃟🌻┊${usedPrefix}promote
│🍂⃟🌻┊${usedPrefix}revoke
│🍂⃟🌻┊${usedPrefix}tagall 
│🍂⃟🌻┊${usedPrefix}invocar 
│🍂⃟🌻┊${usedPrefix}unbanchat
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *On/Off*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟💧┊${usedPrefix}enable
│🍂⃟💧┊${usedPrefix}disable
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Descargas*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🍭┊${usedPrefix}fb
│🍂⃟🍭┊${usedPrefix}gitclone 
│🍂⃟🍭┊${usedPrefix}imagen 
│🍂⃟🍭┊${usedPrefix}ig
│🍂⃟🍭┊${usedPrefix}tw
│🍂⃟🍭┊${usedPrefix}mediafire
│🍂⃟🍭┊${usedPrefix}apkmod
│🍂⃟🍭┊${usedPrefix}play
│🍂⃟🍭┊${usedPrefix}play2
│🍂⃟🍭┊${usedPrefix}play3
│🍂⃟🍭┊${usedPrefix}play4
│🍂⃟🍭┊${usedPrefix}spotify
│🍂⃟🍭┊${usedPrefix}tiktok
│🍂⃟🍭┊${usedPrefix}ytmp4 
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Herramientas*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🌺┊${usedPrefix}toanime
│🍂⃟🌺┊${usedPrefix}tts
│🍂⃟🌺┊${usedPrefix}imagen
│🍂⃟🌺┊${usedPrefix}spamwa 
│🍂⃟🌺┊${usedPrefix}fake
│🍂⃟🌺┊${usedPrefix}remini
│🍂⃟🌺┊${usedPrefix}hd
│🍂⃟🌺┊${usedPrefix}enhance
│🍂⃟🌺┊${usedPrefix}ssweb
│🍂⃟🌺┊${usedPrefix}trad
│🍂⃟🌺┊${usedPrefix}nuevafotochannel
│🍂⃟🌺┊${usedPrefix}nosilenciarcanal
│🍂⃟🌺┊${usedPrefix}silenciarcanal
│🍂⃟🌺┊${usedPrefix}noseguircanal
│🍂⃟🌺┊${usedPrefix}seguircanal
│🍂⃟🌺┊${usedPrefix}avisoschannel
│🍂⃟🌺┊${usedPrefix}resiviravisos
│🍂⃟🌺┊${usedPrefix}inspect
│🍂⃟🌺┊${usedPrefix}eliminarfotochannel
│🍂⃟🌺┊${usedPrefix}reactioneschannel
│🍂⃟🌺┊${usedPrefix}reaccioneschannel
│🍂⃟🌺┊${usedPrefix}nuevonombrecanal
│🍂⃟🌺┊${usedPrefix}nuevadescchannel
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Información*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🍟┊${usedPrefix}creador
│🍂⃟🍟┊${usedPrefix}editautoresponder
│🍂⃟🍟┊${usedPrefix}ds
│🍂⃟🍟┊${usedPrefix}dsowner
│🍂⃟🍟┊${usedPrefix}fixmsgespera
│🍂⃟🍟┊${usedPrefix}status
│🍂⃟🍟┊${usedPrefix}info
│🍂⃟🍟┊${usedPrefix}ping
│🍂⃟🍟┊${usedPrefix}sistema
│🍂⃟🍟┊${usedPrefix}speed
│🍂⃟🍟┊${usedPrefix}speedtest
│🍂⃟🍟┊${usedPrefix}reportar
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Nsfw*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🔥┊${usedPrefix}nsfwloli
│🍂⃟🔥┊${usedPrefix}nsfwfoot
│🍂⃟🔥┊${usedPrefix}nsfwass
│🍂⃟🔥┊${usedPrefix}nsfwbdsm
│🍂⃟🔥┊${usedPrefix}nsfwcum
│🍂⃟🔥┊${usedPrefix}nsfwero
│🍂⃟🔥┊${usedPrefix}nsfwfemdom
│🍂⃟🔥┊${usedPrefix}nsfwfoot
│🍂⃟🔥┊${usedPrefix}nsfwglass
│🍂⃟🔥┊${usedPrefix}nsfworgy
│🍂⃟🔥┊${usedPrefix}yuri
│🍂⃟🔥┊${usedPrefix}yuri2
│🍂⃟🔥┊${usedPrefix}yaoi
│🍂⃟🔥┊${usedPrefix}yaoi2
│🍂⃟🔥┊${usedPrefix}panties
│🍂⃟🔥┊${usedPrefix}tetas
│🍂⃟🔥┊${usedPrefix}booty
│🍂⃟🔥┊${usedPrefix}ecchi
│🍂⃟🔥┊${usedPrefix}furro
│🍂⃟🔥┊${usedPrefix}hentai
│🍂⃟🔥┊${usedPrefix}trapito
│🍂⃟🔥┊${usedPrefix}imagenlesbians
│🍂⃟🔥┊${usedPrefix}pene
│🍂⃟🔥┊${usedPrefix}porno
│🍂⃟🔥┊${usedPrefix}randomxxx
│🍂⃟🔥┊${usedPrefix}pechos 
│🍂⃟🔥┊${usedPrefix}rule34 
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Desarrolladores*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟👑┊${usedPrefix}enable
│🍂⃟👑┊${usedPrefix}disable
│🍂⃟👑┊${usedPrefix}addchocolates 
│🍂⃟👑┊${usedPrefix}addprem 
│🍂⃟👑┊${usedPrefix}autoadmin
│🍂⃟👑┊${usedPrefix}copia
│🍂⃟👑┊${usedPrefix}banuser 
│🍂⃟👑┊${usedPrefix}bc
│🍂⃟👑┊${usedPrefix}bcgc
│🍂⃟👑┊${usedPrefix}bcgc2
│🍂⃟👑┊$
│🍂⃟👑┊>
│🍂⃟👑┊=>
│🍂⃟👑┊${usedPrefix}cheat
│🍂⃟👑┊${usedPrefix}cleartmp
│🍂⃟👑┊${usedPrefix}delprem 
│🍂⃟👑┊${usedPrefix}dsowner
│🍂⃟👑┊${usedPrefix}fetch
│🍂⃟👑┊${usedPrefix}get
│🍂⃟👑┊${usedPrefix}ip <alamat ip>
│🍂⃟👑┊${usedPrefix}join <link>
│🍂⃟👑┊${usedPrefix}grupocrear <nombre>
│🍂⃟👑┊${usedPrefix}nuevabiobot <teks>
│🍂⃟👑┊${usedPrefix}nuevafotobot *<imagen>*
│🍂⃟👑┊${usedPrefix}nuevonombrebot <teks>
│🍂⃟👑┊${usedPrefix}resetpersonajes
│🍂⃟👑┊${usedPrefix}restart
│🍂⃟👑┊${usedPrefix}unbanuser
│🍂⃟👑┊${usedPrefix}update
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Audios*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🐢┊${usedPrefix}bass
│🍂⃟🐢┊${usedPrefix}blown
│🍂⃟🐢┊${usedPrefix}deep
│🍂⃟🐢┊${usedPrefix}earrape
│🍂⃟🐢┊${usedPrefix}fast
│🍂⃟🐢┊${usedPrefix}fat
│🍂⃟🐢┊${usedPrefix}nightcore
│🍂⃟🐢┊${usedPrefix}reverse
│🍂⃟🐢┊${usedPrefix}robot 
│🍂⃟🐢┊${usedPrefix}slow
│🍂⃟🐢┊${usedPrefix}smooth
│🍂⃟🐢┊${usedPrefix}tupai
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Ai*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟🪐┊${usedPrefix}gemini
│🍂⃟🪐┊${usedPrefix}chatgpt <texto>
│🍂⃟🪐┊${usedPrefix}ia <texto>
│🍂⃟🪐┊${usedPrefix}remini
│🍂⃟🪐┊${usedPrefix}hd
│🍂⃟🪐┊${usedPrefix}enhance
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Categoria* :: *Convertidores*
┊•*⁀➷ °⭒⭒⭒ *DevDiego*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩
│🍂⃟💫┊${usedPrefix}togifaud
│🍂⃟💫┊${usedPrefix}toimg
│🍂⃟💫┊${usedPrefix}tourl
│🍂⃟💫┊${usedPrefix}tovideo
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

> ${global.dev}`.trim()

await conn.sendMessage(m.chat, { image: { url: img.getRandom() }, caption: menu, contextInfo: { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1, }, forwardingScore: 999, externalAdReply: { title: '𝙔𝙖𝙚𝙢𝙤𝙧𝙞𝘽𝙤𝙩-𝙈𝘿 🌻✨', body: dev, thumbnailUrl: perfil, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false,
}, }, gifPlayback: true, gifAttribution: 0 }, { quoted: null })
await m.react(emojis)    
    
} catch (e) {
await m.reply(`✘ Ocurrió un error al enviar el menú\n\n${e}`)
await m.react(error)
}}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú', 'allmenú', 'allmenu', 'menucompleto'] 
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
