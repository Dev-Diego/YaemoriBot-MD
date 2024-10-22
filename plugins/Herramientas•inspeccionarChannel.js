import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  let newsletterInfo;
  
  if (!channelUrl) {
        conn.reply(m.chat, 'Por favor, proporciona un enlace de canal de WhatsApp.', m, rcanal);
        return;
      }

      try {
        const channelId = getChannelIdFromUrl(channelUrl);
        if (!channelId) {
          conn.reply(m.chat, 'El enlace proporcionado no es válido.', m, rcanal);
          return;
        }

        const channelInfo = await client.getChannelInfo(channelId);
        if (!channelInfo) {
          conn.reply(m.chat, 'No se pudo obtener la información del canal.', m, rcanal);
          return;
        }

        const channelDetails = `
          *Inspector de Canales*
          \n*Nombre del Canal:* ${channelInfo.name}
          \n*Descripción:* ${channelInfo.description}
          \n*Número de suscriptores:* ${channelInfo.subscriberCount}
          \n*Fecha de creación:* ${formatDate(channelInfo.creationTime)}
        `;
        conn.reply(m.chat, channelDetails, m, rcanal);
      } catch (error) {
        conn.reply(m.chat, 'Hubo un error al intentar obtener la información del canal.', m, rcanal);
    console.log(e);
  }
};

handler.command = ['id', 'inspeccionarchanel'];
handler.register = true;
export default handler;

function getChannelIdFromUrl(url) {
  const match = url.match(/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:channel\/|joinchat\/)?([0-9A-Za-z]{22,24})/i);
  return match ? match[1] : null;
}