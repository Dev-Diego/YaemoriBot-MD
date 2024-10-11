/*import fetch from "node-fetch"
import yts from "yt-search"

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Distancia - Kimberly Contreraxx`,  m, rcanal, )

conn.reply(m.chat, global.wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})

try {
await m.react(rwait)
let yt_play = await search(args.join(" "))
let img = await (await fetch(`${yt_play[0].image}`)).buffer()

let txt = `*乂  Y O U T U B E  -  P L A Y  乂*\n\n`
    txt += `🚩 *Titulo:*\n${yt_play[0].title}\n\n`
    txt += `📅 *Publicado:*\n${yt_play[0].ago}\n\n`
    txt += `🕜 *Duración:*\n${secondString(yt_play[0].duration.seconds)}\n\n`
    txt += `📎 *Url:*\n${'https://youtu.be/' + yt_play[0].videoId}\n\n`
    txt += `✨️ *Nota:* Para descargar responde a este mensaje con *1* o *2*.\n\n`
    txt += `*1:* Video\n*2:* Audio`

await conn.sendMessage(m.chat, {
text: txt,
contextInfo: { 
forwardingScore: 9999, 
isForwarded: true, 
externalAdReply: {
title: `${yt_play[0].title}`,
body: dev,
thumbnailUrl: img,
thumbnail: img,
sourceUrl: `${yt_play[0].url}`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
await m.react(done)
} catch {
await m.react(error)
await m.reply(`✘ Ocurrío un error`)}}

handler.help = ['play', 'play2']
handler.tags = ['descargas']
handler.command = ['play', 'play2']
handler.register = true
export default handler

async function search(query, options = {}) {
let search = await yts.search({ query, hl: "es", gl: "ES", ...options });
return search.videos;
}

function MilesNumber(number) {
let exp = /(\d)(?=(\d{3})+(?!\d))/g;
let rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? ":" : ":") : "";
var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "";
var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}*/

import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
let lister = ["mp3", "yta", "audio", "ytv", "video", "vídeo", "mp4", "mp3doc", "ytadoc", "audiodoc", "mp4doc", "ytvdoc", "videodoc", "vídeodoc"]

let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
if (!lister.includes(feature)) return conn.reply(m.chat, `🚩 Ingresa el formato en que deseas descargar más el titulo de un video o musica de YouTube.\n\nEjemplo : ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\nFormatos disponibles :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`, m, rcanal)
if (lister.includes(feature)) {
if (feature == "mp3" || feature == "yta" || feature == "audio") {
if (!inputs) return conn.reply(m.chat, `🚩 Ingresa el título de un video o canción de YouTube.\n\n*Ejemplo:*\n*${usedPrefix + command}* Alan Walker - Sing Me To Sleep`, m, rcanal)
await m.react('🕓')
let res = await yts(text)
let vid = res.videos[0]
let q = '128kbps'
let txt = `*乂  Y O U T U B E  -  P L A Y*\n\n`
        txt += `        ✩   *Título* : ${vid.title}\n`
        txt += `        ✩   *Duración* : ${vid.timestamp}\n`
        txt += `        ✩   *Visitas* : ${vid.views}\n`
        txt += `        ✩   *Autor* : ${vid.author.name}\n`
        txt += `        ✩   *Publicado* : ${eYear(vid.ago)}\n`
        txt += `        ✩   *Url* : ${'https://youtu.be/' + vid.videoId}\n\n`
        txt += `*- ↻ El audio se esta enviando espera un momento, soy lenta. . .*`
await conn.sendFile(m.chat, vid.thumbnail, 'thumbnail.jpg', txt, m, null, rcanal)
try {
let yt = await fg.yta(vid.url, q)
let { title, dl_url, size } = yt
let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))

await conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
await m.react('✅')
} catch {
try {
let yt = await fg.ytmp3(vid.url, q)
let { title, dl_url, size } = yt
let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))

await conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
await m.react('✅')
} catch {
await m.react('✖️')
}}}

if (feature == "play2") {
if (!inputs) return conn.reply(m.chat, `🚩 Ingresa el título de un video o canción de YouTube.\n\n*Ejemplo:*\n*${usedPrefix + command}* Alan Walker - Sing Me To Sleep`, m, rcanal)
await m.react('🕓')
let res = await yts(text)
let vid = res.videos[0]
let q = '360p'
let txt = `*乂  Y O U T U B E  -  P L A Y*\n\n`
        txt += `        ✩   *Título* : ${vid.title}\n`
        txt += `        ✩   *Duración* : ${vid.timestamp}\n`
        txt += `        ✩   *Visitas* : ${vid.views}\n`
        txt += `        ✩   *Autor* : ${vid.author.name}\n`
        txt += `        ✩   *Publicado* : ${eYear(vid.ago)}\n`
        txt += `        ✩   *Url* : ${'https://youtu.be/' + vid.videoId}\n\n`
        txt += `*- ↻ El video se esta enviando espera un momento, soy lenta. . .*`
await conn.sendFile(m.chat, vid.thumbnail, 'thumbnail.jpg', txt, m, rcanal)
try {
let yt = await fg.ytv(vid.url, q)
let { title, dl_url, size } = yt
let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))

await conn.sendFile(m.chat, dl_url, 'yt.jpg', `Tu video de Youtube 🚀\n${packname}`, m, null, rcanal)
await m.react('✅')
} catch {
try {
let yt = await fg.ytmp4(vid.url, q)
let { title, dl_url, size } = yt
let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))

