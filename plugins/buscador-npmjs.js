/*
By GabrielVz (@glytglobal)
*/

import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🚩 Escribe el nonbre del scraper.\nEjemplo: ${usedPrefix + command} yt-search`, m, rcanal)

try {

await m.react(rwait)
conn.reply(m.chat, '🚩 Buscando el scraper....', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons, 
sourceUrl: channel }}})

let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()

if (!objects.length) return conn.reply(m.chat, `『✦』 No se encpntró resultado de: ${text}`, m, fake)

let txt = objects.map(({ package: pkg }) => {
return 
`✧ Nombre: ${pkg.name}
 ✧ Versión: V${pkg.version}
 ✧ Enlace: ${pkg.links.npm}
 ✧ Descripcion: ${pkg.description}\n\n\`\`\`----------\`\`\``
}).join`\n`

await conn.reply(m.chat, txt, m, rcanal)
await m.react(done)
} catch {
await conn.reply(m.chat, '🌱 Ocurrió un error', m, fake)
await m.react(error)
}}

handler.help = ['npmjs']
handler.tags = ['buscador']
handler.command = ['npmjs']

export default handler
