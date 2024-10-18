import './settings.js'
import { default: makeWASocket,  generateWAMessage,  downloadContentFromMessage,  emitGroupParticipantsUpdate,  emitGroupUpdate,  makeInMemoryStore,  prepareWAMessageMedia, MediaType,  WAMessageStatus, AuthenticationState, GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions,  useMultiFileAuthState, BufferJSON,  WAMessageProto,  MessageOptions,         WAFlag,  WANode,         WAMetric,         ChatModification,  MessageTypeProto,  WALocationMessage, ReconnectMode,  WAContextInfo,  proto,         WAGroupMetadata,  ProxyAgent,         waChatKey,  MimetypeMap,  MediaPathMap,  WAContactMessage,  WAContactsArrayMessage,  WAGroupInviteMessage,  WATextMessage,  WAMessageContent,  WAMessage,  BaileysError,  WA_MESSAGE_STATUS_TYPE,  MediaConnInfo,   generateWAMessageContent, URL_REGEX,  Contact, WAUrlInfo,  WA_DEFAULT_EPHEMERAL,  WAMediaUpload,  mentionedJid,  processTime,         Browser,  MessageType,  Presence,  WA_MESSAGE_STUB_TYPES,  Mimetype,  relayWAMessage,         Browsers,  GroupSettingChange,  delay,  DisconnectReason,  WASocket,  getStream,  WAProto,  isBaileys,  AnyMessageContent,  generateWAMessageFromContent, fetchLatestBaileysVersion,  processMessage,  processingMutex,  jidDecode,  areJidsSameUser } from '@whiskeysockets/baileys
let pino = require('pino')
import fs from 'fs'
import axios from 'axios'
import { exec, spawn, execSync } from 'child_process'
import speed from 'performance-now'
import chalk from 'chalk'
import cfonts from 'cfonts'
import os from 'os'
cimport yargs from 'yargs/yargs'
import _ from 'lodash'
import moment from 'moment'
import gradient from 'gradient-string'
import readline from 'readline'
import { tmpdir } from 'os'
import { join } from 'path'
import PhoneNumber from 'awesome-phonenumber'
import { readdirSync, statSync, unlinkSync } from 'fs'
import { say } from cfonts
const color = (text, color) => {
return !color ? chalk.green(text) : color.startsWith('#') ? chalk.hex(color)(text) : chalk.keyword(color)(text)
}

const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout })
return new Promise((resolve) => {
rl.question(text, resolve)
})}
const usePairingCode = true
const girastamp = speed()
const latensi = speed() - girastamp
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function connectToWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState(global.session)
const { version, isLatest } = await fetchLatestBaileysVersion()

const colores = chalk.bold.white
const opcionQR = chalk.blueBright
const opcionTexto = chalk.cyan
const marco = chalk.yellow
const nameb = chalk.blue.bgBlue.bold.cyan
const methodCodeQR = process.argv.includes('qr')
const MethodMobile = process.argv.includes('mobile')

say('Yaemori Bot', {
align: 'center',
colors: false,
background: 'transparent',
letterSpacing: 1,
lineHeight: 1,
space: true,
maxLength: '0',
gradient: ['blue', 'red'],
independentGradient: false,
transitionGradient: false,
rawMode: true,
env: 'node'
})

