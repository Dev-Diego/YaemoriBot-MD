import axios from 'axios'

let handler = async (m, { conn, text }) => {
//await m.reply('🧑🏻‍💻 Buscando...')
let bot = '🧑🏻‍💻 Buscando....'
conn.reply(m.chat, bot, m, rcanal, )
  if (!text) return conn.reply(m.chat, '🚩 *Te Faltó La <Ip>*', m, rcanal, )

  axios.get(`https://ipwho.is/${text}`).then ((res) => {
    const data = res.data

      if (String(data.status) !== "success") {
        throw new Error(data.message || "Falló")
      }
    let ipsearch = `
> ✰ *IP INFORMACION*
• IP: ${data.ip || 'N/A'}
• EXITO: ${data.success || 'N/A'}
• TIPO: ${data.type || 'N/A'}
• CONTINENTE: ${data.continent || 'N/A'}
• CODIGO DEL CONTIENE: ${data.continent_code || 'N/A'}
• PAIS: ${data.country || 'N/A'}
• CODIGO DEL PAIS: ${data.country_code || 'N/A'}
• REGION: ${data.region || 'N/A'}
• CODIGO DE REGION: ${data.region_code || 'N/A'}
• CIUDAD: ${data.city || 'N/A'}
• LATITUD: ${data.latitude || 'N/A'}
• LONGITUD: ${data.longitude || 'N/A'}
• ES EU: ${data.is_eu ? 'Yes' : 'No'}
• POSTAL: ${data.postal || 'N/A'}
• CODIGO DE TELEFONO: ${info.calling_code || 'N/A'}
• CAPITAL: ${data.capital || 'N/A'}
• BORDES: ${data.borders || 'N/A'}
• BANDERA:
 - IMAGEN: ${data.flag?.img || 'N/A'}
 - EMOJI: ${data.flag?.emoji || 'N/A'}
 - EMOJI UNICODE: ${data.flag?.emoji_unicode || 'N/A'}
• CONEXION:
 - ASN: ${data.connection?.asn || 'N/A'}
 - ORGANIZACION: ${data.connection?.org || 'N/A'}
 - ISP: ${data.connection?.isp || 'N/A'}
 - DOMINIO: ${data.connection?.domain || 'N/A'}
• HORARIO:
 - ID: ${data.timezone?.id || 'N/A'}
 - ABREVIACION: ${data.timezone?.abbr || 'N/A'}
 - ES DST: ${data.timezone?.is_dst ? 'Yes' : 'No'}
 - SET APAGADO: ${data.timezone?.offset || 'N/A'}
 - UTC: ${data.timezone?.utc || 'N/A'}
 - TIEMPO: ${data.timezone?.current_time || 'N/A'}
`.trim()

conn.reply(m.chat, ipsearch, m, rcanal, )
})
}

handler.help = ['ip <alamat ip>']
handler.tags = ['owner']
handler.command = ['ip']
handler.rowner = true
export default handler
