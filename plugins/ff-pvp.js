let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)},* Tiene pvp con *${toM(b)}*`, null, {
mentions: [a, b]
})}
handler.help = ['pvp']
handler.tags = ['ff']
handler.command = ['pvp']
handler.group = true
export default handler