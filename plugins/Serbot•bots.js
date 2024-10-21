import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
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
const message = users.map((v, index) => `(${index + 1})\n🚩 wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}infobot\n*🌵 𝙉𝙊𝙈𝘽𝙍𝙀 :* *${v.user.name || '-'}*\n*🕝 𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏𝙄𝙑𝙊 :* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n••••••••••••••••••••••••••••••••••••\n\n');
  const replyMessage = message.length === 0 ? '*NO HAY SUB BOTS DISPONIBLE. VERIFIQUE MÁS TARDE.*' : message;
const totalUsers = users.length;
const responseMessage = `const smsJBCom3 = () => { return `😺 *LISTA DE SUBBOTS*\n\n🌟 _PUEDES PEDIR PERMISO PARA QUE TE DEJEN UNIR EL BOT A TÚ GRUPO_\n\n\`\`\`CADA USUARIO SUB BOT USA FUNCIÓN COMO QUIERA, EL NÚMERO PRINCIPAL NO SE HACE RESPONSABLE DEL USO DE LA FUNCIÓN \`\`\`\n\nSUBBOT CONECTADO: ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m})}
handler.help = ['bots'];
handler.tags = ['serbot'];
handler.command = ['listjadibot', 'bots'];
export default handler;