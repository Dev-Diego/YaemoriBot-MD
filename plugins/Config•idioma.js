let handler = async (m, { conn, text }) => {

let _idioma = '🚩 *Seleccione su idioma*\n\n> Idiomas disponibles:\nes _(Español)_\nen _(Inglés)_\n\n`Ejemplo:`\n#idioma en'
if (!text) {
let listSections = []    
listSections.push({
title: '',
rows: [{ header: "", title: "Español 🇪🇦", id: `#idioma es`, description: `` },
{ header: "", title: "English 🇺🇸", id: `#idioma en`, description: `` }
]})
return conn.sendList(m.chat, _idioma, null, `🌐 Idiomas`, listSections, { mentions: [m.sender]}, {quoted: m})
}
let choice = text.includes('es') ? 'es' : text.includes('en') ? 'en' : text.includes('id') ? 'id' : text.includes('ar') ? 'ar' : text.includes('pt') ? 'pt' : null
if (!choice) {
return m.reply('Por favor, seleccione uno de los idiomas disponibles: español o inglés')
}
global.lenguajeYL = choice
switch (choice) {
case 'es':
return m.reply('Idioma configurado a Español 🇲🇽')
case 'en':
return m.reply('Language set to English 🇺🇲')
}
}
handler.command = ['lenguage', 'lenguaje', 'idioma']
handler.rowner = true
export default handler