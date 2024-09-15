//
// By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs';

export async function before(m, {conn, isAdmin, isBotAdmin, usedPrefix}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const delet = m.key.participant;
  const bang = m.key.id;
  const name = await conn.getName(m.sender);
  const fakemek = {'key': {'participant': '0@s.whatsapp.net', 'remoteJid': '0@s.whatsapp.net'}, 'message': {'groupInviteMessage': {'groupJid': '51995386439-1616969743@g.us', 'inviteCode': 'm', 'groupName': 'P', 'caption': '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ ᥡᥲᥱm᥆rіᑲ᥆𝗍 ☄︎', 'jpegThumbnail': null}}};
  if (chat.antiTraba && m.text.length > 5000) { // Cantidad maxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, {text: `『✦』El administrador @${m.sender.split('@')[0]} acaba de enviar un texto que contiene muchos caracteres`, mentions: [m.sender]}, {quoted: fakemek});
    conn.sendMessage(m.chat, `*『✦』Se detecto un mensaje que contiene muchos caracteres*\n`, `${isBotAdmin ? '' : '『✦』No soy administrador, no puedo hacer nada'}`, m);
    if (isBotAdmin && bot.restrict) {
      conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
                setTimeout(() => {
                conn.sendMessage(m.chat, {text: `『✦』Marcar el chat como leido âœ“\n${'\n'.repeat(400)}\n\nNumero: wa.me/${m.sender.split('@')[0]}\n\nNo: ${name}\n\n『✦』Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`, mentions: [m.sender]}, {quoted: fakemek});
      }, 0);
      setTimeout(() => {
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }, 1000);
    } else if (!bot.restrict) return m.reply('『✦』Las restricciones no estan activas.');
  }
  return !0;
}