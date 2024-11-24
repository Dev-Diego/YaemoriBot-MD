import { makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, makeInMemoryStore } from '@whiskeysockets/baileys';
import pino from 'pino';

// Inicializa el socket
async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info');
    const { version } = await fetchLatestBaileysVersion();
    const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
    let perfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')

    const sock = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        auth: state,
        version,
        syncFullHistory: true
    });

    sock.ev.on('creds.update', saveCreds);
    store.bind(sock.ev);

    sock.ev.on('messages.upsert', async (msg) => {
        const message = msg.messages[0];
        if (!message.message || message.key.fromMe) return;

        const text = message.message.conversation || message.message.extendedTextMessage?.text || '';
        const sender = message.key.remoteJid;

        if (text.startsWith(global.prefix)) { // Detectar comandos que comienzan con el prefijo global
            await handleCommand(sock, message, text);
        }
    });

    return sock;
}

// Función para manejar los comandos
async function handleCommand(sock, message, text) {
    const usedPrefix = global.prefix.exec(text)[0];
    const command = text.slice(usedPrefix.length).trim().split(' ')[0].toLowerCase();
    const from = message.key.remoteJid;
    const adminNumber = global.channelid; // Número del administrador

    // Verificar si el comando es válido
    const validCommand = (command, plugins) => {
        for (let plugin of Object.values(plugins)) {
            if (plugin.command && (Array.isArray(plugin.command) ? plugin.command : [plugin.command]).includes(command)) {
                return true;
            }
        }
        return false;
    };

    if (validCommand(command, global.plugins)) {
        let chat = global.db.data.chats[from];
        let user = global.db.data.users[message.key.participant || message.key.remoteJid];
        if (chat.isBanned) return;
        if (!user.commands) {
            user.commands = 0;
        }
        user.commands += 1;

        // Notificación al administrador
        const notification = `🔔 El comando *${command}* fue utilizado por ${global.nombre}`;

await conn.sendMessage(global.channelid, { text: norification, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '🥳 ¡Un usuario ha usado un comando!',
thumbnailUrl: perfil,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
        
    } else {
        const comando = text.trim().split(' ')[0];
        await sock.sendMessage(from, { text: `⚡︎ El comando *${comando}* no existe.\nPara ver la lista de comandos usa:\n» *#help*` }, { quoted: message });
    }
}

connectToWhatsApp().catch(err => console.log('Error:', err));
```

### Explicación del Código:
1. **Inicialización del Socket**: Conecta el bot a WhatsApp utilizando `Baileys`.
2. **Escucha de Mensajes**: Configura el bot para escuchar mensajes entrantes y detectar comandos que comienzan con el prefijo global.
3. **Función `handleCommand`**: Maneja los comandos detectados, verifica si el comando es válido, notifica al administrador y cuenta el uso de comandos por usuario.
4. **Manejo de Errores**: En caso de un comando no válido, el bot envía un mensaje al usuario indicando que el comando no existe.

Este código permite al bot enviar un mensaje cuando un usuario utiliza un comando y también notificar al administrador sobre el uso de comandos. Puedes personalizar los comandos y las acciones según tus necesidades específicas.

Espero que este ejemplo te sea útil. Si necesitas más ajustes o tienes alguna otra sugerencia, ¡estoy aquí para ayudarte! 🌟✨