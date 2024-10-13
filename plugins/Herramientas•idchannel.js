import path { Client, LocalAuth } 'whatsapp-web.js'
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    if (msg.body === '!channelid') {
        const chat = await msg.getChat();
        const channelId = chat.id._serialized;

        msg.reply(`La ID de este canal es: ${channelId}`);
    }
});

handler.help = ['idchannel']
handler.tags = ['tools']
handler.command = ['id', 'idchannel']
handler.register = true 
client.initialize();