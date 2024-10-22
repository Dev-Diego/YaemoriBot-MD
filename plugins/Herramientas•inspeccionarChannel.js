import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  let newsletterInfo;
  const channelUrl = text?.match(/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:channel\/|joinchat\/)?([0-9A-Za-z]{22,24})/i)?.[1];
  
  if (!channelUrl) {
    await m.react(emojis)
    return await conn.reply(m.chat, "*Verifique que sea un enlace de canal de WhatsApp.*", m);
  }
  
  try {
    await m.react(rwait)
    newsletterInfo = await conn.newsletterMetadata("invite", channelUrl).catch(e => null);
    if (!newsletterInfo) {
      return await conn.reply(m.chat, "*No se encontró información del canal.* Verifique que el enlace sea correcto.", m);
    }
    
    let caption = "🌵 Id: " + id, newsletterInfo?.preview);
    
await conn.reply(m.chat, caption, m, rcanal)
await m.react(done)

  } catch (e) {
    await m.react(error)
    console.log(e);
  }
};

handler.command = ['id', 'inspeccionarchanel'];
handler.register = true;
export default handler;