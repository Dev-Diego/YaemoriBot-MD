
import axios from 'axios'

module.exports = {
    command: ['ip'],
    description: 'Busca y muestra información sobre una dirección IP',
    execute: async (msg, client) => {
        const ip = msg.body.split(' ')[1];

        if (!ip) {
            msg.reply('Por favor, proporciona una dirección IP.');
            return;
        }

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
};
```

Luego, en tu archivo principal del bot, por ejemplo `index.js`, importa y usa el plugin:

```javascript
const { Client, LocalAuth } = require('whatsapp-web.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

const loadPlugins = (client) => {
    const pluginsDir = path.join(__dirname, 'plugins');
    fs.readdirSync(pluginsDir).forEach(file => {
        if (file.endsWith('.js')) {
            const plugin = require(path.join(pluginsDir, file));
            client.on('message', msg => {
                if (plugin.command.some(cmd => msg.body.startsWith(`!${cmd}`))) {
                    plugin.execute(msg, client);
                }
            });
        }
    });
};

loadPlugins(client);

client.initialize();
