import fs from 'fs';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let suggestionQueue = {};
const idgroup = "120363351999685409@g.us";

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who = m.mentionedJid && m.mentionedJid.length > 0 ? m.mentionedJid[0] : (m.fromMe ? conn.user.jid : m.sender);
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')

  //  let time = global.db.data.users[m.sender].lastmiming + 600000;
  //  if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return return m.reply(`🍄 Por favor espera ${msToTime(time - new Date())} antes de enviar otra solicitud.`);

    if (!text && !m.quoted) {
        return m.reply(`*🚩 Por favor, escribe tu solicitud.*\n\n> *🍄 Elige una categoría:*\n\na). Sugerencia 💡\nb). Propuesta 📝\nc). Publicidad 📢\nd). Opinión 💬\ne). Pregunta 🚀\nf). Eventos 🎉\ng). Frases ✨\n\n> 🌺 Ejemplo: ${usedPrefix + command} 1 Texto`);
    }

    let [categoryChoice, ...rest] = text.split(' ');
    let suggestionText = rest.join(' ');

    if (!suggestionText) {
        return m.reply(`🍄 Debes agregar un texto después de seleccionar la categoría.\nEjemplo: ${usedPrefix + command} a Mi solicitud es...`);
    }

    let categories = {
        'a': 'sugerencia',
        'b': 'propuesta',
        'c': 'publicidad',
        'd': 'opinión',
        'e': 'pregunta',
        'f': 'eventos',
        'g': 'frases'
    };

    let category = categories[categoryChoice];
    if (!category) {
        return m.reply('🍄 Opción inválida. Elige una categoría correcta: a, b, c o d.');
    }

    m.reply(`🍄 Tu Publicación ha sido enviada a los administradores para su revisión.`);

    let groupMetadata = await conn.groupMetadata(idgroup);
    let groupAdmins = groupMetadata.participants.filter(p => p.admin);

    if (!groupAdmins || groupAdmins.length === 0) {
        return;
    }

    let suggestionId = Math.floor(Math.random() * 901);
    suggestionQueue[suggestionId] = {
        suggestionText, category, sender: m.sender, senderName: m.pushName, pp, suggestionId
    };
    global.db.data.users[m.sender].suggetimme = new Date() * 1;

    let confirmMessage = `🍄 El usuario @${m.sender.split('@')[0]} ha enviado una solicitud!\n\n*${category.charAt(0).toUpperCase() + category.slice(1)}:* ${suggestionText || 'Sin texto'}\n\n_Escriba "si ${suggestionId}" para aceptar_\n_Escriba "no ${suggestionId}" para rechazar._\n\n> *🍁 ID de la publicación:* ${suggestionId}`;

 //  } else {
        await conn.sendMessage(idgroup, { text: confirmMessage, mentions: [m.sender] }, { quoted: m });
  //  }
};

handler.before = async (response) => {
    if (!response.text || !response.text.match(/^(si|no)\s*(\d+)?/i)) return;

    let groupMetadata = await conn.groupMetadata(idgroup);
    let groupAdmins = groupMetadata.participants.filter(p => p.admin);
    const isAdmin = groupAdmins.some(admin => admin.id === response.sender);
    if (!isAdmin) return;

    let matches = response.text.match(/^(si|no)\s*(\d+)?/i);
    let action = matches[1].toLowerCase();
    let suggestionId = matches[2];

    if (!suggestionId || !suggestionQueue[suggestionId]) {
        return;
    }

    const { suggestionText, category, sender, senderName, pp } = suggestionQueue[suggestionId];

    if (action === 'no') {
        await conn.sendMessage(idgroup, { react: { text: "❌", key: response.key } });
        await conn.reply(sender, `😿 Los administradores rechazaron tu solicitud.`, null, { mentions: [sender] });
        delete suggestionQueue[suggestionId];
        return;
    }

if (action === 'si') {
await conn.sendMessage(idgroup, { react: { text: "✅", key: response.key } });
let approvedText = `${suggestionText || '😿 Desconocido'}`;
let title, body;

switch (category) {
case 'sugerencia': 
title = `【 🔔 𝗡𝗨𝗘𝗩𝗔 𝗦𝗨𝗚𝗘𝗥𝗘𝗡𝗖𝗜𝗔 🔔 】`;
body = `🐢 Nueva sugerencia`;
break;
case 'eventos':
title = `【 ⭐️ 𝗡𝗨𝗘𝗩𝗢 𝗘𝗩𝗘𝗡𝗧𝗢 ⭐️ 】`;
body = `🍁 Nueva sugerencia de un evento`;
break;
case 'opinion':
title = `【 😃 𝗡𝗨𝗘𝗩𝗔 𝗢𝗣𝗜𝗡𝗜𝗢𝗡 😃 】`;
body = `🍭 Nueva opinion`;
break;
case 'propuesta':
title = `【 ✨️ 𝗡𝗨𝗘𝗩𝗔 𝗣𝗥𝗢𝗣𝗨𝗘𝗦𝗧𝗔 ✨️ 】`;
body = `🌺 Nueva propuesta`;
break;
case 'frases':
title = `【 ✍️ 𝗙𝗥𝗔𝗦𝗘 𝗖𝗢𝗠𝗣𝗔𝗥𝗧𝗜𝗗𝗔 ✍️ 】`;
body = `🌻 Nueva frase compartida`;
break;
case 'pregunta': 
title = `【 🪐 𝗣𝗥𝗘𝗚𝗨𝗡𝗧𝗔 🪐 】`;
body = `💡 Una pregunta de un usuario`;
break;
case 'publicidad': 
title = `【 🍄 𝗣𝗨𝗕𝗟𝗜𝗖𝗜𝗗𝗔𝗗 🍄 】`;
body = `☁️ Nueva publicidad`;
break;
}

let options = { contextInfo: { externalAdReply: {
title: title, body: body,
thumbnailUrl: pp, 
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}};

// } else {
await conn.sendMessage(channelid, { text: approvedText, contextInfo: options.contextInfo }, { quoted: null });
// }

await conn.reply(sender, `🍄 Solicitud aceptada, canal:\n${channel2}`);
delete suggestionQueue[suggestionId];
}};
handler.command = ['sug', 'sugerencia', 'enviarmensaje', 'solicitud', 'enviarsolicitud'];

export default handler;

function msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours > 0 ? `${hours} horas, ` : '';
    minutes = minutes > 0 ? `${minutes} minutos, ` : '';
    seconds = `${seconds} segundo(s)`;

    return `${hours}${minutes}`;
}