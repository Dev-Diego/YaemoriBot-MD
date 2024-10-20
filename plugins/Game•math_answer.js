global.math = global.math ? global.math : {};
const handler = async (m, {conn}) => {
  const id = m.chat;
  if (!m.quoted) return;
  if (m.quoted.sender != conn.user.jid) return;
  if (!/^Cuanto es el resultado de/i.test(m.quoted.text)) return;
  if (!(m.chat in global.math)) return conn.reply(m.chat, `🌵 Ya se ha respondido a esa pregunta.`, m, rcanal);
  if (m.quoted.id == global.math[id][0].id) {
    const math = global.math[id][1];
    if (m.text == math.result) {
      conn.reply(m.chat, `🌵 Respuesta correcta.\n🎁 Premio: *${math.bonus} Galletas*`, m, rcanal);
      global.db.data.users[m.sender].cookies += math.bonus;
      clearTimeout(global.math[id][3]);
      delete global.math[id];
    } else {
      if (--global.math[id][2] == 0) {
        conn.reply(m.chat, `🌵 Se acabaron tus oportunidades.\n⭐️ La respuesta es: *${math.result}*`, m, rcanal);
        clearTimeout(global.math[id][3]);
        delete global.math[id];
      } else conn.reply(m.chat, `🌵 Respuesta incorrecta.\n✨️ Oportunidades disponible: *${global.math[id][2]}*`, m, rcanal);
    }
  }
};
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/;
handler.command = new RegExp;
export default handler;