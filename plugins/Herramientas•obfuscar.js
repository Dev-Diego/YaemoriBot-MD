let handler = async (m, { conn, text, args, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, '🔐 Que codigo voy a obfuscar?', m, rcanal);

try {
await m.react(rwait)
const texto = args.join(" ")
const offset = 5
const obfuscatorOfc = (input) => {
const used = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const obfuscar = input.split('').map(char => {
const index = used.indexOf(char)
if (index === -1) return char
return used[(index + offset) % used.length]}).join('')
return obfucar
}

} catch (e) {
await m.react('❌️ Ocurrió un error.\n\n ' + e)
await m.react(error)

const obfuscator = obfuscatorOfc(texto)
conn.reply(m.chat, `obfuscator, m, rcanal)
await m.react(done)}}

handler.help = ['obfuscar *<textl>*']
handler.tags = ['tools']
handler.command = ['obfuscar', 'incriptar', 'encriptar']

export default handler