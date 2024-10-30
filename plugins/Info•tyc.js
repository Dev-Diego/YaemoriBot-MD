const handler = async (m, {conn}) => {

conn.reply(m.chat, `MENSAJE DEL DESARROLLADOR 😊

⚠️ ADVERTENCIA DEL CREADOR (DIEGO) ⚠️

Diego no se hace responsable del mal uso del bot o subbot, cada persona maneja el bot a su manera. Diego no se hace cargo de lo que le puede pasar a su cuenta de WhatsApp.

El bot es simple pero con comandos divertidos, para ver los comandos utiliza: !menu.

Bot uso publico para todas las personas que le guste usarlo, gracias por preferir nuestro servicio. 🌟

💥 ¡Contactanos! 💥

👑 Creador:
• ${global.creador}
📧 Correo electronico: 
• ${global.correo}

${global.packname}`, m, rcanal)

}
handler.customPrefix = /términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i
handler.command = new RegExp
export default handler