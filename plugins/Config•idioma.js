const handler = async (m, { args, usedPrefix, command, isAdmin }) => {

if (command === 'idioma') {
return m.reply(`🚩 Elije el idioma.\n\n[ es ] Español.\n[ en ] Ingles.`)
} else if (sigla === 'es') {
global.db.data.users[m.sender].Language = 'es'
m.reply(`Idioma definido a Español 🇪🇸`)

} else if (sigla === 'en') {
global.db.data.users[m.sender].Language = 'en'
m.reply(`Idioma definido a Inglês 🇬🇧`)
}}}

handler.help = ['idioma']
handler.tags = ['rg']
handler.command = ['idioma', 'es', 'en']
export default handler