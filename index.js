process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1'
import './settings.js'
import {createRequire} from 'module'
import path, { join, dirname } from 'path'
import {fileURLToPath, pathToFileURL} from 'url'
import {platform} from 'process'
import * as ws from 'ws'
import {readdirSync, statSync, unlinkSync, existsSync, watchFile, unwatchFile, readFileSync, rmSync, watch} from 'fs'
import yargs from 'yargs';
import {spawn} from 'child_process'
import lodash from 'lodash'
import chalk from 'chalk'
import { setupMaster, fork } from 'cluster'
import syntaxerror from 'syntax-error'
import {tmpdir} from 'os'
import {format} from 'util'
import boxen from 'boxen'
import P from 'pino'
import pino from 'pino'
import Pino from 'pino'
import {Boom} from '@hapi/boom'
import {makeWASocket, protoType, serialize} from './lib/simple.js'
import {Low, JSONFile} from 'lowdb'
import {mongoDB, mongoDBV2} from './lib/mongoDB.js'
import store from './lib/store.js'
const {proto} = (await import('@whiskeysockets/baileys')).default
const {DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC} = await import('@whiskeysockets/baileys')
import { createInterface, readline } from 'readline'
import NodeCache from 'node-cache'
const {CONNECTING} = ws
const {chain} = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

console.log('\n✰ Iniciando Yaemori ✰')
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { name, description, collaborators, author, version } = require(join(__dirname, './package.json'))
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
const subtitleStyle = chalk.white.bold
const responseStyle = chalk.dim.bold

let activeCollaborators = ''
for (const key in collaborators) {
if (collaborators.hasOwnProperty(key)) {
activeCollaborators += collaborators[key] + ', '
}}
activeCollaborators = activeCollaborators.slice(0, -2);
cfonts.say('yaemori\nbot md', {
align: 'center',           
gradient: ['red', 'blue'] 
})
cfonts.say(description, {
font: 'console',
align: 'center',
gradient: ['blue', 'magenta']
})
const message = `${subtitleStyle('Desarrollado por »')} ${responseStyle(author.name)}
${subtitleStyle('Código basado por »')} ${responseStyle('BrunoSobrino')}
${subtitleStyle('Colaboradores activos »')} ${responseStyle(activeCollaborators)}
${subtitleStyle('Versión »')} ${responseStyle(version)}`
console.log(boxen(message, { padding: 1, margin: 1, borderStyle: 'double', borderColor: 'blue', float: 'center', }))
var isRunning = false
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)]
setupMaster({
exec: args[0],
args: args.slice(1),
})
let p = fork()
p.on('message', data => {
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break
}
})
p.on('exit', (_, code) => {
isRunning = false
console.error('🚩 Error:\n', code)
process.exit()
if (code === 0) return
watchFile(args[0], () => {
unwatchFile(args[0])
start(file)
})
})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())
})
}
process.on('warning', (warning) => {
if (warning.name === 'MaxListenersExceededWarning') {
console.warn('🚩 Se excedió el límite de Listeners en:')
console.warn(warning.stack)
}
})
start('sunlight.js')