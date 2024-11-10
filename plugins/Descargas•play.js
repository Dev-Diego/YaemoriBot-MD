// @Kenisawa

import axios from 'axios';
import yts from 'yt-search';
import _ from 'lodash';

let handler = async (m, { conn, text, usedPrefix, command }) => {

const isCommand1 = /^(play|mp3)$/i.test(command)  
const isCommand2 = /^(play2|mp4)$/i.test(command)  

async function reportError(e) {
await m.reply(`🌻 Ocurrió un error.`)
console.log(e)
}

switch (true) {       
case isCommand1:
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, ${usedPrefix + command} Distancia - Kimberly Contreraxx`, m, rcanal)
  
    let results = await yts(text);
    let tes = results.all[0]
    
const baseUrl = 'https://cuka.rfivecode.com';
const cukaDownloader = {
  youtube: async (url, exct) => {
    const format = [ 'mp3', 'mp4' ];
    try {
      await m.react(rwait)
      conn.reply(m.chat, '🚀 Enviando el audio....', m, {
      contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
      title: packname,
      body: dev,
      previewType: 0, thumbnail: icons,
     sourceUrl: channel }}})
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
      await m.react(rwait)
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
      await m.react(rwait)
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
let { title, thumbnail, quality, downloadUrl } = dataos

await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
await m.react(done)
break

case isCommand2:
const text = _.get(args, "length") ? args.join(" ") : _.get(m, "quoted.text") || _.get(m, "quoted.caption") || _.get(m, "quoted.description") || ""
  if (typeof text !== 'string' || !text.trim()) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, ${usedPrefix + command} Distancia - Kimberly Contreraxx`, m, rcanal)

  try {
  await m.react(rwait)
  conn.reply(m.chat, '🚀 Enviando su video...', m, {
  contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
  title: packname,
  body: dev,
  previewType: 0, thumbnail: icons,
  sourceUrl: channel }}})

  const vid = await ytsearch(text)
  if (!vid?.url) return m.reply("Video no encontrado, intenta usando otra consulta.")

  const { title = "No encontrado", thumbnail, timestamp = "No encontrado", views = "No encontrado", ago = "No encontrado", url } = vid

  const ytthumb = (await conn.getFile(thumbnail))?.data

  const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${url}`)
  const audioData = await res.json()
  
await conn.sendMessage(m.chat, { video: { url: audioData.result.downloadUrl }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
  } else {
    await m.reply("🚩 Ocurrio un error.")
break
}}}

handler.help = ['play', 'play2'];
handler.tags = ['descargas'];
handler.command = ['play', 'play2'];
handler.register = true;

export default handler;

async function ytsearch(query, maxResults = 5, similarityThreshold = .5) {
  const res = await yts(query)
  const videos = _.filter(res.videos.slice(0, maxResults), video => {
    const titleWords = _.words(_.toLower(video.title))
    const queryWords = _.words(_.toLower(query))
    const matchedWords = _.intersection(titleWords, queryWords)
    const similarity = _.size(matchedWords) / _.size(titleWords)
    return similarity >= similarityThreshold || _.size(matchedWords) >= _.size(queryWords) - 1
  })
  return _.isEmpty(videos) ? {} : _.first(videos)
}