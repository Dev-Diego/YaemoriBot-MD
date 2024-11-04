let handler = async (m, { conn, args }) => {
    if (!args[0]) return conn.reply(m.chat, '🚩 Por favor, ingresa el texto que deseas encriptar.', m);

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

    const encryptedMessage = encryptText(text);

    conn.reply(m.chat, `🔐 Texto encriptado: ${encryptedMessage}`, m);
};

handler.help = ["encrypt <texto>"];
handler.tags = ['tools'];
handler.command = /^(encrypt|encriptar)$/i;

export default handler;