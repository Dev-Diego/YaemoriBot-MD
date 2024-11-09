import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, text, command }) => {
try {        
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, cookies, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let locale = 'es'
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
let category = "video"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const rlink = db_.links[category][random]
global.vid = rlink
const response = await fetch(vid)
const gif = await response.buffer()

let menu = `*˚₊·˚₊· ͟͟͞͞➳❥ ${taguser}*
*˚₊·˚₊· ͟͟͞͞➳❥* 𝙔𝙖𝙚𝙢𝙤𝙧𝙞𝘽𝙤𝙩-𝙈𝘿 🌻✨
 
*•/• Info User •/•*
 
👤 Cliente » \`\`\`${global.nombre}\`\`\`
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

🍄 .afk 
🍄 .grupos
🍄 .skyplus
🍄 .instalaryaemori
🍄 .menu
🍄 .menu2
🍄 .hornymenu
🍄 .runtime
🍄 .script
🍄 .blocklist

*•/• Busquedas •/•*

🎋 .githubsearch
🎋 .google <búsqueda>
🎋 .mercadolibre <búsqueda>
🎋 .npmjs
🎋 .tiktoksearch <txt>
🎋 .tweetposts
🎋 .ytsearch
🎋 .imagen <query>
🎋 .pinterest

*•/• Juegos •/•*

🍧 .abrazar <@usuario>
🍧 .acertijo
🍧 .sonrojarse 
🍧 .gay 
🍧 .lesbiana 
🍧 .pajero 
🍧 .pajera 
🍧 .puto 
🍧 .puta 
🍧 .manco 
🍧 .manca 
🍧 .rata 
🍧 .prostituta 
🍧 .prostituto 
🍧 .apostar 
🍧 .cf
🍧 .consejo
🍧 .dance
🍧 .doxear
🍧 .formarpareja
🍧 .violar 
🍧 .enamorada 
🍧 .math
🍧 .meme
🍧 .acariciar 
🍧 .personalidad
🍧 .piropo
🍧 .pokedex 
🍧 .pucheros 
🍧 .ppt
🍧 .pregunta
🍧 .dormir 
🍧 .reto
🍧 .ruleta 
🍧 .triste 
🍧 .ship
🍧 .love
🍧 .simi
🍧 .bot
🍧 .top
🍧 .zodiac
🍧 .slot

*•/• Gacha •/•*

🌹 .character
🌹 .darrw
🌹 .obtenidos
🌹 .c
🌹 .robarpersonaje
🌹 .rw
🌹 .toprw

*•/• JadiBots •/•*

🌻 .serbot
🌻 .serbot --code
🌻 .pausarai
🌻 .bots
🌻 .deletebot

*•/• Rpg •/•*

🍁 .bank
🍁 .cookies
🍁 .crimen
🍁 .daily
🍁 .claim
🍁 .depositar
🍁 .lb
🍁 .levelup
🍁 .minar
🍁 .retirar
🍁 .rob2
🍁 .rob
🍁 .addprem 
🍁 .slut
🍁 .trabajar
🍁 .transfer

*•/• Registro •/•*

✨️ .perfil
✨️ .unreg
✨️ .reg

*•/• Exp •/•*

🌺 .daily
🌺 .Buy
🌺 .Buyall

*•/• Stickers •/•*

🍃 .qc
🍃 .stiker
🍃 .wm

*•/• Animes •/•*

💧 .animelink
💧 .akira
💧 .akiyama
💧 .anna
💧 .asuna
💧 .ayuzawa
💧 .boruto
💧 .chiho
💧 .chitoge
💧 .deidara
💧 .erza
💧 .elaina
💧 .eba
💧 .emilia
💧 .hestia
💧 .hinata
💧 .inori
💧 .isuzu
💧 .itachi
💧 .itori
💧 .kaga
💧 .kagura
💧 .kaori
💧 .keneki
💧 .kotori
💧 .kurumi
💧 .madara
💧 .mikasa
💧 .miku
💧 .minato
💧 .naruto
💧 .nezuko
💧 .sagiri
💧 .sasuke
💧 .sakura
💧 .cosplay
💧 .infoanime
💧 .lolice
💧 .waifu

*•/• Grupos •/•*

🍬 .add
🍬 .banchat 
🍬 .grupo abrir / cerrar
🍬 .delete
🍬 .demote
🍬 .encuesta 
🍬 .hidetag
🍬 .infogrupo
🍬 .invite 
🍬 .kick
🍬 .link
🍬 .listadv
🍬 .promote
🍬 .revoke
🍬 .tagall 
🍬 .invocar 
🍬 .unbanchat

*•/• Enable - Disable •/•*

🌸 .enable
🌸 .disable

*•/• Descargas •/•*

🍟 .fb
🍟 .gitclone 
🍟 .imagen 
🍟 .ig
🍟 .mediafire
🍟 .apkmod
🍟 .play3
🍟 .play4
🍟 .spotify
🍟 .tiktok
🍟 .ytmp4 

*•/• Herramientas •/•*

🪐 .toanime
🪐 .tts
🪐 .imagen
🪐 .spamwa 
🪐 .fake
🪐 .remini
🪐 .hd
🪐 .enhance
🪐 .ssweb
🪐 .trad
🪐 .nuevafotochannel
🪐 .nosilenciarcanal
🪐 .silenciarcanal
🪐 .noseguircanal
🪐 .seguircanal
🪐 .avisoschannel
🪐 .resiviravisos
🪐 .inspect
🪐 .inspeccionar
🪐 .eliminarfotochannel
🪐 .reactioneschannel
🪐 .reaccioneschannel
🪐 .nuevonombrecanal
🪐 .nuevadescchannel

*•/• Información •/•*

🌵 .creador
🌵 .ds
🌵 .dsowner
🌵 .fixmsgespera
🌵 .status
🌵 .info
🌵 .ping
🌵 .sistema
🌵 .speed
🌵 .speedtest
🌵 .reportar

*•/• Nsfw •/•*

🔥 .nsfwloli
🔥 .nsfwfoot
🔥 .nsfwass
🔥 .nsfwbdsm
🔥 .nsfwcum
🔥 .nsfwero
🔥 .nsfwfemdom
🔥 .nsfwfoot
🔥 .nsfwglass
🔥 .nsfworgy
🔥 .yuri
🔥 .yuri2
🔥 .yaoi
🔥 .yaoi2
🔥 .panties
🔥 .tetas
🔥 .booty
🔥 .ecchi
🔥 .furro
🔥 .hentai
🔥 .trapito
🔥 .imagenlesbians
🔥 .pene
🔥 .porno
🔥 .randomxxx
🔥 .pechos
🔥 .r34 <tag>
🔥 .rule34 <tag>

*•/• Propietario •/•*

🍿.enable
🍿.disable
🍿.addcookies 
🍿.addprem 
🍿.autoadmin
🍿.copia
🍿.banuser 
🍿.bc
🍿.bcgc
🍿.bcgc2
🍿 $
🍿 >
🍿 =>
🍿.cheat
🍿.cleartmp
🍿.delprem 
🍿.dsowner
🍿.fetch
🍿.get
🍿.ip <alamat ip>
🍿.join <link>
🍿.grupocrear <nombre>
🍿.nuevabiobot <teks>
🍿.nuevafotobot *<imagen>*
🍿.nuevonombrebot <teks>
🍿.resetpersonajes
🍿.restart
🍿.unbanuser
🍿.update

*•/• Audios •/•*

🐢 .bass
🐢 .blown
🐢 .deep
🐢 .earrape
🐢 .fast
🐢 .fat
🐢 .nightcore
🐢 .reverse
🐢 .robot 
🐢 .slow
🐢 .smooth
🐢 .tupai

*•/• Ai •/•*

🍘 .gemini
🍘 .chatgpt <texto>
🍘 .ia <texto>
🍘 .remini
🍘 .hd
🍘 .enhance

*•/• Convertidores •/•*

🍥 .togifaud
🍥 .toimg
🍥 .tourl
🍥 .tovideo

> © ⍴᥆ᥕᥱrᥱძ ᑲᥡ ძᥱ᥎ძіᥱg᥆ ⚡︎`.trim()

await conn.sendMessage(m.chat, { video: { url: vid }, caption: menu, contextInfo: { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1, }, forwardingScore: 999, externalAdReply: { title: '𝙔𝙖𝙚𝙢𝙤𝙧𝙞𝘽𝙤𝙩-𝙈𝘿 🌻✨', body: dev, thumbnailUrl: fotoperfil, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false,
}, }, gifPlayback: true, gifAttribution: 0 }, { quoted: null })
await m.react(emojis)    
    
} catch (e) {
await m.react(error)
conn.reply(m.chat, `✘ Ocurrió un error al enviar el menú\n\n${e}`, m, fake)
}}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'allmenú', 'allmenu', 'menucompleto'] 
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}