// @Kenisawa

import axios from 'axios';
import yts from 'yt-search';

let handler = async (m, { conn, text, usedPrefix, command }) => {

  if (!text) throw m.reply(`Ejemplo de uso: ${usedPrefix + command} Joji Ew`);
  
    let results = await yts(text);
    let tes = results.all[0]
    
const baseUrl = 'https://cuka.rfivecode.com';
const cukaDownloader = {
  youtube: async (url, exct) => {
    const format = [ 'mp3', 'mp4' ];
    try {
      const response = await fetch(`${baseUrl}/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({ url, format: exct })
      });

      const data = await response.json();
      return data;
      console.log('Data:' + data);
    } catch (error) {
      return { success: false, message: error.message };
      console.error('Error:', error);
    }
  },
  tiktok: async (url) => {
    try {
      const response = await fetch(`${baseUrl}/tiktok/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({ url })
      });

      const data = await response.json();
      return data;
      console.log('Data:' + data);
    } catch (error) {
      return { success: false, message: error.message };
      console.error('Error:', error);
    }
  },
  spotify: async (url) => {
    try {
      const response = await fetch(`${baseUrl}/spotify/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({ url })
      });

      const data = await response.json();
      return data;
      console.log('Data:' + data);
    } catch (error) {
      return { success: false, message: error.message };
      console.error('Error:', error);
    }
  }
}

let dataos = await cukaDownloader.youtube(tes.url, "mp3")
console.log(dataos)
let { title, publicado, seconds, author, thumbnail, quality, downloadUrl } = dataos
    let txt = `乂 Y O U T U B E - P L A Y 乂\n`
       txt += `
🚩 *Título:*\n» ${title}\n\n`
       txt += `⏱️ *Duración:*\n» ${seconds)}\n\n`
       txt += `⭐️ *Publicado:*\n» ${publicado)}\n\n`
       txt += `🌸 *Canal:*\n» ${author || 'Desconocido'}\n\n`
       txt += `🔗 *Enlace:*\n» ${tes.url}`

await conn.reply(txt)
      const doc = {
      audio: { url: downloadUrl },
      mimetype: 'audio/mp4',
      fileName: `${title}.mp3`,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: tes.url,
          title: title,
          sourceUrl: tes.url,
          thumbnail: await (await conn.getFile(thumbnail)).data
        }
      }
    };
    await conn.sendMessage(m.chat, doc, { quoted: m });
}
handler.help = ['play'];
handler.tags = ['descargas'];
handler.command = ['play'];
handler.register = true;

export default handler;