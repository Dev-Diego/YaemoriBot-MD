import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fsPromises } from "fs";
const fs = { ...fsPromises, existsSync };
import path, { join } from 'path' 
import ws from 'ws';

let handler = async (m, { conn: _envio, command, usedPrefix, args, text, isOwner}) => {
const isCommand1 = /^(deletesesion|deletebot|deletesesaion)$/i.test(command)  
const isCommand2 = /^(stop|pausarai)$/i.test(command)  
const isCommand3 = /^(bots|listjadibots|subbots)$/i.test(command)  

async function reportError(e) {
await m.reply(`🌻 Ocurrió un error.`)
console.log(e)
}

switch (true) {       
case isCommand1:
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let uniqid = `${who.split`@`[0]}`
const path = `./${jadi}/${uniqid}`

if (!await fs.existsSync(path)) {
await conn.sendMessage(m.chat, { text: `🌻 Usted no tiene una sesión, puede crear una usando:\n${usedPrefix + command}\n\nSi tiene una *(ID)* puede usar para saltarse el paso anterior usando:*\n*${usedPrefix + command}* \`\`\`(ID)\`\`\`` }, { quoted: m })
return
}
if (global.conn.user.jid !== conn.user.jid) return conn.sendMessage(m.chat, {text: `🚩 Use este comando al *Bot* principal.\n\n*https://api.whatsapp.com/send/?phone=${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}&type=phone_number&app_absent=0*`}, { quoted: m }) 
else {
await conn.sendMessage(m.chat, { text: `*Te voy a estrañar YaemoriBot Chao!! 🥹*` }, { quoted: m })}
try {
fs.rmdir(`./${jadi}/` + uniqid, { recursive: true, force: true })
await conn.sendMessage(m.chat, { text : `Ha cerrado sesión y borrado todo rastro.` } , { quoted: m })
} catch (e) {
reportError(e)
}  
break

case isCommand2:
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `✨ Si no es *SubBot* comuníquese al numero principal del *Bot* para ser *SubBot*`, m)
else {
await conn.reply(m.chat, `🚩 Ai desactivada.`, m)
conn.ws.close()}  
break

case isCommand3:
//if (global.db.data.settings[conn.user.jid].jadibotmd) return m.reply(`🚩 Este comando está desactivado por mi creador.`)
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
function convertirMsADiasHorasMinutosSegundos(ms) {
var segundos = Math.floor(ms / 1000);
var minutos = Math.floor(segundos / 60);
var horas = Math.floor(minutos / 60);
var días = Math.floor(horas / 24);
segundos %= 60;
minutos %= 60;
horas %= 24;
var resultado = "";
if (días !== 0) {
resultado += días + " días, ";
}
if (horas !== 0) {
resultado += horas + " horas, ";
}
if (minutos !== 0) {
resultado += minutos + " minutos, ";
}
if (segundos !== 0) {
resultado += segundos + " segundos";
}
return resultado;
}
const message = users.map((v, index) => `[ ${index + 1} ]\n🌻 wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n👤 Nombre : ${v.user.name || '-'}\n✨️ Actividad : ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n__________________________\n\n');
const replyMessage = message.length === 0 ? `NO HAY SUB BOTS DISPONIBLE. VERIFIQUE MÁS TARDE.` : message;
const totalUsers = users.length;
const responseMessage = `🌻 *LISTA DE SUBBOTS*\n\n🌟 PUEDES PEDIR PERMISO PARA QUE TE DEJEN UNIR EL BOT A TÚ GRUPO\n\n\`\`\`CADA USUARIO SUB BOT USA FUNCIÓN COMO QUIERA, EL NÚMERO PRINCIPAL NO SE HACE RESPONSABLE DEL USO DE LA FUNCIÓN \`\`\`\n\nSUBBOT CONECTADO: ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m})
break    
}}

handler.command = ['deletesesion', 'deletebot', 'deletesession', 'stop', 'pausarai', 'bots', 'listjadibots', 'subbots']
export default handler