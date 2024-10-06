var handler  = async (m, { conn }) => {

let texto = `🚩 *Instalación de Ai Yaemori*

⬡ Dudas: ${creador}
⬡ Tutoríal: https://youtu.be/0JtOm_ie4CQ?si=kbL823AQmUhC3PmC

*Comandos de instalación via cloudshell 🌱*

git clone https://github.com/Dev-Diego/YaemoriBot-MD

cd YaemoriBot-MD && yarn install && npm install 

npm start

_Utilice "comandos" para enviarle los comandos uno por uno 🚩_

_Utilice "corin" para enviarle la instalación por el host *corinplus* 🚩_`

conn.reply(m.chat, texto, m, rcanal )

handler.before = async m => {

if (/^comandos$/i.test(m.text) ) {
conn.reply(m.chat, 'git clone https://github.com/Dev-Diego/YaemoriBot-MD && cd YaemoriBot-MD', m, rcanal)
await delay(1000 * 1)
conn.reply(m.chat, 'yarn install && npm install', m, rcanal)
await delay(1000 * 1)
conn.reply(m.chat, 'npm start', m, rcanal)
}

if (/^corin$/i.test(m.text) ) {
conn.reply(m.chat, '💠 *Instalación por CorinPlus*\n(nosotros no tenemos tutorial pero eso les puede ayudar)\n\n• Dashboard:\nhttps://dash.corinplus.com\n\n• Panel:\nhttps://panel.corinplus.com', m, rcanal)
await delay(2000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/9532b7ff1fabc02d7e199.jpg'}, caption: ''}, {quoted: fkontak})
await delay(1000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/26d87a519e24fe3ffbf82.jpg'}, caption: ''}, {quoted: fkontak})
}
}

}
handler.help = ['instalaryaemori']
handler.tags = ['main']
handler.command = ['instalarbot', 'instalarai', 'botinstalar', 'aiinstalar', 'instalaryaemori', 'yaemoriinstalar']
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
