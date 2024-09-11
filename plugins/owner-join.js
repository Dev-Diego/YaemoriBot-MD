const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let enviando;
const handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
if (enviando) return;
enviando = true 
try {
const link = text //(m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
if (!link || !link.match(linkRegex)) return conn.reply(m.chat, '🍟 Ingresa el enlace del Grupo.', m, rcanal)
const [_, code] = link.match(linkRegex) || [];
if ( isPrems || isMods || isOwner || m.fromMe) {
const res = await conn.groupAcceptInvite(code);
await conn.sendMessage(m.chat, {text: '*🚩 La Bot Se Unio Correctamente.*'}, {quoted: fkontak})
enviando = false 
} else {
const msg = '*🧿 El link de su grupo fue enviado a mi creador.*\n\n*🍓 Su grupo estará en evaluación y el propietario/a del Bot decidirá si agrega o no al Bot.*\n\n*🍓 Algunas de las razones por la cual su solicitud puede ser rechazada son:*\n*1.🌹 El Bot está saturado.*\n*2.🌹 El Bot fue eliminado del grupo recientemente.*\n*3.🌹 El link del grupo ha sido restablecido.*\n*4.🌹 El Bot no se agrega a grupos por decisión del propietario/a.*\n\n*🍓 El proceso de evaluación puede tomar algo de tiempo, incluso dias, tenga paciencia.*'
conn.reply(m.chat, msg, m, rcanal)
const data = global.owner.filter(([id]) => id)[0]
const dataArray = Array.isArray(data) ? data : [data]
for (const entry of dataArray) await conn.sendMessage(entry + '@s.whatsapp.net', {text: '*🦋 NUEVA SOLICITUD DE UN BOT PARA UN GRUPO 🍓*\n\n*Solicitante:* ' + '@' + m.sender.split('@')[0] + '\n*Link del grupo:* ' + link, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: fkontak})
enviando = false 
}
} catch {
enviando = false 
await m.react(error)
await coon.reply(m.chat, '🚩 *Ocurrió Un Error*', m, fake)
}
}
handler.help = ['join']
handler.tags = ['owner', 'grupo']
handler.command = ['join', 'unete']
handler.register = true
export default handler