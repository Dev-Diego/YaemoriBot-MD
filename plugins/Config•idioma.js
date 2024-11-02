const handler = async (m, { args, usedPrefix, command, isAdmin }) => {

try {
data.db.data.users[m.sender].Language
let sigla // Args user
if (args[0] != undefined) {
sigla = args[0].toLowerCase()
}

if (command === 'idioma') {
} else if (sigla === 'es') {
global.db.data.users[m.sender].language = 'es'
m.reply(`Idioma definido a Español 🇪🇸`)

} else if (sigla === 'en') {
global.db.data.users[m.sender].language = 'en'
m.reply(`Idioma definido a Inglês 🇬🇧`)

}else {
m.reply(`🚩 Elije el idioma.\n\n[ es ] Español.\n[ en ] Ingles.`)
}}

handler.help = ['idioma']
handler.tags = ['rg']
handler.command = ['idioma']
export default handler