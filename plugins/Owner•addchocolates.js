import db from '../lib/database.js'

import MessageType from '@whiskeysockets/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return m.reply('🍄 *Taguea al usuario*')
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) return m.reply('🍄 Ingrese la cantidad de *Chocolates* que quiere añadir')
    if (isNaN(txt)) return m.reply('🍄 *sólo números*')
    let dmt = parseInt(txt)
    let chocolates = dmt
    let pjk = Math.ceil(dmt * impts)
    cookies += pjk
    if (chocolates < 1) return m.reply('🪐 Mínimo es  *1*')
    let users = global.db.data.users
   users[who].chocolates += dmt

    await conn.reply(m.chat, `🍫 *Chocolates Añadido:*
» ${dmt}`, m, rcanal)
   conn.fakeReply(m.chat, `Recibistes ${dmt} Chocolates 🍫`, who, m.text)
}

handler.help = ['addchocolates *<@user>*']
handler.tags = ['owner']
handler.command = ['addchocolates', 'addchocolatinas', 'addchocolate'] 
handler.rowner = true

export default handler
