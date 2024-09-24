import axios from 'axios';

const handler = async (m, { conn, text }) => {
    if (!text) return m.reply("Please enter a query!");
    
    try {
        m.reply("Please wait while processing!");

        let { data } = await axios({
            method: 'GET',
            url: `https://manaxu-seven.vercel.app/api/tools/apk?query=${encodeURIComponent(text)}`
        });

        const { name, download } = data.result;
        conn.sendMessage(m.chat, {
            document: { url: download },
            mimetype: 'application/vnd.android.package-archive',
            fileName: `${name}.apk`,
            caption: null
        }, { quoted: m });

    } catch (e) {
        return m.reply("Feature error");
    }
};

handler.command = handler.help = ["تطبيق"];
handler.tags = ["tools"];

export default handler;
