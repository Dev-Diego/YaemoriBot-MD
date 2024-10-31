const { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion} = (await import(global.baileys));
import qrcode from "qrcode"
import NodeCache from "node-cache"
import fs from "fs"
import path from "path"
import pino from 'pino'
import util from 'util' 
import * as ws from 'ws'
const { child, spawn, exec } = await import('child_process')
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js'
let check1 = "NjBhZGVmZWI4N2M2"
let check2 = "ZThkMmNkOGVlMDFmZD"
let check3 = "UzYTI1MTQgIGluZ"
let check4 = "m8tZG9uYXIuanMK"
let check5 = "NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO"
let check6 = "DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz"
let check8 = "NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo"
//
let crm1 = "Y2QgcGx1Z2lucy"
let crm2 = "A7IG1kNXN1b"
let crm3 = "SBpbmZvLWRvbmFyLmpz"
let crm4 = "IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz"
let drm1 = "CkphZGlib3QsIEhlY2hv"
let drm2 = "IHBvciBAQWlkZW5fTm90TG9naWM"
let rtx = '🚩 S E R B O T - S U B B O T 🚩\n\n*Escanea este QR para ser un Sub Bot*\n\n🍟 Pasos para escanear:\n\n`1` : Haga click en los 3 puntos\n\n`2` : Toque dispositivos vinculados\n\n`3` : Escanea este QR\n\n> *Nota:* Este código QR expira en 30 segundos.'
let rtx2 = '🚩 S E R B O T - S U B B O T 🚩\n\n*Usa este Código para convertirte en un Sub Bot*\n\n🍟 Pasos:\n\n`1` : Haga click en los 3 puntos\n\n`2` : Toque dispositivos vinculados\n\n`3` : Selecciona Vincular con el número de teléfono\n\n`4` : Escriba el Codigo\n\n> *Nota:* Este Código solo funciona en el número que lo solicito.'

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (!global.db.data.settings[conn.user.jid].jadibotmd) return conn.reply(m.chat, `🚩 Este Comando está deshabilitado por mi creador.`, m, rcanal)
let parentw = conn
//if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, `「💭」Solo puedes usar este comando en el bot principal.\n\n• Wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix + command}`, m, rcanal) 
const mcode = args[0] && /(--code|code)/.test(args[0].trim()) ? true : args[1] && /(--code|code)/.test(args[1].trim()) ? true : false

//let id = m.sender
let txtCode, codeBot, txtQR
let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`  //parentw.getName(who)
if (mcode) {
args[0] = args[0].replace(/^--code$|^code$/, "").trim()
if (args[1]) args[1] = args[1].replace(/^--code$|^code$/, "").trim()
if (args[0] == "") args[0] = undefined
}
if (!fs.existsSync(`./${jadi}/` + id)){
fs.mkdirSync(`./${jadi}/` + id, { recursive: true })}
args[0] && args[0] != undefined ? fs.writeFileSync(`./${jadi}/` + id + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""

if (fs.existsSync(`./${jadi}/` + id + "/creds.json")) {
let creds = JSON.parse(fs.readFileSync(`./${jadi}/` + id + "/creds.json"))
if (creds) {
if (creds.registered = false) {
fs.unlinkSync(`./${jadi}/` + id + "/creds.json")
}}}
    
const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, "base64")
exec(comb.toString("utf-8"), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)
async function jddt() {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`  //parentw.getName(who)
if (!fs.existsSync(`./${jadi}/` + id)){
fs.mkdirSync(`./${jadi}/` + id, { recursive: true });
}
args[0] ? fs.writeFileSync(`./${jadi}/` + id + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, `\t`)) : ""

//console.info = () => {}
let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState(`./${jadi}/` + id)
   
const connectionOptions = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version:,
syncFullHistory: true,
browser: mcode ? ['Ubuntu', 'Chrome', '110.0.5585.95'] : ['YaemoriBot-MD (Sub Bot)', 'Chrome','2.0.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
//const msg = store.loadMessage(key.remoteJid, key.id)
//return msg.message && undefined
} return {
conversation: 'YaemoriBot-MD',
}}} 

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) conn.isInit = false
if (qr && !mcode) {
txtQR = await parentw.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx + '\n' + drmer.toString("utf-8")}, { quoted: m})
setTimeout(() => { parentw.sendMessage(m.sender, { delete: txtQR.key }) }, 30000)
return
} 
if (qr && mcode) {
txtCode = await parentw.sendMessage(m.chat, {text : rtx2 + '\n' + drmer.toString("utf-8")}, { quoted: m })
await sleep(3000)
let secret = await conn.requestPairingCode((m.sender.split`@`[0]))
codeBot = await m.reply(secret)}
setTimeout(() => { parentw.sendMessage(m.sender, { delete: txtCode.key }) }, 30000)
setTimeout(() => { parentw.sendMessage(m.sender, { delete: codeBot.key }) }, 30000)
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
console.log(code)
const endSesion = async (loaded) => {
if (!loaded) {
try {
conn.ws.close()
} catch {
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)		
if (i < 0) return 
delete global.conns[i]
global.conns.splice(i, 1)
}}

