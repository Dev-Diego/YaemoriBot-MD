import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  let newsletterInfo;
  
  if (!channelUrl) {
        client.sendText(message.from, 'Por favor, proporciona un enlace de canal de WhatsApp.');
        return;
      }

      try {
        const channelId = getChannelIdFromUrl(channelUrl);
        if (!channelId) {
          client.sendText(message.from, 'El enlace proporcionado no es válido.');
          return;
        }

        const channelInfo = await client.getChannelInfo(channelId);
        if (!channelInfo) {
          client.sendText(message.from, 'No se pudo obtener la información del canal.');
          return;
        }

        const channelDetails = `
          *Inspector de Canales*
          \n*Nombre del Canal:* ${channelInfo.name}
          \n*Descripción:* ${channelInfo.description}
          \n*Número de suscriptores:* ${channelInfo.subscriberCount}
          \n*Fecha de creación:* ${formatDate(channelInfo.creationTime)}
        `;
        client.sendText(message.from, channelDetails);
      } catch (error) {
        client.sendText(message.from, 'Hubo un error al intentar obtener la información del canal.');
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