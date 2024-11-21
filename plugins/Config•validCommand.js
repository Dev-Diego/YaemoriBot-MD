export async function before(m) {
    if (!m.text || !global.prefix.test(m.text)) {
        return;
    }

    const usedPrefix = global.prefix.exec(m.text)[0];
    const command = m.text.slice(usedPrefix.length).trim().split(' ')[0].toLowerCase();

    const validCommand = (command, plugins) => {
        for (let plugin of Object.values(plugins)) {
            if (plugin.command && (Array.isArray(plugin.command) ? plugin.command : [plugin.command]).includes(command)) {
                return true;
            }
        }
        return false;
    };

    if (validCommand(command, global.plugins)) {
        let chat = global.db.data.chats[m.chat];
        let user = global.db.data.users[m.sender];

        if (chat.isBanned) return;
        if (!user.commands) {
            user.commands = 0;
        }
        user.commands += 1;

        // Notificación del uso del comando
        let commandUser = m.sender;
       let chtxt = `
🥳 Un usuario ha ejecutado un comando.

👤 *User* » ${nombre}
☁️ *Comando ejecutado* » ${command}
       `.trim()
       await conn.sendMessage(global.channelid, { text: chtxt, contextInfo: {
       externalAdReply: {
       title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
       body: '🥳 ¡Un nuevo comando ejecutado!',
       thumbnailUrl: global.fotoperfil,
       sourceUrl: redes,
       mediaType: 1,
       showAdAttribution: false,
       renderLargerThumbnail: false
       }}}, { quoted: null })

    } else {
        const comando = m.text.trim().split(' ')[0];
        await m.reply(`⚡︎ El comando *${comando}* no existe.
Para ver la lista de comandos usa:
» *#help*`);
    }
}