import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D* 🍂

1- YaemoriBot 🍭
*✰* ${grupo}

2- YaemoriBot2 🍭
*✰* ${grupo2}

3- ⚡︎ Sunlight - Team ⚡︎
*✰* ${grupo3}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

*♡ Grupo de colaboración*

1- 𝙶𝚊𝚝𝚊𝙱𝚘𝚝 💞 𝚈𝚊𝚎𝚖𝚘𝚛𝚒𝙱𝚘𝚝
*✰* ${grupo4}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

➠ Enlace anulado? entre aquí! 

♡ Canal :
*✰* ${channel}

♡ Canal Sunlight Team :
*✰* ${channel2}

> ${dev}`

await conn.sendMessage(m.chat, {text: grupos, contextInfo: { forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterName: 'YaemoriBot 🌱', newsletterJid: "120363263466636910@newsletter", }, externalAdReply: { title: packname, body: dev, thumbnailUrl: 'https://qu.ax/OlTj.jpg', sourceUrl: redes, mediaType: 1, renderLargerThumbnail: true }}}, {quoted: fkontak})

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'aigrupos', 'gruposai']
export default handler