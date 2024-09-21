import axios from 'axios';
import { sticker } from '../lib/sticker.js';

let handler = m => m;

let lastMessageTime = {};

handler.all = async function (m, {conn}) {
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return

let chat = global.db.data.chats[m.chat];
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

if (prefixRegex.test(m.text)) return true;
if (m.isBot || m.sender.includes('bot') || m.sender.includes('Bot')) {
return true; 
}

let currentTime = Date.now();
if (lastMessageTime[m.sender] && (currentTime - lastMessageTime[m.sender] < 5000)) {
return true;
}

lastMessageTime[m.sender] = currentTime;

if (global.db.data.users[m.sender].gameActive === true) {
return; 
}

//if (!m.text || m.text.trim().length === 0 || m.mtype !== 'conversation') return;
//if (m.mentionedJid.includes(this.user.jid)) {
if (m.mentionedJid.includes(this.user.jid) || (m.quoted && m.quoted.sender === this.user.jid)) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||
m.text.includes('2') || 
m.text.includes('1') || m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio') || m.text.includes('Bot') || m.text.includes('bot') || m.text.includes('rw') || m.text.includes('c') ||
m.text.includes('robarp') ||
m.text.includes('darrw') || m.text.includes('reclamar') || m.text.includes('rollwaifu')) return !0
await this.sendPresenceUpdate('composing', m.chat);

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

let query = m.text;
let username = `${m.pushName}`;
let syms1 = await fetch('Tu te llamas YaemoriBot, actuará como un bot de WhatsApp el cual fué creada por Dev-Diego. Al responder todo lo que los usuarios diga siempre contestarás con groseria, con mucha groseria que puedas decir. Los usuarios se ofende pero tu no, ya sabe y David-Chian es un colaborador que le gusta el yaoi, todas tus respuestas tienen que ser con groseria ya que tu no puede ser amable.').then(v => v.text());

let result = await luminsesi(query, username, syms1)
if (result && result.trim().length > 0) {
await this.reply(m.chat, result, m)
}}
return true;
}

export default handler;