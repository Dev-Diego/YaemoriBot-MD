let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false
global.db.data.users[m.sender].money -= 100
global.db.data.users[m.sender].chocolates -= 40
global.db.data.users[m.sender].exp -= 300
global.db.data.users[m.sender].joincount -= 20

return conn.reply(m.chat, `🚩 Tu registro ha sido anulado correctamente.`, m, rcanal)

}
handler.help = ['unreg']
handler.tags = ['rg']
handler.command = ['unreg', 'unregister']
handler.register = true
export default handler
