let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command, participants, groupMetadata }) => {

let user = m.sender.split('@')[0] 
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_1, code1] = link.match(linkRegex) || []
if (!code1) return m.reply(`🚩 Ingresa el enlace del Grupo.`)
try {      
if ( isOwner || m.fromMe) {
await m.reply(`🚩 Me uní correctamente al grupo.`)
let res1 = await conn.groupAcceptInvite(code1)
await conn.sendMessage(res1, { text: `${packname}\n🥳 Se ha unido al grupo.\n\n🐢 *Fué agregada por:* @${user}`, mentions: (await conn.groupMetadata(`${res1}`)).participants.map(v => v.id) }, [user], { quoted: fkontak })
}} catch (e) {
await m.reply('🚩 Ocurrió un error')
}}

handler.help = ['join <link>']
handler.tags = ['owner']
handler.command = ['join', 'entrar'] 
handler.rowner = true

export default handler