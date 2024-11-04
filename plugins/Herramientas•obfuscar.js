let handler = async (m, { conn, args }) => {
    if (!args[0]) return conn.reply(m.chat, '🔐 Que codigo voy a obfuscar?', m, rcanal);

    const text = args.join(" ");
    const offset = 5; 

    const encryptText = (input) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const encrypted = input.split('').map(char => {
            const index = chars.indexOf(char);
            if (index === -1) return char; 
            return chars[(index + offset) % chars.length];
        }).join('');
        return encrypted;
    };

    const obfuscar = encryptText(text);

    conn.reply(m.chat, `${obfuscar}`, m);
};

handler.help = ['obfuscar *<textl>*'];
handler.tags = ['tools'];
handler.command = ['obfuscar', 'incriptar', 'encriptar'];

export default handler;