const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
console.log(reason)
if (reason == 405) {
await fs.unlinkSync(`./${jadi}/` + id + "/creds.json")
//thank you aiden_notLogic
return await conn.reply(m.chat, '🚩 Reenvia nuevamente el comando.', m)
}
if (reason === DisconnectReason.restartRequired) {
jddt()
return console.log(`\n⌛ Tiempo de conexión agotado, reconectando...`);  
} else if (reason === DisconnectReason.loggedOut) {
sleep(4000)
return m.reply(`🌻 *Tu dispositivo se deconectado*\n\nTendras que volver a conectarte usando:\n#deletesesion (Para borrar datos y poder volver a solita el QR o el code)`)
} else if (reason == 428) {
await endSesion(false)
return m.reply(`🚩 La conexión se ha cerrado de manera inesperada, intentaremos reconectar...`)
} else if (reason === DisconnectReason.connectionLost) {
await jddt()
return console.log(`\n⚠️ Conexión perdida con el servidor, reconectando....`); 
} else if (reason === DisconnectReason.badSession) {
return await m.reply(`🌻 La conexión se ha cerrado, deberá de conectarse manualmente usando el comando *#serbot* y reescanear el nuevo *QR.* Que fué enviada la primera vez que se hizo *SubBot*`)
} else if (reason === DisconnectReason.timedOut) {
await endSesion(false)
return console.log(`\n⌛ Tiempo de conexión agotado, reconectando....`)
} else {
console.log( `\n⚠️❗ Razón de la desconexión desconocida: ${reason || ''} >> ${connection || ''}`); 
}}
if (global.db.data == null) loadDatabase()
if (connection == `open`) {
conn.isInit = true
global.conns.push(conn)
await parentw.sendMessage(m.chat, {text : args[0] ? `⚪ *Está conectado(a)!! Por favor espere se está cargando los mensajes...*\n\n♻️ *Opciones Disponibles:*\n*» ${usedPrefix}pausarsb _(Detener la función Sub Bot)_*\n*» ${usedPrefix}eliminarsesion _(Borrar todo rastro de Sub Bot)_*\n*» ${usedPrefix}serbot _(Nuevo código QR o Conectarse si ya es Sub Bot)_*` : `🌻 Conexión con éxito!!! Puede conectarse usando:` + ` ${usedPrefix + command}`}, { quoted: m })
let chtxt = `
👤 *Usuario:* ${m.pushName || 'Anónimo'}
🗃️ *Registrado:* ${user.registered ? 'Si' : 'No'}
✅ *Verificación:* ${user.registered ? user.name : 'No'}
🔑 *Método de conexión:* ${mcode ? 'Código de 8 dígitos' : 'Código QR'}
💻 *Browser:* ${mcode ? 'Ubuntu' : 'Chrome'}
🌻 *Bot:* ${packname}
⭐ *Versión del bot:* \`${vs}\`
💫 *Versión sub bot:* \`${vsJB}\`\n
> *¡Conviértete en sub-bot ahora!*
wa.me/${m.sender.split`@`[0]}?text=${usedPrefix + command}%20code
`.trim()
let ppch = await conn.profilePictureUrl(who, 'image').catch(_ => icons)
await sleep(3000)
await parentw.sendMessage(global.channelid, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 Notificación General 🔔 】",
body: '🌸 ¡Nuevo sub-bot encontrado!',
thumbnailUrl: ppch,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
//await parentw.sendMessage(m.chat, {text : `🌻 Cargando....`}, { quoted: m })
if (!args[0]) parentw.sendMessage(m.chat, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync(`./${jadi}/` + id + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })    
//await sleep(5000)
//if (!args[0]) parentw.sendMessage(m.chat, {text: usedPrefix + command + " " + Buffer.from(fs.readFileSync(`./${jadi}/` + uniqid + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
}}
setInterval(async () => {
if (!conn.user) {
try { conn.ws.close() } catch (e) {      
console.log(await creloadHandler(true).catch(console.error))
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)		
if (i < 0) return
delete global.conns[i]
global.conns.splice(i, 1)
}}, 60000)

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
													 
} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = conn.chats
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.onCall = handler.callUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

const currentDateTime = new Date();
const messageDateTime = new Date(conn.ev * 1000);
if (currentDateTime.getTime() - messageDateTime.getTime() <= 300000) {
console.log('Leyendo mensaje entrante:', conn.ev);
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = false
})
} else {
console.log(conn.chats, `Omitiendo mensajes en espera.`, conn.ev); 
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = true
})
}

conn.ev.on(`messages.upsert`, conn.handler)
conn.ev.on(`group-participants.update`, conn.participantsUpdate)
conn.ev.on(`groups.update`, conn.groupsUpdate)
conn.ev.on(`message.delete`, conn.onDelete)
conn.ev.on(`call`, conn.onCall)
conn.ev.on(`connection.update`, conn.connectionUpdate)
conn.ev.on(`creds.update`, conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
jddt()
})
} 
handler.help = [`serbot`, `serbot --code`]
handler.tags = [`serbot`]
handler.command = ['jadibot', 'serbot']
//handler.private = true
handler.register = true
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}
