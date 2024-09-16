import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
var handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => imagen1)
let { premium, level, cookies, exp, lastclaim, registered, regTime, age, role } = global.db.data.users[m.sender]
let username = conn.getName(who)
let noprem = `
┏━━━━━━━━━⪩
┃❀ *PERFIL DE USUARIO*
┃☁️ *Nombre:* ${username}
┃❄ *Tag:* @${who.replace(/@.+/, '')}
┃🌟 *Registrado:* ${registered ? '✔': '✘'}
┗━━━━━━━━━⪩

┏━━━━━━━━━⪩
┃👑 *RECURSOS*
┃🍪 *Cookies:* ${cookies}
┃💥 *Nivel:* ${level}
┃💫 *Experiencia:* ${exp}
┃✨️ *Rango:* ${role}
┃💖 *Premium:* ${premium ? '✔': '✘'}
┗━━━━━━━━━⪩
`.trim()
let prem = `
┏━━━━━━━━━⪩
┃> * 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌
┗━━━━━━━━━⪩

┏━━━━━⪩ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍
┃⧼☁⧽ *Usuario:* 「${username}」
┃⧼❄⧽ *Tag:* @${who.replace(/@.+/, '')}
┃⧼🌟⧽ *Registrado:* ${registered ? '✅': '❌'}
┃⧼🔱⧽ *Rol:* Vip 👑
┗━━━━━━━━━━⪩

┏━━━━━⪩ 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒
┃⧼🍪⧽ *Cookies:* ${cookies}
┃⧼💥⧽ *Nivek:* ${level}
┃⧼💫⧽ *Exp:* ${exp}
┃⧼✨⧽ *Rango:* ${role}
┗━━━━━━━━━━⪩ 

*𝙽𝙾𝚃𝙰:*
> 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙴𝚂 𝙳𝙴𝚂𝚃𝙰𝙲𝙰𝙳𝙾`.trim()
conn.sendFile(m.chat, pp, 'perfil.jpg', `${premium ? prem.trim() : noprem.trim()}`, m, rcanal, { mentions: [who] })
}
handler.help = ['profile']
handler.register = true
//handler.group = true
handler.tags = ['rg']
handler.command = ['profile', 'perfil']
export default handler
