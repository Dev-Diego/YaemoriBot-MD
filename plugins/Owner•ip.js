import axios from 'axios'

let handler = async (m, { conn, text }) => {
//await m.reply('🧑🏻‍💻 Buscando...')
let bot = '🧑🏻‍💻 Buscando....'
conn.reply(m.chat, bot, m, rcanal, )
  if (!text) return conn.reply(m.chat, '🚩 *Te Faltó La <Ip>*', m, rcanal, )

              const response = await axios.get(`http://ip-api.com/json/${ip}`);
            const data = response.data;

      if (String(data.status) !== "success") {
        throw new Error(data.message || "Falló")
      }
    let ipsearch = `
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
`.trim()

conn.reply(m.chat, ipsearch, m, rcanal, )
})
}

handler.help = ['ip <alamat ip>']
handler.tags = ['owner']
handler.command = ['ip']
handler.rowner = true
export default handler