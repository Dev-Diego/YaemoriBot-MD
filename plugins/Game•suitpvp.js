const timeout = 60000;
const poin = 500;
const poin_lose = -100;
const poin_bot = 200;
const handler = async (m, {conn, usedPrefix, text}) => {
  conn.suit = conn.suit ? conn.suit : {};
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) return conn.reply(m.chat, '🌵 Termina tu partida antes de iniciar otra.', m, rcanal);
  const textquien = `╰⊱❗️⊱ *ACCIÓN MAL USADA* ⊱❗️⊱╮\n\n𝙋𝙄𝙀𝘿𝙍𝘼, 𝙋𝘼𝙋𝙀𝙇, 𝙊 𝙏𝙄𝙅𝙀𝙍𝘼\n\n𝙋𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨:\n#pvp piedra\n#pvp papel\n#pvp tijera\n\n𝙊 𝙋𝙪𝙚𝙙𝙚𝙨 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖 𝙖 𝙪𝙣𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙚𝙟𝙚𝙢𝙥𝙡𝙤 :\n#pvp @0`;
  if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `🌵 El usuario se encuentra en otra partida.`;
  const id = 'suit_' + new Date() * 1;
  const caption = `╰⊱❕⊱ *INFORMACIÓN* ⊱❕⊱╮\n\n🎮👾 𝙂𝘼𝙈𝙀𝙎 - 𝙋𝙑𝙋 - 𝙂𝘼𝙈𝙀𝙎 🎮👾\n\n@${m.sender.split`@`[0]} 𝘿𝙀𝙎𝘼𝙁𝙄𝘼 𝘼 @${m.mentionedJid[0].split`@`[0]} 𝘼 𝙐𝙉 (𝙋𝙑𝙋) 𝘿𝙀 𝙋𝙄𝙀𝘿𝙍𝘼, 𝙋𝘼𝙋𝙀𝙇 𝙊 𝙏𝙄𝙅𝙀𝙍𝘼\n\n_*Escribe (aceptar) para aceptar*_\n_*Escribe (rechazar) para rechazar*_`;
  const imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`;
  conn.suit[id] = {
    chat: await stars.sendMessage(m.chat, { text: caption, mentions: stars.parseMention(caption) }, { quoted: m }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `🌵 Tiempo de espera finalizado, el pvp se canceló por falta de respuesta.`, m, fake);

      delete conn.suit[id];
    }, timeout), poin, poin_lose, poin_bot, timeout,
  };
};
handler.command = ['pvp', 'suit', 'suitpvp'];
handler.group = true;


export default handler;