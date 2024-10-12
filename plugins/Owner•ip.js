import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
if (!text) return m.reply(`「 ✰ 」INGRESA LA DIRECCION IP A BUSCAR\n\n*• EJEMPLO:*\n> ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

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
 
if (!res.success) throw new Error(`⚠️ La ip ${text} no es válida`);
await Rifky.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch { 
await m.react(error)
m.reply(`✖️ No se encontró resultado de la ip:\n> ${text}`)
}}

handler.help = ['ip <alamat ip>']
handler.tags = ['owner']
handler.command = ['ip']
handler.rowner = true
export default handler