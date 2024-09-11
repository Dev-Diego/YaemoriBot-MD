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

2- 💫 𝙲𝚞𝚛𝚒𝚘𝚜𝚒𝚝𝚢 × 𝚈𝚊𝚎𝚖𝚘𝚛𝚒𝙱𝚘𝚝 ✨️
*✰* ${grupo5}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

➠ Enlace anulado? entre aquí! 

♡ Canal :
*✰* ${channel}

♡ Canal Sunlight Team :
*✰* ${channel2}

> ${dev}`

await conn.sendFile(m.chat, imagen3, "yaemori.jpg", grupos, fkontak, null, rcanal)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'aigrupos', 'gruposai']
export default handler