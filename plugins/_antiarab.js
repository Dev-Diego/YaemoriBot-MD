const handler = (m) => m;
handler.before = async function(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
  /* if (m.message) {
    console.log(m.message)
  }*/
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (isBotAdmin && chat.antiArab && !isAdmin && !isOwner && !isROwner && bot.restrict) {
    if (m.sender.startsWith('57' || '57')) {
      m.reply(`『✦』Los numeros: *57*, se van eliminados de este grupo.`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('265' || '265')) {
      m.reply(`『✦』Los numeros: *265*, se van eliminados de este grupo.`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('92' || '92')) {
      m.reply(`『✦』Los numeros: *92*, se van eliminados de este grupo.`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }
  }
};
export default handler;
