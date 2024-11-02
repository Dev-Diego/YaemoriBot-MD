import fetch from 'node-fetch'

//Lenguaje
let lang = global.db.data.users[m.sender]?.lenguaje || 'es'
const idioma = JSON.parse(fs.readFileSync(`./src/idiomas/${lang}.json`))
const gemini = idioma.plugins.gemini

var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `${gemini.text1}`, m, rcanal)
try {
await m.react(rwait)
conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch {
await m.react(error)
await conn.reply(m.chat, `${gemini.texterror}`, m, rcanal)
}}
handler.command = ['gemini']
handler.help = ['gemini']
handler.tags = ['ai']

export default handler