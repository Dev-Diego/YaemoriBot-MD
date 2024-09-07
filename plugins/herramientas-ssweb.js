import fetch from 'node-fetch'
let handler = async (m, { conn, command, args }) => {
if (!args[0]) return conn.reply(m.chat, '⚠️ *Ingrese el Link de una página.*', m, rcanal)
await m.react(rwait)
let ss = await (await fetch(`https://violetics.pw/api/media/ssweb?apikey=beta&url=${args[0]}`)).buffer()
conn.sendFile(m.chat, ss, 'error.png', args[0], fkontak)
await m.react(done)
} catch {
return conn.reply(m.chat, '🚩 Ocurrió un error.', m, fake)}
handler.help = ['ssweb', 'ss']
handler.tags = ['tools']
handler.command = ['ssweb', 'ss']
export default handler