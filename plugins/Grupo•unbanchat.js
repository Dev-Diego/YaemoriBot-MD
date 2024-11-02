let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = false
conn.reply(m.chat, `🚩 *Este chat fue desbaneado con éxito*`, m, rcanal)

}
handler.help = ['unbanchat']
handler.tags = ['grupo']
handler.command = ['unbanchat']

handler.botAdmin = true
handler.admin = true 
handler.group = true

export default handler