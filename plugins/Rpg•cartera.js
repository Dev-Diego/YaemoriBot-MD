let handler = async (m, {conn, usedPrefix}) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
if (who == conn.user.jid) return error 
if (!(who in global.db.data.users)) return conn.reply(m.chat, '🍭 El usuario no se encuentra en mi base de Datos.', m, fake)
const name = conn.getName(who);
let txt = `*🌴 Balance de ${name}*\n\n`
txt +=	` ➺ *Galletas* : ${global.db.data.users[who].cookies}\n` 
txt +=	` ➺ *Banco* : ${global.db.data.users[who].bank}\n` 
txt +=	` ➺ *Experiencia* : ${global.db.data.users[who].exp}\n\n`
txt += `> Para proteger tus *Galletas*, depósitalas en el banco usando *#depositar*`
await conn.reply(m.chat, txt, m, rcanal)
}

handler.help = ['cookies']
handler.tags = ['rpg']
handler.command = ['wallet', 'cartera', 'cookies', 'bal', 'coins']
handler.register = true 
export default handler