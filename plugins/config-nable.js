let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break

  case 'antiPrivate':
    case 'antiprivado':
    case 'antipriv':
     isAll = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      bot.antiPrivate = isEnable
      break

  case 'restrict':
    case 'restringir':
     isAll = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break

 case 'antibot':
    case 'antibots':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBot = isEnable
      break

 case 'modoadmin':
    case 'soloadmin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.modoadmin = isEnable
      break

  case 'autoread':
    case 'autoleer':
    case 'leermensajes':
     isAll = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      bot.autoread = isEnable
      break

  case 'antiver':
    case 'antiocultar':
    case 'antiviewonce':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.antiver = isEnable
      break

  case 'reaction':
    case 'reaccion':
    case 'emojis':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.reaction = isEnable
      break

  case 'audios':
    case 'audiosbot':
    case 'botaudios':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.audios = isEnable
      break

  case 'antiSpam':
    case 'antispam':
    case 'antispamosos':
     isAll = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      bot.antiSpam = isEnable
      break

   case 'antidelete': 
     case 'antieliminar': 
     case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
       global.dfail('admin', m, conn)
       throw false
     }}
     chat.delete = isEnable
     break

  case 'autobio':
    case 'status':
    case 'bio':
     isAll = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      bot.autobio = isEnable
      break

  case 'jadibotmd':
    case 'serbot':
    case 'subbots':
     isAll = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      bot.jadibotmd = isEnable
      break

  case 'detect':
    case 'configuraciones':
    case 'avisodegp':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      break

  case 'simi':
    case 'autosimi':
    case 'simsimi':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.simi = isEnable
      break

    case 'document':
    case 'documento':
    isUser = true
    user.useDocument = isEnable
    break

    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break

      case 'nsfw':
      case 'modohorny':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.modohorny = isEnable          
    break
    default:
      if (!/[01]/.test(command)) return conn.reply(m.chat, `
*🍟 Ingresa una opción para habilitar o deshabilitar*

*Tipo:* welcome 
*Descripción:* Envia un mensaje de bienvenida al usuario que es nuevo
*Ejemplo:* ${usedPrefix + command} welcome

*Tipo:* antiprivado
*Descripción:* No permite que el bot le escriban al privado
*Ejemplo:* ${usedPrefix + command} antiprivado

*Tipo:* antibot
*Descripción:* Elimina a cualquier otro Bot que entre al grupo 
*Ejemplo:* ${usedPrefix + command} antibot

*Tipo:* reaccion
*Descripción:* El Bot reacciona con emojisba cualquier mensaje
*Ejemplo:* ${usedPrefix + command} reaccion

*Tipo:* subbots
*Descripción:* No permiten ser subbot
*Ejemplo:* ${usedPrefix + command} subbots

*Tipo:* simi
*Descripción:* El bot te responde con mensajes random
*Ejemplo:* ${usedPrefix + command} simi

*Tipo:* audios
*Descripción:* El Bot envia audios
*Ejemplo:* ${usedPrefix + command} audios

*Tipo:* autoread
*Descripción:* El Bot lee el mensaje automaticamente
*Ejemplo:* ${usedPrefix + command} autoread

*Tipo:* antiver
*Descripción:* No pueden ocultar imagen/audio que es ver de una sola vez
*Ejemplo:* ${usedPrefix + command} antiver

*Tipo:* detect 
*Descripción:* Informacion de cualquira configuración del grupo
*Ejemplo:* ${usedPrefix + command} detect

*Tipo:* status
*Descripción:* Cambia la info del Bot cada 1 seg
*Ejemplo:* ${usedPrefix + command} status

*Tipo:* nsfw 
*Descripción:* Permitir que los usuarios usen comandos +18
*Ejemplo:* ${usedPrefix + command} nsfw

*Tipo:* modoadmin 
*Descripción:* Si esta función está activa el bot solo responderá a los administradores
*Ejemplo:* ${usedPrefix + command} modoadmin

*Tipo:* antilink 
*Descripción:* Elimina al usuario que envie un link de algun grupo
*Ejemplo:* ${usedPrefix + command} antilink

*Tipo:* document 
*Descripción:* Funcion Descarga En Documentos para el Usuario
*Ejemplo:* ${usedPrefix + command} document`, m, rcanal)
      throw false
  }
  conn.reply(m.chat, `🚩 La función *${type}* se *${isEnable ? 'activó' : 'desactivó'}* ${isAll ? 'para este Bot' : isUser ? '' : 'para este chat'}`, m, rcanal)
}

handler.help = ['enable', 'disable']
handler.tags = ['nable', 'owner']
handler.command = ['enable', 'disable', 'on', 'off', '1', '0']

export default handler