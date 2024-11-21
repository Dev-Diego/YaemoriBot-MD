const { makeWASocket, useMultiFileAuthState, MessageType } = await import('@whiskeysockets/baileys');
import pino from 'pino';
inport path from 'path';

const adminNumber = `${global.channelid}`; // Número del administrador

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info');

    const sock = makeWASocket({
        auth: state,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('messages.upsert', async (message) => {
        const msg = message.messages[0];
        if (!msg.message || msg.key.fromMe) return;

        const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
        
        if (text.startsWith('!miComando')) {
            await handleCommand(sock, msg);
        }
    });
}

async function handleCommand(sock, msg) {
    const from = msg.key.remoteJid;
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

    // Acción del comando
    await conn.sendMessage(from, { text: 'Has usado el comando !miComando' }, { quoted: msg });

    // Notificar al administrador
    const notification = `El comando "!miComando" fue utilizado por ${nonbre}.`;
    await conn.sendMessage(adminNumber, { text: notification }, { quoted: msg });

    // Registrar en un archivo
    const logFilePath = path.join(__dirname, 'command_logs.txt');
    await writeFile(logFilePath, notification + '\n', { flag: 'a' });
}

startBot().catch(err => console.log(`Error: ${err}`));