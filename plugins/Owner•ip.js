
import axios from 'axios';

let handler = async (m, { conn, text }) => {
  const bot = ' Buscando....';
  conn.reply(m.chat, bot, m, rcanal);

  if (!text) return conn.reply(m.chat, ' Te Faltó La IP ', m, rcanal);

  try {
    const response = await axios.get(`https://ipwho.is/${text}`);
    const { data } = response;

    if (data.status !== 'success') {
      throw new Error(data.message || 'Falló');
    }

    const ipInfo = `
      > IP INFORMACION
      • IP: ${data.ip}
      • EXITO: ${data.success}
      • TIPO: ${data.type}
      • CONTINENTE: ${data.continent}
      • CODIGO DEL CONTINENTE: ${data.continent_code}
      • PAIS: ${data.country}
      • CODIGO DEL PAIS: ${data.country_code}
      • REGION: ${data.region}
      • CODIGO DE REGION: ${data.region_code}
      • CIUDAD: ${data.city}
      • LATITUD: ${data.latitude}
      • LONGITUD: ${data.longitude}
      • ES EU: ${data.is_eu ? 'Yes' : 'No'}
      • POSTAL: ${data.postal}
      • CODIGO DE TELEFONO: ${data.calling_code}
      • CAPITAL: ${data.capital}
      • BORDES: ${data.borders}
      • BANDERA: 
        - IMAGEN: ${data.flag?.img}
        - EMOJI: ${data.flag?.emoji}
        - EMOJI UNICODE: ${data.flag?.emoji_unicode}
      • CONEXION: 
        - ASN: ${data.connection?.asn}
        - ORGANIZACION: ${data.connection?.org}
        - ISP: ${data.connection?.isp}
        - DOMINIO: ${data.connection?.domain}
      • HORARIO: 
        - ID: ${data.timezone?.id}
        - ABREVIACION: ${data.timezone?.abbr}
        - ES DST: ${data.timezone?.is_dst ? 'Yes' : 'No'}
        - SET APAGADO: ${data.timezone?.offset}
        - UTC: ${data.timezone?.utc}
        - TIEMPO: ${data.timezone?.current_time}
    `;

    m.reply(m.chat, ipInfo, rcanal, m);
  } catch (error) {
    conn.reply(m.chat, 'Error: ' + error.message, m, rcanal);
  }
};

handler.help = ['ip <alamat ip>'];
handler.tags = ['owner'];
handler.command = ['ip'];
handler.rowner = true;

export default handler;
