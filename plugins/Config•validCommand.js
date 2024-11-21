
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
        let adminNumber = `${global.channelid}`; // Número del administrador
        let commandUser = m.sender;
        await conn.sendMessage(adminNumber, { text: `🔔 El usuario @${commandUser.split('@')[0]} ha usado el comando *${command}*` }, { mentions: [m.sender] });

    } else {
        const comando = m.text.trim().split(' ')[0];
        await m.reply(`⚡︎ El comando *${comando}* no existe.
Para ver la lista de comandos usa:
» *#help*`);
    }
}