function handler(m, { groupMetadata, participants }) {
let psmap = groupMetadata.participants.filter(v => v !== conn.user.jid)

let user = a => '@' + a.split('@')[0]
let user0 = psmap.getRandom()
let user1 = psmap.getRandom()

m.reply(`😿 Pvp ${user(0)} vs ${user(1)}`, null, {
mentions: [user0, user1]
})}
handler.help = ['pvp']
handler.tags = ['ff']
handler.command = ['pvp']
handler.group = true
export default handler