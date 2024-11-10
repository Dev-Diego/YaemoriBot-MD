import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D* 🍂

1- YaemoriBot 🍭
*✰* ${grupo}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

*♡ Grupo de colaboración*

1- 𝙶𝚊𝚝𝚊𝙱𝚘𝚝 💞 𝚈𝚊𝚎𝚖𝚘𝚛𝚒𝙱𝚘𝚝
*✰* ${grupo2}

2- 𝙼𝚎𝚐𝚞𝚖𝚒𝚗𝙱𝚘𝚝 💫 𝚈𝚊𝚎𝚖𝚘𝚛𝚒𝙱𝚘𝚝
*✰* ${grupo3}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

➠ Enlace anulado? entre aquí! 

♡ Canal :
*✰* ${channel}

♡ YaemoriBot - Test :
*✰* ${channel2}

♡ Infinity-Wa :
*✰* ${channel3}

> ${dev}`

await conn.sendFile(m.chat, imagen3, "yaemori.jpg", grupos, fkontak, null, rcanal)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'aigrupos', 'gruposai']
export default handler