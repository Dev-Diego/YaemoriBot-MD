let WAMessageStubType = (await import('@whiskeysockets/baileys')).default
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0; 
  let chat = global.db.data.chats[m.chat]
  // let img = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')
    let img = './src/img/Menu.jpg'
  if (chat.welcome && m.messageStubType == 27) {
   let textowel = `Welcome: ${m.pushName || 'Anónimo'}\n${groupMetadata.subject}`
        let wel = `ゲ◜៹ New Member ៹◞ゲ \n\nUsuario : @${m.messageStubParameters[0].split`@`[0]} \n\nGrupo : ${groupMetadata.subject}\n\n${dev}`
    
await conn.sendMini(m.chat, textowel, textbot, wel, img, img, channel, estilo)
  }
  
  if (chat.welcome && m.messageStubType == 28) {
    let textobye = `Bye: ${m.pushName || 'Anónimo'}\n${groupMetadata.subject}`
       let bye = `ゲ◜៹ Bye Member ៹◞ゲ \n\nUsuario: @${m.messageStubParameters[0].split`@`[0]}\n\nGrupo: ${groupMetadata.subject}\n\n${dev}`
await conn.sendMini(m.chat, textobye, textbot, bye, img, img, channel, estilo)
  }
  
  if (chat.welcome && m.messageStubType == 32) {
    let textoputo = `Fuera Put@: ${m.pushName || 'Anónimo'}\n${groupMetadata.subject}`
       let kick = `ゲ◜៹ Bye Member ៹◞ゲ \n\nUsuario: @${m.messageStubParameters[0].split`@`[0]}\n\nGrupo: ${groupMetadata.subject}\n\n${dev}`
await conn.sendMini(m.chat, textoputo, textbot, kick, img, img, channel, estilo)
}}

/*let WAMessageStubType = (await import('@whiskeysockets/baileys')).default;
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  let vn = 'https://qu.ax/cGluV.mp3';
  let vn2 = 'https://qu.ax/cTDa.mp3';
  let chat = global.db.data.chats[m.chat];
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };

  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

 if (chat.welcome && m.messageStubType === 27) {
    this.sendMessage(m.chat, { audio: { url: vn }, 
    contextInfo: { forwardedNewsletterMessageInfo: { 
    newsletterJid: channelRD.id, 
    serverMessageId: '', 
    newsletterName: channelRD.name }, forwardingScore: 9999999, isForwarded: true, mentionedJid: getMentionedJid(), "externalAdReply": { 
    "title": `  ͟͞ Ｗ Ｅ Ｌ Ｃ Ｏ Ｍ Ｅ ͟͞  `, 
    "body": `${userName}`, 
    "previewType": "PHOTO", 
    "thumbnailUrl": null,
    "thumbnail": icons, 
    "sourceUrl": redes, 
    "showAdAttribution": true}}, 
     seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

  if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
    this.sendMessage(m.chat, { audio: { url: vn2 }, 
    contextInfo: { forwardedNewsletterMessageInfo: { 
    newsletterJid: channelRD.id, 
    serverMessageId: '', 
    newsletterName: channelRD.name }, forwardingScore: 9999999, isForwarded: true, mentionedJid: getMentionedJid(), "externalAdReply": { 
    "title": `  ͟͞ Ａ Ｄ Ｉ Ｏ Ｓ ͟͞  `, 
    "body": `${userName}, se despide.`, 
    "previewType": "PHOTO", 
    "thumbnailUrl": null,
    "thumbnail": icons, 
    "sourceUrl": redes, 
    "showAdAttribution": true}}, 
     seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
  }
}*/