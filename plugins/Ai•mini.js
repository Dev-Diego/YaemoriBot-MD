import axios from 'axios';
import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(
      m.chat,
      `🚩 ¿Que le quieres decir ha *Mini?*\n\n> 🌵 Ejemplo: ${usedPrefix + command} Hola`,
      m,
      rcanal
    );
  }

  try {
    let character_id = "99ab5940-1ed9-4543-825b-056f32d0690b"; 
    let name = conn.getName(m.sender);
    let { msg } = await m.characterAi(character_id, text, name);
    await conn.reply(m.chat, `${msg.join("\n")}`, m, rcanal);
  } catch (e) {
    await m.react(error);
    conn.reply(m.chat, `🚩 Ocurrió un error.\n\n${e}`, m, rcanal);
   // console.error(e);
  }
};

handler.tags = ["ai"];
handler.help = ["mini"];
handler.command = ["mini", "ai", "yaemori"];
handler.register = true;

export default handler;