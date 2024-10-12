import axios from 'axios';

module.exports = {
    name: 'ipPlugin',
    description: 'Busca y muestra información sobre una dirección IP',
 let handler = async (msg, {( client }) => {
        if (msg.body.startsWith('!ip ')) {
            const ip = msg.body.split(' ')[1];

            try {
                const response = await axios.get(`http://ip-api.com/json/${ip}`);
                const data = response.data;

                if (data.status === 'fail') {
                    msg.reply(`No se encontró información para la IP: ${ip}`);
                } else {
                    const info = `
                    *Información para la IP:* ${ip}
                    - 🌍 País: ${data.country}
                    - 🏙️ Región: ${data.regionName}
                    - 🌆 Ciudad: ${data.city}
                    - 🕹️ Proveedor de Internet: ${data.isp}
                    - 🌐 Organización: ${data.org}
                    - 📡 ASN: ${data.as}
                    - 📍 Latitud: ${data.lat}
                    - 📍 Longitud: ${data.lon}
                    - ⏲️ Zona Horaria: ${data.timezone}
                    - 📅 Código Postal: ${data.zip}
                    - 💻 Dirección IP: ${data.query}
                    `;
                    msg.reply(info);
                }
            } catch (error) {
                msg.reply('Hubo un error al buscar la IP. Inténtalo de nuevo más tarde.');
            }
        }
    }
};
handler.help = ['ip <alamat ip>']
handler.tags = ['owner']
handler.command = ['ip']
handler.rowner = true
export default handler