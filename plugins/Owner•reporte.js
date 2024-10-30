let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, '⚠ *_️Ingrese el error ue desea reportar._*', m)
    if (text.length < 10) return conn.reply(m.chat, '⚠️ *_Especifique bien el error, mínimo 10 caracteres._*', m)
    if (text.length > 1000) return conn.reply(m.chat, '⚠️ *_Máximo 1000 caracteres para enviar el error._*', m)
    const teks = `*❌️ \`R E P O R T E\` ❌️*

🍃 Número:
• Wa.me/${m.sender.split`@`[0]}

👤 Usuario: 
• ${m.pushName || 'Anónimo'}

🐢 Mensaje:
• ${text}`
    await conn.reply(global.owner[0][0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })

await conn.sendMessage(global.channelid, { text: m.quoted ? teks + m.quoted.text : teks, contextInfo: {
externalAdReply: {
title: "⚠️ COMANDO FALLIDO ⚠️",
body: '🧋 Un comando con fallas.',
thumbnailUrl: icono,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })

    m.reply('⚠️ *_El reporte se envío a mi creador, cualquier informe falso puede ocasionar baneo._*')
}
handler.help = ['reportar']
handler.tags = ['info']
handler.command = ['reporte', 'report', 'reportar', 'bug', 'error']

export default handler