const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  jidNormalizedUser
} = await import('@whiskeysockets/baileys');
import 'moment-timezone';
import 'awesome-phonenumber';
import 'readline';
import { fileURLToPath } from 'url';
import 'crypto';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import 'ws';
import '@hapi/boom';
import _0x506af4 from 'qrcode';
import _0x4914d8 from 'fs';
import _0x210e5b from 'pino';
import 'ws';
const {
  child,
  spawn,
  exec
} = await import("child_process");
import { makeWASocket } from './lib/simple.js';
import _0x4de4c2 from './lib/store.js';
import _0x13df2e from 'node-cache';
if (!(global.conns instanceof Array)) {
  global.conns = [];
}
if (!(global.dataconst instanceof Array)) {
  global.dataconst = [];
}
const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJsonPath = join(__dirname, "./package.json");
const {
  name,
  author,
  version: versionSB,
  description
} = JSON.parse(readFileSync(packageJsonPath, "utf8"));
let handler = async (_0x7880ea, {
  conn: _0x3740e2,
  args: _0x482a9d,
  usedPrefix: _0x3b835b,
  command: _0x37fa95,
  isOwner: _0x5ca988,
  text: _0x21b4d5
}) => {
  if (!global.db.data.settings[_0x3740e2.user.jid].jadibotmd) {
    return _0x3740e2.sendMessage(_0x7880ea.chat, {
      'text': "🌵 Este Comando está desactivado."
    }, {
      'quoted': _0x7880ea
    });
  }
  if (_0x3740e2.user.jid !== global.conn.user.jid) {
    return _0x3740e2.reply(_0x7880ea.chat, "Solo se puede desde el bot ofc: " + " wa.me/" + global.conn.user.jid.split`@`[0x0] + "&text=" + (_0x3b835b + _0x37fa95), _0x7880ea);
  }
  const _0x16317d = Buffer.from("CkphZGlib3QsIEhlY2hvIHBvciBAQWlkZW5fTm90TG9naWM", 'base64');
  async function _0x400c70() {
    let _0x4547ac = _0x7880ea.mentionedJid && _0x7880ea.mentionedJid[0x0] ? _0x7880ea.mentionedJid[0x0] : _0x7880ea.fromMe ? _0x3740e2.user.jid : _0x7880ea.sender;
    let _0x9488cf = '' + _0x4547ac.split`@`[0x0];
    let _0x4bf714 = _0x482a9d[0x0] && _0x482a9d[0x0].includes("--code") ? true : !!(_0x482a9d[0x1] && _0x482a9d[0x1].includes('--code'));
    if (_0x4bf714) {
      _0x482a9d[0x0] = _0x482a9d[0x0].replace("--code", '').trim();
      if (_0x482a9d[0x1]) {
        _0x482a9d[0x1] = _0x482a9d[0x1].replace('--code', '').trim();
      }
      if (_0x482a9d[0x0] == '') {
        _0x482a9d[0x0] = undefined;
      }
    }
    if (!_0x4914d8.existsSync("./GataJadiBot/" + _0x9488cf)) {
      _0x4914d8.mkdirSync('./GataJadiBot/' + _0x9488cf, {
        'recursive': true
      });
    }
    if (_0x482a9d[0x0]) {
      _0x4914d8.writeFileSync("./GataJadiBot/" + _0x9488cf + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x482a9d[0x0], "base64").toString("utf-8")), null, "\t"));
    }
    if (_0x4914d8.existsSync("./GataJadiBot/" + _0x9488cf + "/creds.json")) {
      let _0x13bbfc = JSON.parse(_0x4914d8.readFileSync("./GataJadiBot/" + _0x9488cf + "/creds.json"));
      if (_0x13bbfc) {
        if (_0x13bbfc.registered = false) {
          _0x4914d8.unlinkSync("./GataJadiBot/" + _0x9488cf + '/creds.json');
        }
      }
    }
    const {
      state: _0x761f83,
      saveState: _0x3e9b9f,
      saveCreds: _0x35e0cd
    } = await useMultiFileAuthState("./GataJadiBot/" + _0x9488cf);
    const _0xf11b6f = new _0x13df2e();
    const {
      version: _0x24196c
    } = await fetchLatestBaileysVersion();
    const _0xbe00d5 = {
      'printQRInTerminal': false,
      'auth': {
        'creds': _0x761f83.creds,
        'keys': makeCacheableSignalKeyStore(_0x761f83.keys, _0x210e5b({
          'level': 'silent'
        }))
      },
      'logger': _0x210e5b({
        'level': "silent"
      }),
      'browser': _0x4bf714 ? ["Ubuntu", 'Chrome', "20.0.04"] : ["YaemoriBot-MD (Sub-Bot)", "Safari", "2.0.0"],
      'markOnlineOnConnect': true,
      'generateHighQualityLinkPreview': true,
      'getMessage': async _0x30b015 => {
        let _0x4d7675 = jidNormalizedUser(_0x30b015.remoteJid);
        let _0x39c0d9 = await _0x4de4c2.loadMessage(_0x4d7675, _0x30b015.id);
        return _0x39c0d9?.['message'] || '';
      },
      'msgRetryCounterCache': _0xf11b6f,
      'version': _0x24196c
    };
    let _0x4aeb83 = makeWASocket(_0xbe00d5);
    _0x4aeb83.isInit = false;
    _0x4aeb83.uptime = Date.now();
    let _0x3d5916 = true;
    async function _0x3c8cc7(_0x3457a1) {
      const {
        connection: _0x3489ac,
        lastDisconnect: _0x39cf06,
        isNewLogin: _0x441091,
        qr: _0x62fe70
      } = _0x3457a1;
      if (_0x441091) {
        _0x4aeb83.isInit = false;
      }
      if (_0x62fe70 && !_0x4bf714) {
        _0x3740e2.sendMessage(_0x7880ea.chat, {
          'image': await _0x506af4.toBuffer(_0x62fe70, {
            'scale': 0x8
          }),
          'caption': "🚩 S E R B O T - S U B B O T 🚩\n\n*Escanea este QR para ser un Sub Bot*\n\n🍟 Pasos para escanear:\n\n`1` : Haga click en los 3 puntos\n\n`2` : Toque dispositivos vinculados\n\n`3` : Escanea este QR\n\n> *Nota:* Este código QR expira en 30 segundos."
        }, {
          'quoted': _0x7880ea
        });
      }
      if (_0x62fe70 && _0x4bf714) {
        let _0x995bc7 = _0x7880ea.sender.split`@`[0x0];
        if (_0x995bc7.startsWith('52')) {
          _0x995bc7 = "521" + _0x995bc7.slice(0x2);
        }
        let _0x5e5fc5 = await _0x4aeb83.requestPairingCode(_0x995bc7);
        _0x3740e2.sendMessage(_0x7880ea.chat, {
          'text': "🚩 S E R B O T - S U B B O T 🚩\n\n*Usa este Código para convertirte en un Sub Bot*\n\n🍟 Pasos:\n\n`1` : Haga click en los 3 puntos\n\n`2` : Toque dispositivos vinculados\n\n`3` : Selecciona Vincular con el número de teléfono\n\n`4` : Escriba el Codigo\n\n> *Nota:* Este Código solo funciona en el número que lo solicito."
        }, {
          'quoted': _0x7880ea
        });
        await delay(0x1388);
        _0x3740e2.sendMessage(_0x7880ea.chat, {
          'text': _0x5e5fc5
        }, {
          'quoted': _0x7880ea
        });
      }
      const _0x598aa9 = _0x39cf06?.["error"]?.["output"]?.["statusCode"] || _0x39cf06?.['error']?.["output"]?.["payload"]?.['statusCode'];
      if (_0x3489ac === "close") {
        if (_0x4aeb83.user && dataconst[_0x4aeb83.user.id.split('@')] == 0x3) {
          return _0x3740e2.sendMessage(_0x7880ea.chat, {
            'text': "*⚠️ Se ha alcanzado el limite de reconexiones, por favor intente mas tarde.*"
          }, {
            'quoted': _0x7880ea
          });
        }
        if (_0x598aa9 == 0x195 || _0x598aa9 == 0x194) {
          _0x4914d8.unlinkSync("./GataJadiBot/" + _0x9488cf + "/creds.json");
          return _0x400c70();
        }
        if (_0x598aa9 === DisconnectReason.badSession) {
          _0x3740e2.sendMessage(_0x7880ea.chat, {
            'text': "*⚠️ La sesión actual es inválida, Tendras que iniciar sesion de nuevo."
          }, {
            'quoted': _0x7880ea
          });
          _0x4914d8.rmdirSync("./GataJadiBot/" + _0x9488cf, {
            'recursive': true
          });
        } else {
          if (_0x598aa9 === DisconnectReason.connectionClosed) {
            if (_0x4aeb83.fstop) {
              return _0x3740e2.sendMessage(_0x7880ea.chat, {
                'text': "*⚠️ El bot se ha apagado correctamente!!*"
              }, {
                'quoted': _0x7880ea
              });
            }
            if (!_0x4aeb83.fstop) {
              _0x3740e2.sendMessage(_0x7880ea.chat, {
                'text': "*⚠️ La conexión se cerró, se intentara reconectar automáticamente...*\n" + dataconst[_0x4aeb83.user.id.split('@')] + '/3'
              }, {
                'quoted': _0x7880ea
              });
            }
            if (!_0x4aeb83.fstop) {
              await _0x1e3080(true)["catch"](console.error);
            }
          } else {
            if (_0x598aa9 === DisconnectReason.connectionLost) {
              _0x3740e2.sendMessage(_0x7880ea.chat, {
                'text': "*⚠️ La conexión se perdió, se intentara reconectar automáticamente...*\n" + dataconst[_0x4aeb83.user.id.split('@')] + '/3'
              }, {
                'quoted': _0x7880ea
              });
              await _0x1e3080(true)["catch"](console.error);
            } else {
              if (_0x598aa9 === DisconnectReason.connectionReplaced) {
                _0x3740e2.sendMessage(_0x7880ea.chat, {
                  'text': "*⚠️ La conexión se reemplazó, Su conexion se cerro*\n\n*Para volver a conectarte usa:*\n" + _0x3b835b + _0x37fa95
                }, {
                  'quoted': _0x7880ea
                });
              } else {
                if (_0x598aa9 === DisconnectReason.loggedOut) {
                  _0x3740e2.sendMessage(_0x7880ea.chat, {
                    'text': "*La conexión se cerró*, Tendrá que conectarse manualmente usando el comando #serbot*"
                  }, {
                    'quoted': _0x7880ea
                  });
                  return _0x4914d8.rmdirSync("./GataJadiBot/" + _0x9488cf, {
                    'recursive': true
                  });
                } else {
                  if (_0x598aa9 === DisconnectReason.restartRequired) {
                    await _0x1e3080(true)['catch'](console.error);
                  } else if (_0x598aa9 === DisconnectReason.timedOut) {
                    _0x3740e2.sendMessage(_0x7880ea.chat, {
                      'text': "*⚠️ La conexión se agotó, se intentara reconectar automáticamente...*\n" + dataconst[_0x4aeb83.user.id.split('@')] + '/3'
                    }, {
                      'quoted': _0x7880ea
                    });
                    await _0x1e3080(true)["catch"](console.error);
                  } else {
                    _0x3740e2.sendMessage(_0x7880ea.chat, {
                      'text': "⚠️ Razón de desconexión desconocida. " + (_0x598aa9 || '') + ": " + (_0x3489ac || '') + " Por favor reporte al desarollador."
                    }, {
                      'quoted': _0x7880ea
                    });
                  }
                }
              }
            }
          }
        }
        let _0x533c5b = global.conns.indexOf(_0x4aeb83);
        if (_0x533c5b < 0x0) {
          return console.log("no se encontro");
        }
        delete global.conns[_0x533c5b];
        global.conns.splice(_0x533c5b, 0x1);
      }
      if (global.db.data == null) {
        loadDatabase();
      }
      if (_0x3489ac == 'open') {
        _0x4aeb83.isInit = true;
        global.conns.push(_0x4aeb83);
        await _0x3740e2.sendMessage(_0x7880ea.chat, {
          'text': _0x482a9d[0x0] ? "*✅ *¡Conectado con exito!*" : "✅ *Conectado con WhatsApp*\n\n♻️ *Comandos relacionados con Sub Bot:*\n» *#stop* _(Pausar ser bot)_\n» *#deletebot* _(Dejar de ser bot y eliminar datos)_\n» *#serbot [texto largo]* _(Reanudar ser Bot en caso que este pausado o deje de funcionar)_\n\n*Gracias por usar ❤️ YaemoriBot 🌵*\n\n📢 *Informate de las novedades en nuestro canal oficial:*\n" + channel 
        }, {
          'quoted': _0x7880ea
        });
        if (_0x3489ac === "open") {
          dataconst[_0x4aeb83.user.id.split('@')] = 0x1;
          _0x3740e2.sendMessage(_0x7880ea.chat, {
            'text': lenguajeGB.smsAvisoIIG() + "⚪ *ESTÁ CONECTADO(A)!! POR FAVOR ESPERE SE ESTÁ CARGANDO LOS MENSAJES...*\n\n♻️ *OPCIONES DISPONIBLES:*\n*» #stop _(Detener la función Sub Bot)_*\n*» #deletebot _(Borrar todo rastro de Sub Bot)_*\n*» #serbot _(Obtener nuevo código QR para ser Sub Bot)_*"
          }, {
            'quoted': _0x7880ea
          });
          return console.log(await _0x1e3080(false)["catch"](console.error));
        }
        await sleep(0x1388);
        if (!_0x482a9d[0x0]) {
          await parent.sendMessage(_0x3740e2.user.jid, {
            'text': lenguajeGB.smsJBInfo1() + " " + lenguajeGB.smsJBInfo2()
          }, {
            'quoted': _0x7880ea
          });
          _0x3740e2.sendMessage(_0x3740e2.user.jid, {
            'text': _0x3b835b + _0x37fa95 + " " + Buffer.from(_0x4914d8.readFileSync('./GataJadiBot/' + _0x9488cf + "/creds.json"), 'utf-8').toString("base64")
          }, {
            'quoted': _0x7880ea
          });
        }
      }
    }
    setInterval(async () => {
      if (!_0x4aeb83.user) {
        try {
          _0x4aeb83.ws.close();
        } catch {}
        _0x4aeb83.ev.removeAllListeners();
        let _0x393ef2 = global.conns.indexOf(_0x4aeb83);
        if (_0x393ef2 < 0x0) {
          return;
        }
        delete global.conns[_0x393ef2];
        global.conns.splice(_0x393ef2, 0x1);
      }
    }, 0xea60);
    let _0x133659 = global.handler;
    let _0x1e3080 = async function (_0x4b048b) {
      try {
        const _0x34d8b8 = await import('../handler.js?update=' + Date.now())["catch"](console.error);
        if (Object.keys(_0x34d8b8 || {}).length) {
          _0x133659 = _0x34d8b8;
        }
      } catch (_0x4e4a48) {
        console.error(_0x4e4a48);
      }
      if (_0x4b048b) {
        try {
          _0x4aeb83.ws.close();
        } catch {}
        _0x4aeb83.ev.removeAllListeners();
        _0x4aeb83 = makeWASocket(_0xbe00d5);
        _0x3d5916 = true;
      }
      if (_0x4aeb83.user && _0x4aeb83.user.id && !dataconst[_0x4aeb83.user.id.split('@')]) {
        dataconst[_0x4aeb83.user.id.split('@')] = 0x0;
      }
      if (_0x4aeb83.user && _0x4aeb83.user.id && dataconst[_0x4aeb83.user.id.split('@')] && _0x4b048b) {
        dataconst[_0x4aeb83.user.id.split('@')]++;
      }
      if (!_0x3d5916) {
        _0x4aeb83.ev.off("messages.upsert", _0x4aeb83.handler);
        _0x4aeb83.ev.off("group-participants.update", _0x4aeb83.participantsUpdate);
        _0x4aeb83.ev.off("groups.update", _0x4aeb83.groupsUpdate);
        _0x4aeb83.ev.off("message.delete", _0x4aeb83.onDelete);
        _0x4aeb83.ev.off("call", _0x4aeb83.onCall);
        _0x4aeb83.ev.off('connection.update', _0x4aeb83.connectionUpdate);
        _0x4aeb83.ev.off("creds.update", _0x4aeb83.credsUpdate);
      }
      _0x4aeb83.handler = _0x133659.handler.bind(_0x4aeb83);
      _0x4aeb83.participantsUpdate = _0x133659.participantsUpdate.bind(_0x4aeb83);
      _0x4aeb83.groupsUpdate = _0x133659.groupsUpdate.bind(_0x4aeb83);
      _0x4aeb83.onDelete = _0x133659.deleteUpdate.bind(_0x4aeb83);
      _0x4aeb83.onCall = _0x133659.callUpdate.bind(_0x4aeb83);
      _0x4aeb83.connectionUpdate = _0x3c8cc7.bind(_0x4aeb83);
      _0x4aeb83.credsUpdate = _0x35e0cd.bind(_0x4aeb83, true);
      _0x4aeb83.ev.on("messages.upsert", _0x4aeb83.handler);
      _0x4aeb83.ev.on("group-participants.update", _0x4aeb83.participantsUpdate);
      _0x4aeb83.ev.on("groups.update", _0x4aeb83.groupsUpdate);
      _0x4aeb83.ev.on("message.delete", _0x4aeb83.onDelete);
      _0x4aeb83.ev.on('call', _0x4aeb83.onCall);
      _0x4aeb83.ev.on("connection.update", _0x4aeb83.connectionUpdate);
      _0x4aeb83.ev.on("creds.update", _0x4aeb83.credsUpdate);
      _0x4aeb83.subreloadHandler = _0x1e3080;
      _0x3d5916 = false;
      return true;
    };
    _0x1e3080(false);
  }
  _0x400c70();
};
handler.help = ["serbot", "serbot --code"];
handler.tags = ["serbot"];
handler.command = ["jadibot", "serbot"];
export default handler;
const delay = _0x2c320e => new Promise(_0x1f76b1 => setTimeout(_0x1f76b1, _0x2c320e));
function sleep(_0x557480) {
  return new Promise(_0x136d51 => setTimeout(_0x136d51, _0x557480));
}