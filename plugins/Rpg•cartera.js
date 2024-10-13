let handler = async (m, {conn, usedPrefix}) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
if (who == conn.user.jid) return error 
if (!(who in global.db.data.users)) return conn.reply(m.chat, '🍭 El usuario no se encuentra en mi base de Datos.', m, fake)
const name = conn.getName(who);
let txt = `*🌴 Balance de ${name}*

	➺ *Galletas* : ${global.db.data.users[who].cookies} 
	➺ *Banco* : ${global.db.data.users[who].bank} 
	➺ *Experiencia* : ${global.db.data.users[who].exp}

> Debes proteger tus *Galletas* para que no te la roben, depósitalas en el banco de la bot, para aguardar las *Galletas* use *#depositar*`
await conn.reply(m.chat, txt, m, rcanal)
}

handler.help = ['cookies']
handler.tags = ['rpg']
handler.command = ['wallet', 'cartera', 'cookies', 'bal', 'coins']
handler.register = true 
export default handler