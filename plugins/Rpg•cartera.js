let handler = async (m, {conn, usedPrefix}) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
user.bank -= count * 1
if (who == conn.user.jid) return error 
if (!(who in global.db.data.users)) return conn.reply(m.chat, '🍭 El usuario no se encuentra en mi base de Datos.', m, fake)
let user = global.db.data.users[m.sender]
let txt = `*🌵 Balance de ${user}*

	➠ *Galletas* : ${user.cookies}
	➠ *Banco* : ${user.bank}
	➠ *Experiencia* : ${global.db.data.users[who].exp}

> Para proteger tus *Galletas*, depósitalas en el banco usando *#depositar*`
await conn.reply(m.chat, txt, m, rcanal)
}

handler.help = ['cookies']
handler.tags = ['rpg']
handler.command = ['wallet', 'cartera', 'cookies', 'bal', 'coins']
handler.register = true 
export default handler