let opcion
if (!fs.existsSync(`./${session}/creds.json`) && !methodCodeQR) {
while (true) {
opcion = await question(marco('*************************\n') + nameb('YaemoriBot-MD\n') + marco('*************************\n') + colores('Seleccione una opción:\n') + opcionQR('1. Con código QR\n') + opcionTexto('2. Con código de emparejamiento\n'))
if (opcion === '1' || opcion === '2') {
break
} else {
console.log(chalk.redBright('Por favor, seleccione solo 1 o 2.'))
}}
opcion = opcion
}
console.info = () => {}
const client = makeWASocket({
version,
logger: pino({ level: 'silent'}),
printQRInTerminal: opcion == '1' ? true : false,
qrTimeout: 180000,
browser: ['Ubuntu', 'Edge', '20.0.04'],
auth: state
})
if (opcion === '2') {
if (usePairingCode && !client.authState.creds.registered) {
const phoneNumber = await question(chalk.blueBright('Ingrese su número de WhatsApp todo junto\n') + chalk.greenBright('Ejemplo: 573218138672\n'))
const code = await client.requestPairingCode(phoneNumber.trim())
console.log(chalk.bold.cyanBright(`Codigo de emparejamiento:`), chalk.bold.white(`${code}`))
}}

client.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
client.ev.on('chats.set', () => {
console.log('Estableciendo conversaciones...')
})
client.ev.on('contacts.set', () => {
console.log('Estableciendo contactos...')
})
client.ev.on('creds.update', saveCreds)
client.ev.on('messages.upsert', async ({ messages }) => {
try {
m = messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return
if (!client.public && !m.key.fromMe && messages.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = smsg(client, m)
require('./curiosity')(client, m, messages)
} catch (err) {
console.log(err)
}
})

var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile('database.json')
)
global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
...(global.db.data || {})}
global.db.chain = _.chain(global.db.data)}
loadDatabase()
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
}, 1 * 1000)

function clearTmp() {
const tmp = [tmpdir(), join(__dirname, './tmp')]
const filename = []
tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))))
return filename.map((file) => {
const stats = statSync(file)
if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) {
return unlinkSync(file)
}
return false
})}

if (!opts['test']) { 
if (global.db) { 
setInterval(async () => { 
if (global.db.data) await global.db.write() 
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp'], tmp.forEach((filename) => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
}, 30 * 1000)
}}
setInterval(async () => {
await clearTmp()
console.log(chalk.blueBright(`\nBasura eliminada\n`))}, 180000)

const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=:\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

client.sendText = (jid, text, quoted = '', options) => client.sendMessage(jid, { text: text, ...options }, { quoted })
client.sendContactArray = (jid, data, quoted, options) => client.sendMessage(jid, { contacts: { displayName: (Array.isArray(data[0]) ? data[0][1] : data.length > 1 ? '2013 kontak' : data[0].displayName) || null, contacts: (Array.isArray(data[0]) ? data : [data]).map(([number, name, isi, isi1, isi2, isi3, isi4, isi5]) => ({ vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${name.replace(/\n/g, '\\n')}\nitem.ORG:${isi}\nitem1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}\nitem1.X-ABLabel:${isi1}\nitem2.EMAIL;type=INTERNET:${isi2}\nitem2.X-ABLabel:📧 Email\nitem3.ADR:;;${isi3};;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:📍 Region\nitem4.URL:${isi4}\nitem4.X-ABLabel:Website\nitem5.X-ABLabel:${isi5}\nEND:VCARD`.trim(), displayName: name })) }}, { quoted, ...options })

client.ev.on('connection.update', (update) => {
const { connection, lastDisconnect, receivedPendingNotifications, isNewLogin} = update
console.log(receivedPendingNotifications)

if (connection == 'connecting') {
console.log('🚀 Iniciando...')
}
if (lastDisconnect === undefined) {
}

if(connection === 'close') {
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  
console.log(`Reconectando...`)
connectToWhatsApp()
}

if (update.isNewLogin) {
console.log(chalk.yellow(`Primer inicio de sesión exitoso`))
}

if (connection == 'open') {
console.log(color('Fecha', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`\n☁️ Conectado correctamente al WhatsApp.\n`, '#7fff00')
)
console.log(receivedPendingNotifications)
}
})

client.public = true
store.bind(client.ev)
client.ev.on('creds.update', saveCreds)
process.on('uncaughtException', console.log)
process.on('unhandledRejection', console.log)
process.on('RefenceError', console.log)
}

connectToWhatsApp()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})