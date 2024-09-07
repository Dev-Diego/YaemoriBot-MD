import fetch from "node-fetch"
import yts from "yt-search"

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Distancia - Kimberly Contreraxx`,  m, rcanal, )

conn.reply(m.chat, global.wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})

try {
await m.react(rwait)
let yt_play = await search(args.join(" "))
let img = await (await fetch(`${yt_play[0].image}`)).buffer()

let txt = `*乂  Y O U T U B E  -  P L A Y  乂*\n\n`
    txt += `╭─⬣「 *YouTube Play* 」⬣\n`
    txt += `│ 🚩 *Titulo:* ${yt_play[0].title}\n`
    txt += `│ 📅 *Publicado:* ${yt_play[0].ago}\n`
    txt += `│ 🕜 *Duración:* ${secondString(yt_play[0].duration.seconds)}\n`
    txt += `│ 📎 *Url:* ${'https://youtu.be/' + yt_play[0].videoId}\n\n`
    txt += `│ ✨️ *Nota:* Para descargar responde a este mensaje con *1* o *2*.\n\n`
    txt += `│ *1:* Video\n*2:* Audio\n`
    txt += `╰─⬣`

/* let txt = `・₊✧★。..・✫・🎸🎧°⋆♡₊˚ 🔮
> 🌩 τιτυℓο:
> • ${yt_play[0].title}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🌦 ρυϐℓιϲα∂ο єи: 
> • ${yt_play[0].ago}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🍭 єиℓαϲє:
> • ${yt_play[0].url}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🍒 αմԵօɾ:
> • ${yt_play[0].author.name}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪──ׅ──ׅ──ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🧃 cαɳαℓ:
> • ${yt_play[0].author.url}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🍇 ժմɾαcíօ́ղ:
> • ${secondString(yt_play[0].duration.seconds)}
・₊✧。..・★🎸🎧°⋆♡₊˚ 🔮

> Para descargar responde a este mensaje con *1* o *2*.` */
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

handler.help = ['play *<búsqueda>*', 'play2 *<busqueda>*']
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
}