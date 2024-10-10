let handler = async (m, { conn, usedPrefix, command, text }) => {

let txt = `🌟 *Sky Ultra Plus: Tu Solución de Hosting de Alto Rendimiento* 🌟

🚀 *¿Buscas un hosting rápido y confiable?* Sky Ultra Plus es tu opción ideal. Ofrecemos servidores de alto rendimiento a precios accesibles, perfectos para cualquier proyecto.

*Beneficios de Sky Ultra Plus:*
⚡• *Velocidad Ultrarápida:* Tu proyecto responderá en segundos.
🔒 • *Seguridad total:* Protección avanzada.
📞 • *Soporte 24/7:* Estamos aquí para ayudarte en cualquier momento.

🌐 *Página:*
https://dash.skyultraplus.com

¡Elige Sky Ultra Plus y lleva tu presencia online al siguiente nivel! 🌟🚀💻` 

await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363301598733462@newsletter', 
serverMessageId: '', 
newsletterName: '☁️ Sky Ultra Plus - Channel' }, 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `☁️ 𝗦𝗸𝘆 𝗨𝗹𝘁𝗿𝗮️ 𝗣𝗹𝘂𝘀 ☁️`,
body: `¡Sky Ultra Plus, tu mejor opción! ⭐️`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/wXciz.jpg', 
sourceUrl: redeshost}}},
{ quoted: fkontak})
} 

handler.help = ['skyplus']
handler.tags = ['main']
handler.command = ['skyplus', 'skyultra', 'skyultraplus', 'ultraplus', 'hosting', 'host']

export default handler