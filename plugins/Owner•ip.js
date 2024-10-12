import axios from 'axios'

let handler = async (m, { conn, text }) => {
//await m.reply('🧑🏻‍💻 Buscando...')
let bot = '🧑🏻‍💻 Buscando....'
conn.reply(m.chat, bot, m, rcanal, )
  if (!text) return conn.reply(m.chat, '🚩 *Te Faltó La <Ip>*', m, rcanal, )

let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());
  axios.get(`http://ip-api.com/json/${text}?fields=status,message,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,mobile,hosting,query`).then ((res) => {
    const data = res.data

      if (String(data.status) !== "success") {
        throw new Error(data.message || "Falló")
      }
const formatIPInfo = (info) => {
 return `
> ✰ *IP INFORMACION*
• IP: ${info.ip || 'N/A'}
• EXITO: ${info.success || 'N/A'}
• TIPO: ${info.type || 'N/A'}
• CONTINENTE: ${info.continent || 'N/A'}
• CODIGO DEL CONTIENE: ${info.continent_code || 'N/A'}
• PAIS: ${info.country || 'N/A'}
• CODIGO DEL PAIS: ${info.country_code || 'N/A'}
• REGION: ${info.region || 'N/A'}
• CODIGO DE REGION: ${info.region_code || 'N/A'}
• CIUDAD: ${info.city || 'N/A'}
• LATITUD: ${info.latitude || 'N/A'}
• LONGITUD: ${info.longitude || 'N/A'}
• ES EU: ${info.is_eu ? 'Yes' : 'No'}
• POSTAL: ${info.postal || 'N/A'}
• CODIGO DE TELEFONO: ${info.calling_code || 'N/A'}
• CAPITAL: ${info.capital || 'N/A'}
• BORDES: ${info.borders || 'N/A'}
• BANDERA:
 - IMAGEN: ${info.flag?.img || 'N/A'}
 - EMOJI: ${info.flag?.emoji || 'N/A'}
 - EMOJI UNICODE: ${info.flag?.emoji_unicode || 'N/A'}
• CONEXION:
 - ASN: ${info.connection?.asn || 'N/A'}
 - ORGANIZACION: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - DOMINIO: ${info.connection?.domain || 'N/A'}
• HORARIO:
 - ID: ${info.timezone?.id || 'N/A'}
 - ABREVIACION: ${info.timezone?.abbr || 'N/A'}
 - ES DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - SET APAGADO: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - TIEMPO: ${info.timezone?.current_time || 'N/A'}
`;
};

conn.reply(m.chat, formatIPInfo, m, rcanal, )
})
}

handler.help = ['ip <alamat ip>']
handler.tags = ['owner']
handler.command = ['ip']
handler.rowner = true
export default handler
