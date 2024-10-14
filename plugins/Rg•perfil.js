import { canLevelUp, xpRange } from '../lib/levelling.js'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let bio = await conn.fetchStatus(who).catch(_ => 'undefined')
  let biot = bio.status?.toString() || 'Sin Info'
  let user = global.db.data.users[who]
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => icono)
  let { exp, cookies, name, registered, regTime, age, level } = global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let prem = global.prems.includes(who.split`@`[0])
  let sn = createHash('md5').update(who).digest('hex')
  let api = await axios.get(`https://deliriussapi-oficial.vercel.app/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
  let userNationalityData = api.data.result
  let userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido'
  let img = await (await fetch(`${pp}`)).buffer()
let txt = `*👤 PERFIL USER*\n\n`
txt += `⭐️ *Nombre* :: *${name}*\n`
txt += `🪴 *Edad* :: *${registered ? `${age} años` : '×'}*\n`
txt += `🍟 *Numero* :: *${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}*\n`
txt += `✨ *Pais* :: *${userNationality}*\n`
txt += `☁️ *Link* :: *wa.me/${who.split`@`[0]}*\n`
txt += `🍟 *Galletas* :: *${cookies}*\n`
txt += `🍁 *Nivel* :: *${level}*\n`
txt += `🌸 *XP* :: Total ${exp}\n`
txt += `🍄 *Registrado* :: *${registered ? 'Si': 'No'}*\n`
txt += `💐 *Premium* :: *${prem ? 'Si' : 'No'}*\n`

  let mentionedJid = [who]
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
}
handler.help = ['perfil']
handler.tags = ['rg']
handler.command = ['perfil', 'profile']
handler.register = false

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function formatDate(n, locale = 'es-US') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function formatHour(n, locale = 'en-US') {
  let d = new Date(n)
  return d.toLocaleString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })
}