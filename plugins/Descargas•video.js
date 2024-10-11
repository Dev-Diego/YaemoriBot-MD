/*import fg from 'api-dylux'
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 350
let handler = async (m, { conn, text, isPrems, isOwner, usedPrefix, command }) => {
if (!m.quoted) return conn.reply(m.chat, '🚩 *Etiquete el mensaje que contenga el resultado del Play*', m, rcanal)
if (!m.quoted.text.includes("*乂  Y O U T U B E  -  P L A Y  乂*")) return conn.reply(m.chat, '🚩 *Etiquete el mensaje que contenga el resultado del Play*', m, rcanal)
if (!m.quoted.isBaileys) return conn.reply(m.chat, '🚩 Etiqueta el mensaje mío del resultado Play', m, rcanal)
let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return m.reply('×')
if (urls.length < text) return conn.reply(m.chat, '🚩 *No se encontraron resultados*', m, rcanal)
let q = urls[1] || '480p'
try {
await m.react(rwait)
const yt = await fg.ytv(urls[0], q)
let { title, dl_url, size } = yt 

if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `🚩 El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal) 

conn.reply(m.chat, `🚀 Descargando El Video...`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `🚩 *Aquí está tu video de Youtube*\n${dev}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: fkontak })
await m.react(done)
} catch {
try {
let yt = await fg.ytmp4(urls[0], q)
let { title, size, dl_url } = yt

if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `🚩 El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal) 

await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `🚩 *Aquí está tu video de Youtube*\n${packname}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: fkontak })
await m.react(done)
} catch {
await m.react(error)
await m.reply(`✘ *Ocurrío un error*`)
}}}
handler.help = ['video']
handler.tags = ['descargas']
handler.customPrefix = /^(1|Video|video)/
handler.command = new RegExp
handler.register = true
export default handler*/

import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Distancia - Kimberly Contreraxx`,  m, rcanal, )

conn.reply(m.chat, global.wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})

try { 
await m.react(rwait)
const yt_play = await search(args.join(' '))
const texto1 = `
╭ׅׄ̇─͓̗̗─ׅ̻ׄ╮۪̇߭⊹߭̇︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇߭︹ׅ۪ׄ̇߭̇⊹
┟─⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🅳🄴🅂🄲🄰🅁🄶🄰🅂໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪╮
╭┄─🍂⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🅼🄴🄶🅄🄼🄸🄽໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪╯
├ ⚘݄𖠵⃕⁖𖥔. _*🅃𝕚𝕥𝕦𝕝𝕠*_
├» ${yt_play[0].title}
├ ⚘݄𖠵⃕⁖𖥔. _*🄿𝕦𝕓𝕝𝕚𝕔𝕒𝕕𝕠*_
├» ${yt_play[0].ago}
├ ⚘݄𖠵⃕⁖𖥔. _*🄳𝕦𝕣𝕒𝕔𝕚𝕠𝕟*_
├» ${secondString(yt_play[0].duration.seconds)}
├ ⚘݄𖠵⃕⁖𖥔. _*🅅𝕚𝕤𝕥𝕒𝕤*_
├» ${MilesNumber(yt_play[0].views)}
├ ⚘݄𖠵⃕⁖𖥔. _*🄰𝕦𝕥𝕠𝕣(𝕒)*_
├» ${yt_play[0].author.name}
├ ⚘݄𖠵⃕⁖𖥔. _*🄴𝕟𝕝𝕒𝕔𝕖*_
├» ${yt_play[0].url}
╰ׁ̻۫─۪۬─۟─۪─۫─۪۬─۟─۪─۟─۪۬─۟─۪─۟─۪۬─۟─۪─۟┄۪۬┄۟┄۪┈۟┈۪`.trim()

let listSections = []
listSections.push({
title: `✎ SELECCIÓNA LO QUE NECESITES`, highlight_label: `Popular YaemoriBot`,
rows: [
{
header: "𓆩࿔ྀુ⃟🌹⃟𝘼𝙐𝘿𝙄𝙊 ╎ 🎵",
title: "",
description: `🎵 Audio.`,
id: `#play mp3 ${yt_play[0].url}`,
},
{
header: "𓆩࿔ྀુ⃟🌹⃟𝙑𝙄𝘿𝙀𝙊 ╎ 📽",
title: "",
description: `📽 Video.`,
id: `#play mp4 ${yt_play[0].url}`,
},
],
})
let menu = ''
await conn.sendListB(m.chat, menu, txt, ` 𓏲᭨ ̤̤֟✧⏤͟͞ू⃪٭ۣۜ ፝͜⁞Oᴘᴄɪᴏɴᴇs ᭄፝🍟𑜟꙲𒁑⁩`, yt_play[0].thumbnail, listSections, m)
} catch (e) {
await conn.reply(m.chat, `*[ ! ] ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ғᴀᴠᴏʀ ɪɴᴛᴇɴᴛᴀ ᴍᴀs ᴛᴀʀᴅᴇ..*`, fkontak, m, rcanal)
console.log(`❗❗ᴇʀʀᴏʀ ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2']
//handler.limit = 3
handler.register = true 
handler.group = true
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}