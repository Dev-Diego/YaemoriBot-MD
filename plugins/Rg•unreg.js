let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

global.db.data.users[m.sender].money -= 600
global.db.data.users[m.sender].cookies -= 15
global.db.data.users[m.sender].exp -= 245
global.db.data.users[m.sender].joincount -= 5
user.registered = false

return conn.reply(m.chat, `🚩 Tu registro ha sido anulado correctamente.`, m, rcanal)

}
handler.help = ['unreg']
handler.tags = ['rg']
handler.command = ['unreg', 'unregister']
handler.register = true
export default handler
