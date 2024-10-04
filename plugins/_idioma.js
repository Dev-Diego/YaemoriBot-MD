let handler = async (m, { conn, text }) => {

let _idioma = '🚩 *Seleccione su idioma*\n\n> Idiomas disponibles:\n\nes *(Español)*\nen *(Inglés)*\n\nEjemplo: #idioma en'
if (!text) {
let listSections = []    
listSections.push({
title: '',
rows: [{ header: "", title: "Español 🇪🇦", id: `.idioma es`, description: `` },
{ header: "", title: "English 🇺🇸", id: `.idioma en`, description: `` }
]})
return conn.sendList(m.chat, _idioma, null, `🌐 Idiomas`, listSections, { mentions: [m.sender]}, {quoted: m})
//return conn.sendButton(m.chat, _idioma, '🍟 Seleccione su idioma', null, [['Español 🇲🇽', `.idioma es`], ['Inglés 🇺🇸', `.idioma en`], ['Indonesio 🇮🇩', `.idioma id`]], null, null, m)
}
let choice = text.includes('es') ? 'es' : text.includes('en') ? 'en' : null
if (!choice) {
return m.reply('Por favor, seleccione uno de los idiomas disponibles: español, inglés')
}
global.lenguajeYB = choice
switch (choice) {
case 'es':
return m.reply('Idioma configurado a Español 🇲🇽')
case 'en':
return m.reply('Language set to English 🇺🇲')
}
}
handler.command = ['idioma', 'lenguaje']
handler.rowner = true
export default handler