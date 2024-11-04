let handler = async (m, { conn, args }) => {
    if (!args[0]) return conn.reply(m.chat, '🚩 Por favor, ingresa el texto que deseas desencriptar.', m);

    const encryptedText = args.join(" ");
    const offset = 5; 

    const decryptText = (input) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const decrypted = input.split('').map(char => {
            const index = chars.indexOf(char);
            if (index === -1) return char; 
            return chars[(index - offset + chars.length) % chars.length];
        }).join('');
        return decrypted;
    };

    const deobfuscate = decryptText(encryptedText);

    conn.reply(m.chat, `${deobfuscate}`, m);
};

handler.help = ['deobfuscate <texto>'];
handler.tags = ['tools']:
handler.command = ['deobfuscate', 'desencriptar'];

export default handler;