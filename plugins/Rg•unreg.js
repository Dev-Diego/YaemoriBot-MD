let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false

return conn.reply(m.chat, `🚩 Tu registro ha sido anulado correctamente.`, m, rcanal)

}
handler.help = ['unreg']
handler.tags = ['rg']
handler.command = ['unreg', 'unregister']
handler.register = true
export default handler
