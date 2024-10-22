import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  let newsletterInfo;
  const channelUrl = text?.match(/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:channel\/|joinchat\/)?([0-9A-Za-z]{22,24})/i)?.[1];
  
  if (!channelUrl) {
    return await conn.reply(m.chat, "*Verifique que sea un enlace de canal de WhatsApp.*", m);
  }
  
  try {
    newsletterInfo = await conn.newsletterMetadata("invite", channelUrl).catch(e => null);
    if (!newsletterInfo) {
      return await conn.reply(m.chat, "*No se encontró información del canal.* Verifique que el enlace sea correcto.", m);
    }
    
    let caption = "🌵 Id: " + id, newsletterInfo?.preview);
    
    if (channelUrl ) {
      await conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
          mentionedJid: conn.parseMention(caption),
          externalAdReply: {
            title: "Inspector de Canales",
            body: packname,
            thumbnailUrl: icons,
            sourceUrl: text,
            mediaType: 1,
            showAdAttribution: false,
            renderLargerThumbnail: false
          }
        }
      }, { quoted: fkontak });
      
      if (newsletterInfo.id) {
        conn.sendMessage(m.chat, { text: newsletterInfo.id }, { quoted: m });
      }
    }
  } catch (e) {
    console.log(e);
  }
};

handler.command = ['id', 'inspeccionarchanel'];
handler.register = true;
export default handler;