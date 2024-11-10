import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {        
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, cookies, level, role } = global.db.data.users[m.sender]
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
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
const vid = ['https://telegra.ph/file/405daebd4bc0d69e5d165.mp4',
'https://telegra.ph/file/1d0ad9f79f65f39895b08.mp4',
'https://telegra.ph/file/c25afc1685b13210ce602.mp4']
let menu = `*˚₊·˚₊· ͟͟͞͞➳❥ ${taguser}*
*˚₊·˚₊· ͟͟͞͞➳❥* 𝙔𝙖𝙚𝙢𝙤𝙧𝙞𝘽𝙤𝙩-𝙈𝘿 🌻✨
 
*•/• Info User •/•*
 
👤 Cliente » \`\`\`${username}\`\`\`
🌍 Pais » \`\`\`${global.userNationality}\`\`\`
🍪 Galletas » \`\`\`${cookies}\`\`\`
💰 Experiencia » \`\`\`${exp}\`\`\`
⭐️ Rango » \`\`\`${role}\`\`\`
🧋 Nivel » \`\`\`${level}\`\`\`

*•/• Info Bot •/•*

👑 Creador » \`\`\`@DevDiego\`\`\`
🍟 Bot » \`\`\`${(conn.user.jid == global.conn.user.jid ? 'Oficial' : 'SubBot')}\`\`\`
☁️ Librería » \`\`\`Baileys\`\`\`
📆 Fecha » \`\`\`${moment.tz('America/Bogota').format('DD/MM/YY')}\`\`\`
🕑 Tiempo Activo » \`\`\`${uptime}\`\`\`
👥️️ Usuarios » \`\`\`${totalreg}\`\`\`

*•/• Información Bot •/•*

🍄 ${usedPrefix}afk 
🍄 ${usedPrefix}grupos
🍄 ${usedPrefix}skyplus
🍄 ${usedPrefix}instalaryaemori
🍄 ${usedPrefix}menu
🍄 ${usedPrefix}menu2
🍄 ${usedPrefix}hornymenu
🍄 ${usedPrefix}runtime
🍄 ${usedPrefix}script
🍄 ${usedPrefix}blocklist

*•/• Busquedas •/•*

🎋 ${usedPrefix}githubsearch
🎋 ${usedPrefix}google 
🎋 ${usedPrefix}mercadolibre
🎋 ${usedPrefix}npmjs
🎋 ${usedPrefix}tiktoksearch <txt>
🎋 ${usedPrefix}tweetposts
🎋 ${usedPrefix}ytsearch
🎋 ${usedPrefix}imagen <query>
🎋 ${usedPrefix}pinterest

*•/• Juegos •/•*

🍧 ${usedPrefix}abrazar <@usuario>
🍧 ${usedPrefix}acertijo
🍧 ${usedPrefix}sonrojarse 
🍧 ${usedPrefix}gay 
🍧 ${usedPrefix}lesbiana 
🍧 ${usedPrefix}pajero 
🍧 ${usedPrefix}pajera 
🍧 ${usedPrefix}puto 
🍧 ${usedPrefix}puta 
🍧 ${usedPrefix}manco 
🍧 ${usedPrefix}manca 
🍧 ${usedPrefix}rata 
🍧 ${usedPrefix}prostituta 
🍧 ${usedPrefix}prostituto 
🍧 ${usedPrefix}apostar 
🍧 ${usedPrefix}cf
🍧 ${usedPrefix}consejo
🍧 ${usedPrefix}dance
🍧 ${usedPrefix}doxear
🍧 ${usedPrefix}formarpareja
🍧 ${usedPrefix}violar 
🍧 ${usedPrefix}enamorada 
🍧 ${usedPrefix}math
🍧 ${usedPrefix}meme
🍧 ${usedPrefix}acariciar 
🍧 ${usedPrefix}personalidad
🍧 ${usedPrefix}piropo
🍧 ${usedPrefix}pokedex 
🍧 ${usedPrefix}pucheros 
🍧 ${usedPrefix}ppt
🍧 ${usedPrefix}pregunta
🍧 ${usedPrefix}dormir 
🍧 ${usedPrefix}reto
🍧 ${usedPrefix}ruleta 
🍧 ${usedPrefix}triste 
🍧 ${usedPrefix}ship
🍧 ${usedPrefix}love
🍧 ${usedPrefix}simi
🍧 ${usedPrefix}bot
🍧 ${usedPrefix}top
🍧 ${usedPrefix}zodiac
🍧 ${usedPrefix}slot

*•/• Gacha •/•*

🌹 ${usedPrefix}character
🌹 ${usedPrefix}darrw
🌹 ${usedPrefix}obtenidos
🌹 ${usedPrefix}c
🌹 ${usedPrefix}robarpersonaje
🌹 ${usedPrefix}rw
🌹 ${usedPrefix}toprw

*•/• JadiBots •/•*

🌻 ${usedPrefix}serbot
🌻 ${usedPrefix}serbot --code
🌻 ${usedPrefix}pausarai
🌻 ${usedPrefix}bots
🌻 ${usedPrefix}deletebot

*•/• Rpg •/•*

🍁 ${usedPrefix}bank
🍁 ${usedPrefix}cookies
🍁 ${usedPrefix}crimen
🍁 ${usedPrefix}daily
🍁 ${usedPrefix}claim
🍁 ${usedPrefix}depositar
🍁 ${usedPrefix}lb
🍁 ${usedPrefix}levelup
🍁 ${usedPrefix}minar
🍁 ${usedPrefix}retirar
🍁 ${usedPrefix}rob2
🍁 ${usedPrefix}rob
🍁 ${usedPrefix}addprem 
🍁 ${usedPrefix}slut
🍁 ${usedPrefix}trabajar
🍁 ${usedPrefix}transfer

*•/• Registro •/•*

✨️ ${usedPrefix}perfil
✨️ ${usedPrefix}unreg
✨️ ${usedPrefix}reg

*•/• Exp •/•*

🌺 ${usedPrefix}daily
🌺 ${usedPrefix}Buy
🌺 ${usedPrefix}Buyall

*•/• Stickers •/•*

🍃 ${usedPrefix}qc
🍃 ${usedPrefix}stiker
🍃 ${usedPrefix}wm

*•/• Animes •/•*

💧 ${usedPrefix}animelink
💧 ${usedPrefix}akira
💧 ${usedPrefix}akiyama
💧 ${usedPrefix}anna
💧 ${usedPrefix}asuna
💧 ${usedPrefix}ayuzawa
💧 ${usedPrefix}boruto
💧 ${usedPrefix}chiho
💧 ${usedPrefix}chitoge
💧 ${usedPrefix}deidara
💧 ${usedPrefix}erza
💧 ${usedPrefix}elaina
💧 ${usedPrefix}eba
💧 ${usedPrefix}emilia
💧 ${usedPrefix}hestia
💧 ${usedPrefix}hinata
💧 ${usedPrefix}inori
💧 ${usedPrefix}isuzu
💧 ${usedPrefix}itachi
💧 ${usedPrefix}itori
💧 ${usedPrefix}kaga
💧 ${usedPrefix}kagura
💧 ${usedPrefix}kaori
💧 ${usedPrefix}keneki
💧 ${usedPrefix}kotori
💧 ${usedPrefix}kurumi
💧 ${usedPrefix}madara
💧 ${usedPrefix}mikasa
💧 ${usedPrefix}miku
💧 ${usedPrefix}minato
💧 ${usedPrefix}naruto
💧 ${usedPrefix}nezuko
💧 ${usedPrefix}sagiri
💧 ${usedPrefix}sasuke
💧 ${usedPrefix}sakura
💧 ${usedPrefix}cosplay
💧 ${usedPrefix}infoanime
💧 ${usedPrefix}lolice
💧 ${usedPrefix}waifu

*•/• Grupos •/•*

🍬 ${usedPrefix}add
🍬 ${usedPrefix}banchat 
🍬 ${usedPrefix}grupo abrir / cerrar
🍬 ${usedPrefix}delete
🍬 ${usedPrefix}demote
🍬 ${usedPrefix}encuesta 
🍬 ${usedPrefix}hidetag
🍬 ${usedPrefix}infogrupo
🍬 ${usedPrefix}invite 
🍬 ${usedPrefix}kick
🍬 ${usedPrefix}link
🍬 ${usedPrefix}listadv
🍬 ${usedPrefix}promote
🍬 ${usedPrefix}revoke
🍬 ${usedPrefix}tagall 
🍬 ${usedPrefix}invocar 
🍬 ${usedPrefix}unbanchat

*•/• Enable - Disable •/•*

🌸 ${usedPrefix}enable
🌸 ${usedPrefix}disable

*•/• Descargas •/•*

🍟 ${usedPrefix}fb
🍟 ${usedPrefix}gitclone 
🍟 ${usedPrefix}imagen 
🍟 ${usedPrefix}ig
🍟 ${usedPrefix}mediafire
🍟 ${usedPrefix}apkmod
🍟 ${usedPrefix}play3
🍟 ${usedPrefix}play4
🍟 ${usedPrefix}spotify
🍟 ${usedPrefix}tiktok
🍟 ${usedPrefix}ytmp4 

*•/• Herramientas •/•*

🪐 ${usedPrefix}toanime
🪐 ${usedPrefix}tts
🪐 ${usedPrefix}imagen
🪐 ${usedPrefix}spamwa 
🪐 ${usedPrefix}fake
🪐 ${usedPrefix}remini
🪐 ${usedPrefix}hd
🪐 ${usedPrefix}enhance
🪐 ${usedPrefix}ssweb
🪐 ${usedPrefix}trad
🪐 ${usedPrefix}nuevafotochannel
🪐 ${usedPrefix}nosilenciarcanal
🪐 ${usedPrefix}silenciarcanal
🪐 ${usedPrefix}noseguircanal
🪐 ${usedPrefix}seguircanal
🪐 ${usedPrefix}avisoschannel
🪐 ${usedPrefix}resiviravisos
🪐 ${usedPrefix}inspect
🪐 ${usedPrefix}eliminarfotochannel
🪐 ${usedPrefix}reactioneschannel
🪐 ${usedPrefix}reaccioneschannel
🪐 ${usedPrefix}nuevonombrecanal
🪐 ${usedPrefix}nuevadescchannel

*•/• Información •/•*

🌵 ${usedPrefix}creador
🌵 ${usedPrefix}ds
🌵 ${usedPrefix}dsowner
🌵 ${usedPrefix}fixmsgespera
🌵 ${usedPrefix}status
🌵 ${usedPrefix}info
🌵 ${usedPrefix}ping
🌵 ${usedPrefix}sistema
🌵 ${usedPrefix}speed
🌵 ${usedPrefix}speedtest
🌵 ${usedPrefix}reportar

*•/• Nsfw •/•*

🔥 ${usedPrefix}nsfwloli
🔥 ${usedPrefix}nsfwfoot
🔥 ${usedPrefix}nsfwass
🔥 ${usedPrefix}nsfwbdsm
🔥 ${usedPrefix}nsfwcum
🔥 ${usedPrefix}nsfwero
🔥 ${usedPrefix}nsfwfemdom
🔥 ${usedPrefix}nsfwfoot
🔥 ${usedPrefix}nsfwglass
🔥 ${usedPrefix}nsfworgy
🔥 ${usedPrefix}yuri
🔥 ${usedPrefix}yuri2
🔥 ${usedPrefix}yaoi
🔥 ${usedPrefix}yaoi2
🔥 ${usedPrefix}panties
🔥 ${usedPrefix}tetas
🔥 ${usedPrefix}booty
🔥 ${usedPrefix}ecchi
🔥 ${usedPrefix}furro
🔥 ${usedPrefix}hentai
🔥 ${usedPrefix}trapito
🔥 ${usedPrefix}imagenlesbians
🔥 ${usedPrefix}pene
🔥 ${usedPrefix}porno
🔥 ${usedPrefix}randomxxx
🔥 ${usedPrefix}pechos 
🔥 ${usedPrefix}rule34 

*•/• Propietario •/•*

🍿 ${usedPrefix}enable
🍿 ${usedPrefix}disable
🍿 ${usedPrefix}addcookies 
🍿 ${usedPrefix}addprem 
🍿 ${usedPrefix}autoadmin
🍿 ${usedPrefix}copia
🍿 ${usedPrefix}banuser 
🍿 ${usedPrefix}bc
🍿 ${usedPrefix}bcgc
🍿 ${usedPrefix}bcgc2
🍿 $
🍿 >
🍿 =>
🍿 ${usedPrefix}cheat
🍿 ${usedPrefix}cleartmp
🍿 ${usedPrefix}delprem 
🍿 ${usedPrefix}dsowner
🍿 ${usedPrefix}fetch
🍿 ${usedPrefix}get
🍿 ${usedPrefix}ip <alamat ip>
🍿 ${usedPrefix}join <link>
🍿 ${usedPrefix}grupocrear <nombre>
🍿 ${usedPrefix}nuevabiobot <teks>
🍿 ${usedPrefix}nuevafotobot *<imagen>*
🍿 ${usedPrefix}nuevonombrebot <teks>
🍿 ${usedPrefix}resetpersonajes
🍿 ${usedPrefix}restart
🍿 ${usedPrefix}unbanuser
🍿 ${usedPrefix}update

*•/• Audios •/•*

🐢 ${usedPrefix}bass
🐢 ${usedPrefix}blown
🐢 ${usedPrefix}deep
🐢 ${usedPrefix}earrape
🐢 ${usedPrefix}fast
🐢 ${usedPrefix}fat
🐢 ${usedPrefix}nightcore
🐢 ${usedPrefix}reverse
🐢 ${usedPrefix}robot 
🐢 ${usedPrefix}slow
🐢 ${usedPrefix}smooth
🐢 ${usedPrefix}tupai

*•/• Ai •/•*

🍘 ${usedPrefix}gemini
🍘 ${usedPrefix}chatgpt <texto>
🍘 ${usedPrefix}ia <texto>
🍘 ${usedPrefix}remini
🍘 ${usedPrefix}hd
🍘 ${usedPrefix}enhance

*•/• Convertidores •/•*

🍥 ${usedPrefix}togifaud
🍥 ${usedPrefix}toimg
🍥 ${usedPrefix}tourl
🍥 ${usedPrefix}tovideo

> ${global.dev}`.trim()

await conn.sendMessage(m.chat, { video: { url: vid.getRandom() }, caption: menu, contextInfo: { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1, }, forwardingScore: 999, externalAdReply: { title: '𝙔𝙖𝙚𝙢𝙤𝙧𝙞𝘽𝙤𝙩-𝙈𝘿 🌻✨', body: dev, thumbnailUrl: fotoperfil, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false,
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