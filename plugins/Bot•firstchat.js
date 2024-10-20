import moment from 'moment-timezone'

export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await conn.reply(m.chat, `🌟 *¡Hola!* ✨⚡ 

Gracias por escribirme. Soy *YaemoriBot*, tu asistente en WhatsApp. ✨️ Aquí para ayudarte y hacer tu experiencia más divertida y funcional. 

*\`🚩 Información del Bot:\`*

👑 • *Desarrollador:* DevDiego
📲 • *Funciones:* Respuestas rápidas, juegos, información y mucho más.
⭐️ • *Acceso Premium:* ¡Descubre funciones exclusivas! Habla con mi owner para más detalles.

*\`🌵 Comandos Básicos:\`*

📂 • *Menú Completo:* Escribe *.allmenu* para ver todas las opciones.
💫 • *Contactar al Owner:* Escribe *.owner* para más información.

Espero que disfrutes usando *YaemoriBot* y encuentres todo lo que necesitas. 🌟😊

🍭 *Github:* 
${md}`, m, fake) 
user.pc = new Date * 1
}