await conn.sendFile(m.chat, dl_url, 'yt.jpg', `Tu video de Youtube 🚀\n${packname}`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}}

if (feature == "mp3doc" || feature == "ytadoc" || feature == "audiodoc") {
if (!inputs) return conn.reply(m.chat, `🚩 Ingresa el título de un video o canción de YouTube.\n\n*Ejemplo:*\n*${usedPrefix + command}* Alan Walker - Sing Me To Sleep`, m, rcanal)
await m.react('🕓')
let res = await yts(text)
let vid = res.videos[0]
let q = '128kbps'
let txt = `*乂  Y O U T U B E  -  P L A Y*\n\n`
        txt += `        ✩   *Título* : ${vid.title}\n`
        txt += `        ✩   *Duración* : ${vid.timestamp}\n`
        txt += `        ✩   *Visitas* : ${vid.views}\n`
        txt += `        ✩   *Autor* : ${vid.author.name}\n`
        txt += `        ✩   *Publicado* : ${eYear(vid.ago)}\n`
        txt += `        ✩   *Url* : ${'https://youtu.be/' + vid.videoId}\n\n`
        txt += `*- ↻ El audio se esta enviando espera un momento, soy lenta. . .*`
await conn.sendFile(m.chat, vid.thumbnail, 'thumbnail.jpg', txt, m, null, rcanal)
try {
let yt = await fg.yta(vid.url, q)
let { title, dl_url, size } = yt
let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))

await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'audio/mpeg', fileName: `${vid.title}.mp3`}, { quoted: m })
await m.react('✅')
} catch {
try {
let yt = await fg.ytmp3(vid.url, q)
let { title, dl_url, size } = yt
let limit = 100

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))

await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'audio/mpeg', fileName: `${vid.title}.mp3`}, { quoted: m })
} catch {
await m.react('✖️')
    }}}

if (feature == "mp4doc" || feature == "ytvdoc" || feature == "videodoc" || feature == "videodoc") {
if (!inputs) return conn.reply(m.chat, `🚩 Ingresa el título de un video o canción de YouTube.\n\n*Ejemplo:*\n*${usedPrefix + command}* Alan Walker - Sing Me To Sleep`, m, rcanal)
await m.react('🕓')
let res = await yts(text)
let vid = res.videos[0]
let q = '360p'
let txt = `*乂  Y O U T U B E  -  P L A Y*\n\n`
        txt += `        ✩   *Título* : ${vid.title}\n`
        txt += `        ✩   *Duración* : ${vid.timestamp}\n`
        txt += `        ✩   *Visitas* : ${vid.views}\n`
        txt += `        ✩   *Autor* : ${vid.author.name}\n`
        txt += `        ✩   *Publicado* : ${eYear(vid.ago)}\n`
        txt += `        ✩   *Url* : ${'https://youtu.be/' + vid.videoId}\n\n`
        txt += `*- ↻ El video se esta enviando espera un momento, soy lenta. . .*`
await conn.sendFile(m.chat, vid.thumbnail, 'thumbnail.jpg', txt, m, null, rcanal)
try {
let yt = await fg.ytv(vid.url, q)
let { title, dl_url, size } = yt
let limit = 300

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))

await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`}, {quoted: m })
await m.react('✅')
} catch {
try {
let yt = await fg.ytmp4(vid.url, q)
let { title, dl_url, size } = yt
let limit = 300

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))

await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`}, {quoted: m })
await m.react('✅')
} catch {
await m.react('✖️')
}}}}}
handler.help = ['play2'].map(v => v + " *<formato> <búsqueda>*")
handler.tags = ['downloader']
handler.command = ['play', 'play2']
handler.register = true 
//handler.limit = 1
export default handler

function eYear(txt) {
    if (!txt) {
        return '×'
    }
    if (txt.includes('month ago')) {
        var T = txt.replace("month ago", "").trim()
        var L = 'hace '  + T + ' mes'
        return L
    }
    if (txt.includes('months ago')) {
        var T = txt.replace("months ago", "").trim()
        var L = 'hace ' + T + ' meses'
        return L
    }
    if (txt.includes('year ago')) {
        var T = txt.replace("year ago", "").trim()
        var L = 'hace ' + T + ' año'
        return L
    }
    if (txt.includes('years ago')) {
        var T = txt.replace("years ago", "").trim()
        var L = 'hace ' + T + ' años'
        return L
    }
    if (txt.includes('hour ago')) {
        var T = txt.replace("hour ago", "").trim()
        var L = 'hace ' + T + ' hora'
        return L
    }
    if (txt.includes('hours ago')) {
        var T = txt.replace("hours ago", "").trim()
        var L = 'hace ' + T + ' horas'
        return L
    }
    if (txt.includes('minute ago')) {
        var T = txt.replace("minute ago", "").trim()
        var L = 'hace ' + T + ' minuto'
        return L
    }
    if (txt.includes('minutes ago')) {
        var T = txt.replace("minutes ago", "").trim()
        var L = 'hace ' + T + ' minutos'
        return L
    }
    if (txt.includes('day ago')) {
        var T = txt.replace("day ago", "").trim()
        var L = 'hace ' + T + ' dia'
        return L
    }
    if (txt.includes('days ago')) {
        var T = txt.replace("days ago", "").trim()
        var L = 'hace ' + T + ' dias'
        return L
    }
    return txt
}