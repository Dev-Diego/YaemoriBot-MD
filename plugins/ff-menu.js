import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, estrellas, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
 await m.react('🚩')
const document = doc[Math.floor(Math.random() * doc.length)];
 const free = `《✧》 *MAPAS - FREE FIRE* 《✧》

• ${usedPrefix}bermuda
• ${usedPrefix}purgatorio
• ${usedPrefix}kalahari
• ${usedPrefix}nexterra
• ${usedPrefix}alpes

《✧》 *LISTA  - VS* 《✧》

Significados:
» *HH:MM (Hora:Minutos)*
» *CP (Codigo de pais)*
» *PARA LA HORA (Mx, Co, Cl y Ag)* 
» *CR (Color de ropa)*

✎ Ejemplo: .
> » ${usedPrefix}1vs1 22:30 CO

• ${usedPrefix}1vs1 HH:MM CP
• ${usedPrefix}4vs4 HH:MM CP
• ${usedPrefix}12vs12 HH:MM CR
• ${usedPrefix}donarsala`.trim();     
  
await conn.sendMessage(m.chat, {text: free, contextInfo: { forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterName: '¡New Channel! 🚩', newsletterJid: "120363263466636910@newsletter", }, externalAdReply: { title: '🎮 Game - Free Fire', body: '🎮 Juego Free', thumbnailUrl: 'https://qu.ax/FGye.jpg', sourceUrl: 'https://github.com/Jostin207', mediaType: 1, renderLargerThumbnail: true }}}, {quoted: m});
    
  } catch {
  await m.react('✖️')
  await conn.reply(m.chat, '*🚩 Ocurrió un error inesperado.*', m, fake);
  }
};
handler.tags = ['ff', 'main']
handler.help = ['menuff']
handler.command = ['menu', 'help', 'menuff', 'menufreefire'];
//handler.register = true
handler.group = true
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}