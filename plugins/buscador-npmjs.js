/*
《✧》Derechos reservados por autor《✧》
- おDiego.xyz (@Dev-Diego)
*/

import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {

if (m.body.startsWith('buscador-npmjs')) {
const packageName = msg.body.split(' ')[1];
if (!packageName) {
m.reply('Por favor, proporciona el nombre del paquete que deseas buscar.')
return
}

try {

const packageInfo = await npmjs.get(packageName)

let txt = objects.map(({ package: pkg }) => {
return `《✧》 𝖲craper - Yaemori 《✧》

✦ 𝐍𝐨𝐦𝐛𝐫𝐞: ${pkg.name}
✦ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: V${pkg.version}
✦ 𝐄𝐧𝐥𝐚𝐜𝐞: ${pkg.links.npm}
✦ 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧: ${pkg.description}
\n\n----------`
}).join`\n\n`
m.reply(txt)
await.react(done)

} catch (e) {
console.log(e)
await m.react(error)
m.reply(`Error al buscar el paquete: ${text}`)}}

handler.help = ['npmjs']
handler.tags = ['buscador']
handler.command = ['npmjs']
handler.register = true
handler.cookies = 1
export default handler