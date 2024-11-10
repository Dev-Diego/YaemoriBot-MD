/*

- PLUGIN PLAY YOUTUBE 2
- By Kenisawa

*/
import yts from "yt-search"
import _ from "lodash"

let handler = async (m, { conn, command, usedPrefix, args }) => {
  const text = _.get(args, "length") ? args.join(" ") : _.get(m, "quoted.text") || _.get(m, "quoted.caption") || _.get(m, "quoted.description") || ""
  if (typeof text !== 'string' || !text.trim()) return m.reply(`✦ Ingresa una consulta\n*Ejemplo:* .${command} Joji Ew`)

  await m.reply('✦ Espere un momento...')

  const vid = await ytsearch(text)
  if (!vid?.url) return m.reply("Audio no encontrado, intenta usando otra consulta.")

  const { title = "No encontrado", thumbnail, timestamp = "No encontrado", views = "No encontrado", ago = "No encontrado", url } = vid

  const captvid = ` *✦Título:* ${title}\n *✧Duración:* ${timestamp}\n *✧Publicado:* ${ago}\n *✦Link:* ${url}`

  const ytthumb = (await conn.getFile(thumbnail))?.data

  const infoReply = {
    contextInfo: {
      externalAdReply: {
        body: `✧ En unos momentos se entrega su audio`,
        mediaType: 1,
        mediaUrl: url,
        previewType: 0,
        renderLargerThumbnail: true,
        sourceUrl: url,
        thumbnail: ytthumb,
        title: `Y O U T U B E - A U D I O`
      }
    }
  }

  await conn.reply(m.chat, captvid, m, infoReply)
  infoReply.contextInfo.externalAdReply.body = `Audio descargado con éxito`

  const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${url}`)
  const audioData = await res.json()
  
  if (audioData.status && audioData.result?.downloadUrl) {

await conn.sendMessage(m.chat, { video: { url: audioData.result.downloadUrl }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `🚩`, thumbnail: audioData.result.downloadUrl }, { quoted: m })

/*    await conn.sendMessage(m.chat, {
      audio: { url: audioData.result.downloadUrl },
      caption: captvid,
      mimetype: "audio/mpeg",
      contextInfo: infoReply.contextInfo
    }, { quoted: m })*/
  } else {
    await m.reply("Error al descargar el audio.")
  }
}

handler.help = ["play2 <consulta>"]
handler.tags = ["downloader"]
handler.command = ['play2']
handler.limit = true
export default handler

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