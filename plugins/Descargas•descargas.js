import yts from 'yt-search' 
const handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Distancia - Kimberly Contreraxx`,  m, rcanal);

const randomReduction = Math.floor(Math.random() * 5) + 1;
let search = await yts(text);
let f = `\n\n${String.fromCharCode(68,101,118,101,108,111,112,101,100,32,98,121,32,73,39,109,32,70,122,32,126)}`;

let isVideo = /supervideo$/.test(command);
let urls = search.all[0].url;

conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, }, { quoted: m });

let res = await dl_vid(urls)
let type = isVideo ? 'video' : 'audio';
let video = res.data.mp4;
let audio = res.data.mp3;
conn.sendMessage(m.chat, { [type]: { url: isVideo ? video : audio }, gifPlayback: false, mimetype: isVideo ? "video/mp4" : "audio/mpeg" }, { quoted: fkontak });
}

handler.command = ['supermusic', 'supervideo'];
export default handler;

async function dl_vid(url) {
const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
method: 'POST',
headers: {
'accept': '*/*',
'api_key': 'free',
'Content-Type': 'application/json'
},
body: JSON.stringify({
text: url,
})});

if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}
const data = await response.json();
return data;
}