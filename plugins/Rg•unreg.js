let handler = async (m, { conn, command,  usedPrefix, args, text }) => {

if (command == 'unreg' || command == 'unregister') {
if (!args[0]) return conn.reply(m.chat, `🚩 Te hace falta el numero de registro. Para ver el numero de registro utiliza:\n${usedPrefix}nserie`, m, rcanal)

let user = global.db.data.users[m.sender]

let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) return m.reply('⚠️ *Número de registro incorrecto.*')

user.registered = false
global.db.data.users[m.sender].money -= 600
global.db.data.users[m.sender].cookies -= 15
global.db.data.users[m.sender].exp -= 245
global.db.data.users[m.sender].joincount -= 5

return conn.reply(m.chat, `🚩 Tu registro ha sido anulado correctamente.`, m, rcanal)}

if (command == 'nserie' || command == 'nregistro') {

let sn = createHash('md5').update(m.sender).digest('hex')

conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', `🪐 ¡Numero de Registro! 🪐`, 'status@broadcast')
// m.reply(sn)

}}
handler.help = ['unreg', 'unregister', 'nserie', 'nregistro']
handler.tags = ['rg']
handler.command = ['unreg', 'unregister', 'nserie', 'nregistro']
handler.register = true
export default handler
