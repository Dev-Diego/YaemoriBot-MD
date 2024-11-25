const handler = async (m, {conn, text, command, usedPrefix, args}) => {
// let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
  const pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg';

  // 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
  const time = global.db.data.users[m.sender].wait + 10000;
  if (new Date - global.db.data.users[m.sender].wait < 10000) throw `*🕓 Tendrás que esperar ${Math.floor((time - new Date()) / 1000)} segundos antes de poder volver a jugar*`;

 if (!args[0]) return conn.reply(m.chat, `*Piedra 🗿, Papel 📄 o Tijera ✂️*\n\n*🌵 Puedes usar estos comandos:*\n*• ${usedPrefix + command} piedra*\n*• ${usedPrefix + command} papel*\n*• ${usedPrefix + command} tijera*`, m);
  let astro = Math.random();
  if (astro < 0.34) {
    astro = 'piedra';
  } else if (astro > 0.34 && astro < 0.67) {
    astro = 'tijera';
  } else {
    astro = 'papel';
  }
  const textm = text.toLowerCase();
  if (textm == astro) {
    global.db.data.users[m.sender].chocolates += 10;
    m.reply(`*😺 Empate!*\n\n*🍄 Tu: ${textm}*\n*🌸 El Bot: ${astro}*\n*🎁 Premio: 10 Chocolates*`);
  } else if (text == 'papel') {
    if (astro == 'piedra') {
      global.db.data.users[m.sender].chocolates += 50;
      m.reply(`*🥳 Tú ganas! 🎉*\n\n*🍄 Tu: ${textm}*\n*🌸 El Bot: ${astro}*\n*🎁 Premio: 50 Chocolates*`);
    } else {
      global.db.data.users[m.sender].chocolates -= 30;
      m.reply(`*😿 ¡Tú pierdes! 😿*\n\n*🍄 Tu: ${textm}*\n*🌸 El Bot: ${astro}*\n*😾 Te quitan: 30 Chocolates*`);
    }
  } else if (text == 'tijera') {
    if (astro == 'papel') {
      global.db.data.users[m.sender].chocolates += 50;
      m.reply(`*🥳 Tú ganas! 🎉*\n\n*🍄 Tu: ${textm}*\n*🌸 El Bot: ${astro}*\n*🎁 Premio: 50 Chocolates*`);
    } else {
      global.db.data.users[m.sender].chocolates -= 30;
      m.reply(`*😿 ¡Tú pierdes! 😿*\n\n*🍄 Tu: ${textm}*\n*🌸 El Bot: ${astro}*\n*😾 Te quitan: 30 Chocolates*`);
    }
  } else if (textm == 'tijera') {
    if (astro == 'papel') {
      global.db.data.users[m.sender].chocolates += 50;
      m.reply(`*🥳 Tú ganas! 🎉*\n\n*🍄 Tu: ${textm}*\n*🌸 El Bot: ${astro}*\n*🎁 Premio: 50 Chocolates*`);
    } else {
      global.db.data.users[m.sender].chocolates -= 30;
      m.reply(`*😿 ¡Tú pierdes! 😿*\n\n*🍄 Tu: ${textm}*\n*🌸 El Bot: ${astro}*\n*😾 Te quitan: 30 Chocolates*`);
    }
  } else if (textm == 'papel') {
    if (astro == 'piedra') {
      global.db.data.users[m.sender].chocolates += 50;
      m.reply(`*🥳 Tú ganas! 🎉*\n\n*🍄 Tu: ${textm}*\n*🌸 El Bot: ${astro}*\n*🎁 Premio: 50 Chocolates*`);
    } else {
      global.db.data.users[m.sender].chocolates -= 30;
      m.reply(`*😿 ¡Tú pierdes! 😿*\n\n*🍄 Tu: ${textm}*\n*🌸 El Bot: ${astro}*\n*😾 Te quitan: 30 Chocolates*`);
    }
  } else if (textm == 'piedra') {
    if (astro == 'tijera') {
      global.db.data.users[m.sender].chocolates += 50;
      m.reply(`*🥳 Tú ganas! 🎉*\n\n*🍄 Tu: ${textm}*\n*🌸 El Bot: ${astro}*\n*🎁 Premio: 50 Chocolates*`);
    } else {
      global.db.data.users[m.sender].chocolates -= 30;
      m.reply(`*😿 ¡Tú pierdes! 😿*\n\n*🍄 Tu: ${textm}*\n*🌸 El Bot: ${astro}*\n*😾 Te quitan: 30 Chocolates*`);
    }
  }
  global.db.data.users[m.sender].wait = new Date * 1;
};
handler.help = ['ppt'];
handler.tags = ['fun'];
handler.command = ['ppt'];
handler.register = true;
export default handler;