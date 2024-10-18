process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
import './settings.js';
import { createRequire } from 'module';
import _0x489caf, { join, dirname } from 'path';
import { setupMaster, fork } from 'cluster';
import { fileURLToPath, pathToFileURL } from 'url';
import { platform } from 'process';
import 'ws';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, watchFile, unwatchFile, promises as _0x279ae5 } from 'fs';
import _0x101448 from 'yargs';
import _0x36c473 from 'cfonts';
import { spawn } from 'child_process';
import _0xb3ac1b from 'lodash';
import _0x3740ae from 'chalk';
import _0x894efc from 'syntax-error';
import { tmpdir } from 'os';
import { format } from 'util';
import 'pino';
import _0x2f246c from 'pino';
import { Boom } from '@hapi/boom';
import _0x26376a from 'pino';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import _0x2d3790 from './lib/store.js';
const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  jidNormalizedUser,
  PHONENUMBER_MCC
} = await import("@whiskeysockets/baileys");
import _0x58d46e, { createInterface } from 'readline';
import _0x1f5a58 from 'node-cache';
let __dirname = dirname(fileURLToPath(import.meta.url));
let {
  say
} = _0x36c473;
const { name, description, collaborators, author, version } = require(join(__dirname, './package.json'))
let rl2 = createInterface(process.stdin, process.stdout);
const subtitleStyle = chalk.white.bold;
const responseStyle = chalk.dim.bold;
let activeCollaborators = '';
for (const key in collaborators) {
if (collaborators.hasOwnProperty(key)) {
activeCollaborators += collaborators[key] + ', ';
}};
say('yaemori\nbot md', {
align: 'center',           
gradient: ['red', 'blue'] 
});
const message = `${subtitleStyle('Desarrollado por »')} ${responseStyle(author.name)}
${subtitleStyle('Código basado por »')} ${responseStyle('BrunoSobrino')}
${subtitleStyle('Colaboradores activos »')} ${responseStyle(activeCollaborators)}
${subtitleStyle('Versión »')} ${responseStyle(version)}`
console.log(boxen(message, { padding: 1, margin: 1, borderStyle: 'double', borderColor: 'blue', float: 'center', }));
var isRunning = false;
async function start(_0x2c33cf) {
  if (isRunning) {
    return;
  }
  isRunning = true;
  for (let _0x5425d1 of _0x2c33cf) {
    let _0x584762 = [join(__dirname, _0x5425d1), ...process.argv.slice(0x2)];
    setupMaster({
      'exec': _0x584762[0x0],
      'args': _0x584762.slice(0x1)
    });
    let _0x9530bf = fork();
    _0x9530bf.on("message", _0x2bf42b => {
      console.log("[RECEIVED]", _0x2bf42b);
      switch (_0x2bf42b) {
        case "reset":
          _0x9530bf.process.kill();
          isRunning = false;
          start(_0x2c33cf);
          break;
        case "uptime":
          _0x9530bf.send(process.uptime());
          break;
      }
    });
    _0x9530bf.on("exit", (_0x45d619, _0x2993c9) => {
      isRunning = false;
      console.error("Ocurrió un error inesperado:", _0x2993c9);
      start(_0x2c33cf);
      if (_0x2993c9 === 0x0) {
        return;
      }
      watchFile(_0x584762[0x0], () => {
        unwatchFile(_0x584762[0x0]);
        start(_0x2c33cf);
      });
    });
    let _0x330605 = new Object(_0x101448(process.argv.slice(0x2)).exitProcess(false).parse());
    if (!_0x330605.test) {
      if (!rl2.listenerCount()) {
        rl2.on("line", _0x5dc7ec => {
          _0x9530bf.emit("message", _0x5dc7ec.trim());
        });
      }
    }
  }
}
async function getFilesToRun() {
  try {
    let _0x3e6332 = await _0x279ae5.readdir(__dirname);
    return _0x3e6332.filter(_0x12f6d8 => _0x12f6d8 === "starlights.js" || _0x12f6d8.startsWith("serbot-") && _0x12f6d8.endsWith(".js"));
  } catch {
    return [];
  }
}
async function getPublicIP() {
  try {
    let _0x41f4eb = await fetch("https://api.ipify.org?format=json");
    let _0x148146 = await _0x41f4eb.json();
    return _0x148146.ip;
  } catch {
    return null;
  }
}
let allowedIPs = ["https://dash.skyultraplus.com", "https://panel.skyultraplus.com"];
getPublicIP().then(_0x46b177 => {
  if (allowedIPs.includes(_0x46b177)) {
    getFilesToRun().then(_0xcd4e98 => {
      start(_0xcd4e98);
    });
  } else {
    console.log(_0x3740ae.red("YaemoriBot solo puede ser utilizada en Sky Plus, para poder utilizar a YaemoriBot ve a nuestro hosting"));
    console.log(_0x3740ae.cyan("Sky Plus: https://dash.skyultraplus.com"));
    process.exit(0x1);
  }
});
const {
  chain
} = _0xb3ac1b;
protoType();
serialize();
global.__filename = function filename(_0x45fac8 = import.meta.url, _0x17d96f = platform !== "win32") {
  return _0x17d96f ? /file:\/\/\//.test(_0x45fac8) ? fileURLToPath(_0x45fac8) : _0x45fac8 : pathToFileURL(_0x45fac8).toString();
};
global.__dirname = function dirname(_0x40fa7d) {
  return _0x489caf.dirname(global.__filename(_0x40fa7d, true));
};
global.__require = function require(_0x27eb41 = import.meta.url) {
  return createRequire(_0x27eb41);
};
global.API = (_0x1f9fb3, _0x45ccec = '/', _0x3238e0 = {}, _0x3625b2) => (_0x1f9fb3 in global.APIs ? global.APIs[_0x1f9fb3] : _0x1f9fb3) + _0x45ccec + (_0x3238e0 || _0x3625b2 ? '?' + new URLSearchParams(Object.entries({
  ..._0x3238e0,
  ...(_0x3625b2 ? {
    [_0x3625b2]: global.APIKeys[_0x1f9fb3 in global.APIs ? global.APIs[_0x1f9fb3] : _0x1f9fb3]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
global.opts = new Object(_0x101448(process.argv.slice(0x2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts.prefix || "‎z/#$%.\\-").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.db = new Low(new JSONFile("storage/databases/database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x396f7b => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x396f7b(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read()["catch"](console.error);
  global.db.READ = null;
  global.db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFile = "MiniSession";
const {
  state,
  saveState,
  saveCreds
} = await useMultiFileAuthState(global.authFile);
const msgRetryCounterMap = _0x4dffbd => {};
const msgRetryCounterCache = new _0x1f5a58();
const {
  version
} = await fetchLatestBaileysVersion();
const MethodMobile = process.argv.includes("mobile");
const rl = _0x58d46e.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0x542a16 => new Promise(_0x487eba => rl.question(_0x542a16, _0x487eba));
console.info = () => {};
const connectionOptions = {
  'logger': _0x2f246c({
    'level': "silent"
  }),
  'printQRInTerminal': false,
  'mobile': MethodMobile,
  'browser': ["Ubuntu", "Chrome", "110.0.5585.95"],
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, _0x26376a({
      'level': "fatal"
    }).child({
      'level': "fatal"
    }))
  },
  'markOnlineOnConnect': true,
  'generateHighQualityLinkPreview': true,
  'getMessage': async _0x332bdf => {
    let _0x125053 = jidNormalizedUser(_0x332bdf.remoteJid);
    let _0x4a9e95 = await _0x2d3790.loadMessage(_0x125053, _0x332bdf.id);
    return _0x4a9e95?.["message"] || '';
  },
  'msgRetryCounterCache': msgRetryCounterCache,
  'msgRetryCounterMap': msgRetryCounterMap,
  'defaultQueryTimeoutMs': undefined,
  'version': version
};
global.conn = makeWASocket(connectionOptions);
if (!conn.authState.creds.registered) {
  const phoneNumber = await question(_0x3740ae.blue("Ingresa el número de WhatsApp en el cual estará la Bot\n"));
  if (conn.requestPairingCode) {
    let code = await conn.requestPairingCode(phoneNumber);
    code = code?.["match"](/.{1,4}/g)?.["join"]('-') || code;
    console.log(_0x3740ae.cyan("Su código es:", code));
  } else {}
}
conn.isInit = false;
conn.well = false;
if (!opts.test) {
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) {
        await global.db.write();
      }
      if (opts.autocleartmp && (global.support || {}).find) {
        tmp = [os.tmpdir(), "tmp", "serbot"];
        tmp.forEach(_0x369b78 => cp.spawn("find", [_0x369b78, "-amin", '3', "-type", 'f', "-delete"]));
      }
    }, 30000);
  }
}
async function clearTmp() {
  const _0x3768d7 = [tmpdir(), join(__dirname, "../tmp")];
  const _0xb05b8 = [];
  _0x3768d7.forEach(_0x24b1ed => readdirSync(_0x24b1ed).forEach(_0x37248e => _0xb05b8.push(join(_0x24b1ed, _0x37248e))));
  return _0xb05b8.map(_0x4cf8c3 => {
    const _0x2727a9 = statSync(_0x4cf8c3);
    if (_0x2727a9.isFile() && Date.now() - _0x2727a9.mtimeMs >= 60000) {
      return unlinkSync(_0x4cf8c3);
    }
    return false;
  });
}
setInterval(async () => {
  await clearTmp();
  console.log(_0x3740ae.cyan("Se limpio la carpeta tmp"));
}, 0xea60);
function purgeSession() {
  let _0x259507 = [];
  let _0x53510f = readdirSync("./MiniSession");
  let _0x1337b = _0x53510f.filter(_0x4ebe0d => {
    return _0x4ebe0d.startsWith("pre-key-");
  });
  _0x259507 = [..._0x259507, ..._0x1337b];
  _0x1337b.forEach(_0x14be6d => {
    unlinkSync("./MiniSession/" + _0x14be6d);
  });
}
function purgeSessionSB() {
  try {
    let _0x184104 = readdirSync("./MiniJadiBot/");
    let _0x3b3682 = [];
    _0x184104.forEach(_0x3d5c4a => {
      if (statSync("./MiniJadiBot/" + _0x3d5c4a).isDirectory()) {
        let _0x5a9419 = readdirSync("./MiniJadiBot/" + _0x3d5c4a).filter(_0x3c10bd => {
          return _0x3c10bd.startsWith("pre-key-");
        });
        _0x3b3682 = [..._0x3b3682, ..._0x5a9419];
        _0x5a9419.forEach(_0x1fa2ad => {
          unlinkSync("./MiniJadiBot/" + _0x3d5c4a + '/' + _0x1fa2ad);
        });
      }
    });
    if (_0x3b3682.length === 0x0) {
      return;
    }
    console.log(_0x3740ae.cyanBright("=> No hay archivos por eliminar."));
  } catch (_0x10a31c) {
    console.log(_0x3740ae.bold.red("Algo salio mal durante la eliminación, archivos no eliminados"));
  }
}
function purgeOldFiles() {
  const _0x183a3d = ["./MiniSession/", "./MiniJadiBot/"];
  const _0x3ea020 = Date.now() - 3600000;
  _0x183a3d.forEach(_0x278c29 => {
    readdirSync(_0x278c29, (_0x4e8761, _0x4d1d01) => {
      if (_0x4e8761) {
        throw _0x4e8761;
      }
      _0x4d1d01.forEach(_0x560a00 => {
        const _0x7295c9 = _0x489caf.join(_0x278c29, _0x560a00);
        stat(_0x7295c9, (_0x17633f, _0x4176ca) => {
          if (_0x17633f) {
            throw _0x17633f;
          }
          if (_0x4176ca.isFile() && _0x4176ca.mtimeMs < _0x3ea020 && _0x560a00 !== "creds.json") {
            unlinkSync(_0x7295c9, _0x591317 => {
              if (_0x591317) {
                throw _0x591317;
              }
              console.log(_0x3740ae.bold.green("Archivo " + _0x560a00 + " borrado con éxito"));
            });
          } else {
            console.log(_0x3740ae.bold.red("Archivo " + _0x560a00 + " no borrado" + _0x17633f));
          }
        });
      });
    });
  });
}
async function connectionUpdate(_0xac1214) {
  const {
    connection: _0x191069,
    lastDisconnect: _0x119386,
    isNewLogin: _0x5db75d
  } = _0xac1214;
  global.stopped = _0x191069;
  if (_0x5db75d) {
    conn.isInit = true;
  }
  const _0x412d96 = _0x119386?.["error"]?.["output"]?.["statusCode"] || _0x119386?.["error"]?.["output"]?.["payload"]?.["statusCode"];
  if (_0x412d96 && _0x412d96 !== DisconnectReason.loggedOut && conn?.['ws']["socket"] == null) {
    await global.reloadHandler(true)["catch"](console.error);
    global.timestamp.connect = new Date();
  }
  if (global.db.data == null) {
    loadDatabase();
  }
  if (_0x191069 == "open") {
    console.log(_0x3740ae.yellow("Conectado correctamente."));
  }
  let _0x1137a3 = new Boom(_0x119386?.["error"])?.["output"]?.["statusCode"];
  if (_0x1137a3 == 0x195) {
    await fs.unlinkSync("./MiniSession/creds.json");
    console.log(_0x3740ae.bold.redBright("Conexión replazada, Por favor espere un momento me voy a reiniciar...\nSi aparecen error vuelve a iniciar con : npm start"));
    process.send("reset");
  }
  if (_0x191069 === "close") {
    if (_0x1137a3 === DisconnectReason.badSession) {
      conn.logger.error("Sesión incorrecta, por favor elimina la carpeta " + global.authFile + " y escanea nuevamente.");
    } else {
      if (_0x1137a3 === DisconnectReason.connectionClosed) {
        conn.logger.warn("Conexión cerrada, reconectando...");
        await global.reloadHandler(true)["catch"](console.error);
      } else {
        if (_0x1137a3 === DisconnectReason.connectionLost) {
          conn.logger.warn("Conexión perdida con el servidor, reconectando...");
          await global.reloadHandler(true)["catch"](console.error);
        } else {
          if (_0x1137a3 === DisconnectReason.connectionReplaced) {
            conn.logger.error("Conexión reemplazada, se ha abierto otra nueva sesión. Por favor, cierra la sesión actual primero.");
          } else {
            if (_0x1137a3 === DisconnectReason.loggedOut) {
              conn.logger.error("Conexion cerrada, por favor elimina la carpeta " + global.authFile + " y escanea nuevamente.");
            } else {
              if (_0x1137a3 === DisconnectReason.restartRequired) {
                conn.logger.info("Reinicio necesario, reinicie el servidor si presenta algún problema.");
                await global.reloadHandler(true)["catch"](console.error);
              } else if (_0x1137a3 === DisconnectReason.timedOut) {
                conn.logger.warn("Tiempo de conexión agotado, reconectando...");
                await global.reloadHandler(true)["catch"](console.error);
              } else {
                conn.logger.warn("Razón de desconexión desconocida. " + (_0x1137a3 || '') + ": " + (_0x191069 || ''));
                await global.reloadHandler(true)["catch"](console.error);
              }
            }
          }
        }
      }
    }
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x7260d5) {
  try {
    const _0x1477f3 = await import("./handler.js?update=" + Date.now())["catch"](console.error);
    if (Object.keys(_0x1477f3 || {}).length) {
      handler = _0x1477f3;
    }
  } catch (_0x17dafa) {
    console.error(_0x17dafa);
  }
  if (_0x7260d5) {
    const _0x350f61 = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x350f61
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
  conn.handler = handler.handler.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn, true);
  const _0x21b4dc = new Date();
  const _0x160e35 = new Date(conn.ev);
  if (_0x21b4dc >= _0x160e35) {} else {}
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
const pluginFilter = _0x54c14a => /\.js$/.test(_0x54c14a);
global.plugins = {};
async function filesInit() {
  for (let _0x46a8c0 of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let _0x53eb2f = global.__filename(join(pluginFolder, _0x46a8c0));
      const _0x347905 = await import(_0x53eb2f);
      global.plugins[_0x46a8c0] = _0x347905["default"] || _0x347905;
    } catch (_0x2a2bc1) {
      conn.logger.error(_0x2a2bc1);
      delete global.plugins[_0x46a8c0];
    }
  }
}
filesInit().then(_0x1c39df => console.log(Object.keys(global.plugins)))["catch"](console.error);
global.reload = async (_0x54b52b, _0x58ad49) => {
  if (/\.js$/.test(_0x58ad49)) {
    const _0x29e23d = global.__filename(join(pluginFolder, _0x58ad49), true);
    if (_0x58ad49 in global.plugins) {
      if (existsSync(_0x29e23d)) {
        conn.logger.info(" updated plugin - '" + _0x58ad49 + "'");
      } else {
        conn.logger.warn("deleted plugin - '" + _0x58ad49 + "'");
        return delete global.plugins[_0x58ad49];
      }
    } else {
      conn.logger.info("new plugin - '" + _0x58ad49 + "'");
    }
    const _0xde9fb9 = _0x894efc(readFileSync(_0x29e23d), _0x58ad49, {
      'sourceType': "module",
      'allowAwaitOutsideFunction': true
    });
    if (_0xde9fb9) {
      conn.logger.error("syntax error while loading '" + _0x58ad49 + "'\n" + format(_0xde9fb9));
    } else {
      try {
        const _0x6f5508 = await import(global.__filename(_0x29e23d) + "?update=" + Date.now());
        global.plugins[_0x58ad49] = _0x6f5508["default"] || _0x6f5508;
      } catch (_0x369439) {
        conn.logger.error("error require plugin '" + _0x58ad49 + "\n" + format(_0x369439) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x9753aa], [_0x120850]) => _0x9753aa.localeCompare(_0x120850)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  const _0x298c7f = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", "-loglevel", "error", "-filter_complex", "color", "-frames:v", '1', '-f', "webp", '-']), spawn("convert"), spawn("magick"), spawn('gm'), spawn("find", ["--version"])].map(_0x31d8b6 => {
    return Promise.race([new Promise(_0x3ad9a9 => {
      _0x31d8b6.on("close", _0x26a1e5 => {
        _0x3ad9a9(_0x26a1e5 !== 0x7f);
      });
    }), new Promise(_0x36f39c => {
      _0x31d8b6.on("error", _0x2a097f => _0x36f39c(false));
    })]);
  }));
  const [_0x50ca40, _0x59f707, _0x438e9f, _0x51f91b, _0x34ff9a, _0x47795b, _0x4a70db] = _0x298c7f;
  Object.freeze(global.support);
}
setInterval(async () => {
  if (stopped === "close" || !conn || !conn.user) {
    return;
  }
}, 0x2bf20);
setInterval(async () => {
  if (stopped === "close" || !conn || !conn.user) {
    return;
  }
  await purgeSession();
}, 3600000);
setInterval(async () => {
  if (stopped === "close" || !conn || !conn.user) {
    return;
  }
  await purgeSessionSB();
}, 3600000);
setInterval(async () => {
  if (stopped === "close" || !conn || !conn.user) {
    return;
  }
  await purgeOldFiles();
}, 3600000);
_quickTest()["catch"](console.error);