import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {
const lang = global.db.data.users[anu.participants]?.lenguaje || 'es'
const _translate = JSON.parse(fs.readFileSync(`./src/idiomas/${lang}.json`))
const tradutor = _translate.plugins.ai_gemini

if (!text) return conn.reply(m.chat, `${traductor.text1}`, m, rcanal)
try {
await m.react(rwait)
conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch {
await m.react(error)
await conn.reply(m.chat, `${traductor.texterror}`, m, rcanal)
}}
handler.command = ['gemini']
handler.help = ['gemini']
handler.tags = ['ai']

export default handler