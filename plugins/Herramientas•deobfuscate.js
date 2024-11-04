let handler = async (m, { conn, args, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, '🔓 Que codigo deseas deobfuscar?', m, rcanal)

try {
await m.react(rwait)
const deobfuscateOfc = args.join(" ")
const offset = 5
const Texto = (input) => {
const used = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const Ofcdeobfuscate = input.split('').map(char => {
const index = used.indexOf(char);
if (index === -1) return char 
return used[(index - offset + used.length) % used.length]}).join('')
return Ofcdeobfuscate
}
const deobfuscate = Texto(deobfuscateOfc)

} catch (e) {
await m.reply('❌️ Ocurrió un error.\n\n' + e)
await m.react(error)

await conn.reply(m.chat, deobfuscate, m, rcanal)
await m.react(done)}}

handler.help = ['deobfuscate <texto>']
handler.tags = ['tools']
handler.command = ['deobfuscate', 'desencriptar']

export default handler