const { useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, MessageRetryMap, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = await import('@whiskeysockets/baileys');
import moment from 'moment-timezone';
import NodeCache from 'node-cache';
import readline from 'readline';
import qrcode from "qrcode";
import crypto from 'crypto';
import fs from "fs";
import pino from 'pino';
import * as ws from 'ws';
const { CONNECTING } = ws;
import { Boom } from '@hapi/boom';
import { makeWASocket } from '../lib/simple.js';
if (!(global.conns instanceof Array)) global.conns = [];
let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner, isROwner }) => {
if (!global.db.data.settings[_conn.user.jid].jadibotmd && !isROwner) {
conn.reply(m.chat, '🚩 Este Comando está deshabilitado por mi creador.', m, rcanal)
return
}
let parent = args[0] && args[0] == 'plz' ? _conn : await global.conn
if (!((args[0] && args[0] == 'plz') || (await global.conn).user.jid == _conn.user.jid)) {
return conn.reply(m.chat, `「💭」Solo puedes usar este comando en el bot principal.\n\n• Wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix + command}`, m, rcanal)
}
async function serbot() {
let authFolderB = crypto.randomBytes(10).toString('hex').slice(0, 8);
if (!fs.existsSync(`./${jadi}/` + authFolderB)) {
fs.mkdirSync(`./${jadi}/` + authFolderB, { recursive: true });
}
if (args[0]) {
fs.writeFileSync(`${jadi}/creds.json`, Buffer.from(args[0], 'base64').toString('utf-8'))
}
const { state, saveState, saveCreds } = await useMultiFileAuthState(`./${jadi}/${authFolderB}`);
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache();
const { version } = await fetchLatestBaileysVersion();
let phoneNumber = m.sender.split('@')[0];
const methodCodeQR = process.argv.includes("qr");
const methodCode = !!phoneNumber || process.argv.includes("code");
const MethodMobile = process.argv.includes("mobile");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver));
const connectionOptions = {logger: pino({ level: 'silent' }),printQRInTerminal: false,mobile: MethodMobile,browser: ['Ubuntu', 'Edge', '110.0.1587.56'], 
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid);
let msg = await store.loadMessage(jid, clave.id);
return msg?.message || "";
},
msgRetryCounterCache,
msgRetryCounterMap,
defaultQueryTimeoutMs: undefined,
version
};
let conn = makeWASocket(connectionOptions);
if (methodCode && !conn.authState.creds.registered) {
if (!phoneNumber) {
process.exit(0);
}
let cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
if (!Object.keys(PHONENUMBER_MCC).some(v => cleanedNumber.startsWith(v))) {
process.exit(0);
}
setTimeout(async () => {
let codeBot = await conn.requestPairingCode(cleanedNumber);
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot;
let txt = '🚩 S E R B O T - S U B B O T 🚩\n\n*Usa este Código para convertirte en un Sub Bot*\n\n🍟 Pasos:\n\n`1` : Haga click en los 3 puntos\n\n`2` : Toque dispositivos vinculados\n\n`3` : Selecciona Vincular con el número de teléfono\n\n`4` : Escriba el Codigo\n\n> *Nota:* Este Código solo funciona en el número que lo solicito.';
await parent.reply(m.chat, txt, m, rcanal);
await parent.reply(m.chat, codeBot, m, rcanal);
rl.close();
}, 3000);
}
conn.isInit = false;
let isInit = true;
async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update;
if (isNewLogin) conn.isInit = true;
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
if (connection === 'close') {
console.log(reason)
if (reason == 405) {
await fs.unlinkSync('./${jadi}/' + id + '/creds.json')

return await conn.reply(m.chat, '🚩 *Conexión cerrada*', m)
}
if (code === DisconnectReason.restartRequired)
return console.log('🎌 Conexión reemplazada, se ha abierto otra nueva sesion, por favor, cierra la sesión actual primero')
if (code === DisconnectReason.loggedOut) 
return conn.reply(m.chat, '🎌 *La conexión se ha cerrado, tendras que volver a conectarse usando:*\n!deletesesion (Para borrar los datos y poder volver a solitar el QR o el código de emparejamiento', m)
if (code == 428)
return conn.reply(m.chat, '🎌 *La conexión se ha cerrado de manera inesperada, intentaremos reconectar...*', m)
if (code === DisconnectReason.connectionLost) 
return console.log('🎌 Conexión perdida con el servidor, reconectando')
if (code === DisconnectReason.badSession) {
return await conn.reply(m.chat, '🚩 *La conexión se ha cerrado, deberá de conectarse manualmente*', m)
if (code === DisconnectReason.timedOut) 
return console.log('🚩 Tiempo de conexión agotado, reconectando....')
}
if (global.db.data == null) loadDatabase()
if (connection == 'open') {
conn.isInit = true;
global.conns.push(conn);
await parent.reply(m.chat, args[0] ? '🐢 Conectado con éxito al WhatsApp.' : '🚩 Vinculaste un Sub-Bot con éxito.', m, rcanal);
await sleep(5000)
if (!args[0]) parentw.sendMessage(m.chat, {text : usedPrefix + command + ' ' + Buffer.from(fs.readFileSync('./${jadi}/' + id + '/creds.json'), 'utf-8').toString('base64')}, { quoted: m })    

}}
setInterval(async () => {
if (!conn.user) {
try { conn.ws.close(); } catch { }conn.ev.removeAllListeners();
let i = global.conns.indexOf(conn);
if (i < 0) return;
delete global.conns[i];
global.conns.splice(i, 1);
}
}, 60000);
let handler = await import('../handler.js');
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error);
if (Object.keys(Handler || {}).length) handler = Handler;
} catch (e) {
console.error(e);
}
if (restatConn) {
try { conn.ws.close(); } catch { }
conn.ev.removeAllListeners();
conn = makeWASocket(connectionOptions);
isInit = true;
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler);
conn.ev.off('connection.update', conn.connectionUpdate);
conn.ev.off('creds.update', conn.credsUpdate);
} 
conn.handler = handler.handler.bind(conn);
conn.connectionUpdate = connectionUpdate.bind(conn);
conn.credsUpdate = saveCreds.bind(conn, true);
conn.ev.on('messages.upsert', conn.handler);
conn.ev.on('connection.update', conn.connectionUpdate);
conn.ev.on('creds.update', conn.credsUpdate);
isInit = false;
return true;
};
creloadHandler(false);
}
serbot();
};
handler.help = ['code'];
handler.tags = ['serbot'];
handler.command = ['code', 'getcode', 'botcode'];
// handler.register = true;
export default handler;
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
