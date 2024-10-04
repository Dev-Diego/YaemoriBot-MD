import fs from 'fs';
import path from 'path';
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) return conn.reply(m.chat, `🚩 *Etiqueta al usuario.*`, m, fake);

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);

    // Directorio que contiene las imágenes
        let pp = 'https://telegra.ph/file/c6c39935fb9874a0d772b.mp4'
    let pp2 = 'https://telegra.ph/file/0e793eb6fa67ecf7a3959.mp4'
    let pp3 = 'https://telegra.ph/file/c49c45cd25ea91d0e7dbf.mp4'
    let pp4 = 'https://telegra.ph/file/823fce72f08331424bcb9.mp4'
    let pp5 = 'https://telegra.ph/file/3093b34c33a890ae52cf2.mp4'
    let pp6 = 'https://telegra.ph/file/12c9b06c9d1225fd1911d.mp4'
    let pp7 = 'https://telegra.ph/file/39d59dc3a5c244f913d90.mp4'
    let pp8 = 'https://telegra.ph/file/deb560f1931c7d44bd251.mp4'
    let pp9 = 'https://telegra.ph/file/1f75438c94a426752ebb3.mp4'
    let pp10 ='https://telegra.ph/file/be6f91d21879074630f91.mp4'
    let pp11 ='https://telegra.ph/file/40fdc1daf3e42f4d7043d.mp4'
    let pp12 ='https://telegra.ph/file/8c0cf02308bdb6159f65a.mp4'
    let pp13 ='https://telegra.ph/file/eb66f0f53db67d14658f6.mp4'
    let pp14 ='https://telegra.ph/file/56ce0349e90b314e977cf.mp4'
    let pp15 ='https://telegra.ph/file/71e4214c66b6f12605d3b.mp4'
    let pp16 ='https://telegra.ph/file/47e8251363d79d20e4479.mp4'
   let pp17 ='https://telegra.ph/file/b91298b8a528fd2740224.mp4'
    conn.sendMessage(m.chat, { url: [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15, pp16, pp17].getRandom()},);
    let stickerData = await sticker(null, [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15, pp16, pp17].getRandom(), `${name2} violo fuertemente a`, `${name}`);
    conn.sendFile(m.chat, stickerData, null, { asSticker: true }, m);
};

handler.help = ['violar'];
handler.tags = ['fun'];
handler.command = ['violar', 'fuck'];
handler.group = true;

export default handler;
