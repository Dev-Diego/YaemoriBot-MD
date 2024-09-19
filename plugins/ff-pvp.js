function handler(m, { groupMetadata }) {
let psmap = groupMetadata.participants.filter(v => v !== conn.user.jid)
psmap=psmap.filter(v => v.admin !=='superadmin')
psmap=psmap.filter(v => v.admin !=='admin')
psmap=psmap.map(v => v.id)
let user = a => '@' + a.split('@')[0]
let user0 = psmap.getRandom()
let user1 = psmap.getRandom()

if (psmap == '') return conn.reply(m.chat, `😿 No se ha encontrado usuarios para un pvp`, m, fake)

m.reply(`😿 Hoy se dará pvp los usiarios: *${user(user0)},* Y *${user(1)}*`, null, {
mentions: [user0, user1]
})}
handler.help = ['pvp']
handler.tags = ['ff']
handler.command = ['pvp']
handler.group = true
export default handler