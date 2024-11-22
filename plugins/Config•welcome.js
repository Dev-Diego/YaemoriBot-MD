import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://ibb.co/WBYqRDd')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  
  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `ゲ◜៹ New Member ៹◞ゲ \n\nUsuario\n» @${m.messageStubParameters[0].split`@`[0]} \nGrupo\n» ${groupMetadata.subject}\n${dev}`;
    
await conn.sendMini(m.chat, packname, textbot, bienvenida, img, img, channel, estilo)
  }
  
  if (chat.welcome && m.messageStubType == 28) {
    let bye = `ゲ◜៹ Bye Member ៹◞ゲ \n\nUsuario\n» @${m.messageStubParameters[0].split`@`[0]}\nGrupo\n» ${groupMetadata.subject}\n${dev}`;
await conn.sendMini(m.chat, packname, textbot, bye, img, img, channel, estilo)
  }
  
  if (chat.welcome && m.messageStubType == 32) {
    let kick = `ゲ◜៹ Bye Member ៹◞ゲ \n\nUsuario\n» @${m.messageStubParameters[0].split`@`[0]}\nGrupo\n» ${groupMetadata.subject}\n${dev}`;
await conn.sendMini(m.chat, packname, textbot, kick, img, img, channel, estilo)
}}