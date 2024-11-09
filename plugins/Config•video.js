import fg from 'api-dylux'
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 350
let handler = async (m, { conn, text, isPrems, isOwner, usedPrefix, command }) => {
if (!m.quoted) return conn.reply(m.chat, `🚩 Etiqueta el mensaje que contenga el resultado de YouTube Play.`, m, rcanal).then(_ => m.react(error))
if (!m.quoted.text.includes("乂  Y O U T U B E  -  P L A Y 乂")) return conn.reply(m.chat, `🚩 Etiqueta el mensaje que contenga el resultado de YouTube Play.`, m, rcanal).then(_ => m.react(error))
let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return conn.reply(m.chat, `🚩 Resultado no Encontrado.`, m, rcanal).then(_ => m.react(error))
if (urls.length < text) return conn.reply(m.chat, `🚩 Resultado no Encontrado.`, m, rcanal).then(_ => m.react(error))
let user = global.db.data.users[m.sender]

try {
await m.react(rwait)
conn.reply(m.chat, global.wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
let v = urls[0]
let { title, duration, size, thumbnail, dl_url } = await Starlights.ytmp4v2(v)

if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `🚩 El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react(error))

await conn.sendFile(m.chat, dl_url, null, m, false, { asDocument: user.useDocument })
await m.react(done)
} catch {
try {
await m.react(rwait)
let v = urls[0]
let { title, size, quality, thumbnail, dl_url } = await Starlights.ytmp4(v)

if (size.split('MB')[0] >= limit) return m.reply(`🚩 El archivo pesa mas de ${limit} MB, se canceló la Descarga.`).then(_ => m.react(error))

await conn.sendFile(m.chat, dl_url, null, m, false, { asDocument: user.useDocument })
await m.react(done)
} catch {
await m.react(error)
await conn.reply(m.chat, '🚩 Ocurrió un error.', m, fake)
}}}
handler.customPrefix = ['2', 'video']
handler.command = new RegExp

export default handler