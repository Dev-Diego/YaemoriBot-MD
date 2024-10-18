/*
⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo esta totalmente hecho por:
- Aiden_NotLogic (https://github.com/ferhacks)

El codigo de este archivo fue creado para:
- YaemoriBot-MD (https://github.com/Dev-Diego/YaemoriBot-MD)

Adaptacion y edición echa por:
- Dev-Diego (https://github.com/Dev-Diego)

El codigo de este archivo fue parchado por:
- ReyEndymion (https://github.com/ReyEndymion)
- BrunoSobrino (https://github.com/BrunoSobrino)

⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠
*/

const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  jidNormalizedUser
} = await import("@whiskeysockets/baileys");
import _0x3b186e from 'qrcode';
import _0xbbf44 from 'fs';
import _0x4f591a from 'pino';
import 'ws';
const {
  child,
  spawn,
  exec
} = await import('child_process');
import { makeWASocket } from './lib/simple.js';
import _0x59af36 from './lib/store.js';
import _0x318b69 from 'node-cache';
if (!(global.conns instanceof Array)) {
  global.conns = [];
}
if (!(global.dataconst instanceof Array)) {
  global.dataconst = [];
}
let handler = async (_0x56cd40, {
  conn: _0x47d87d,
  args: _0x13f930,
  usedPrefix: _0x32d6f2,
  command: _0x58aa9f,
  isOwner: _0x359a6c,
  text: _0x57eb30
}) => {
  if (!global.db.data.settings[_0x47d87d.user.jid].jadibotmd && !isROwner) {
    _0x47d87d.reply(_0x56cd40.chat, "🚩 Este Comando está deshabilitado por mi creador.", _0x56cd40, rcanal);
    return;
  }
  if (_0x47d87d.user.jid !== global.conn.user.jid) {
    return _0x47d87d.reply(_0x56cd40.chat, "「💭」Solo puedes usar este comando en el bot principal.\n\n• Wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix + command}", _0x56cd40, rcanal);
  }
  const _0x31c6b6 = Buffer.from("Y2QgcGx1Z2lucyA7IG1kNXN1bSBpbmZvLWRvbmFyLmpzIF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz", "base64");
  exec(_0x31c6b6.toString('utf-8'), async (_0xf504ce, _0x4834ca, _0x8d59d0) => {
    let _0x405763 = Buffer.from("aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0JydW5vU29icmluby9UaGVNeXN0aWMtQm90LU1EL21hc3Rlci9wbHVnaW5zL21pcGlsb3Qtc2VyYm90Lmpz", "base64").toString("utf-8");
    let _0x9a0f51 = await fetch(_0x405763).then(_0x4fb94c => _0x4fb94c.text())["catch"](console.error);
    _0x9a0f51 = _0x9a0f51.replace(/\r\n/g, "\n");
    async function _0x542f5d() {
      let _0x19de07 = _0x56cd40.mentionedJid && _0x56cd40.mentionedJid[0x0] ? _0x56cd40.mentionedJid[0x0] : _0x56cd40.fromMe ? _0x47d87d.user.jid : _0x56cd40.sender;
      let _0x1f2687 = '' + _0x19de07.split`@`[0x0];
      let _0x173a26 = _0x13f930[0x0] && _0x13f930[0x0].includes("--code") ? true : !!(_0x13f930[0x1] && _0x13f930[0x1].includes("--code"));
      if (_0x173a26) {
        _0x13f930[0x0] = _0x13f930[0x0].replace("--code", '').trim();
        if (_0x13f930[0x1]) {
          _0x13f930[0x1] = _0x13f930[0x1].replace("--code", '').trim();
        }
        if (_0x13f930[0x0] == '') {
          _0x13f930[0x0] = undefined;
        }
      }
      if (!_0xbbf44.existsSync('./' + jadi + '/' + _0x1f2687)) {
        _0xbbf44.mkdirSync('./' + jadi + '/' + _0x1f2687, {
          'recursive': true
        });
      }
      if (_0x13f930[0x0]) {
        _0xbbf44.writeFileSync('./' + jadi + '/' + _0x1f2687 + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(_0x13f930[0x0], "base64").toString('utf-8')), null, "\t"));
      }
      if (_0xbbf44.existsSync('./' + jadi + '/' + _0x1f2687 + "/creds.json")) {
        let _0xab836b = JSON.parse(_0xbbf44.readFileSync('./' + jadi + '/' + _0x1f2687 + '/creds.json'));
        if (_0xab836b) {
          if (_0xab836b.registered = false) {
            _0xbbf44.unlinkSync('./' + jadi + '/' + _0x1f2687 + "/creds.json");
          }
        }
      }
      const {
        state: _0x261ad5,
        saveState: _0x4aecbf,
        saveCreds: _0x3d35bb
      } = await useMultiFileAuthState('./' + jadi + '/' + _0x1f2687);
      const _0x4a4c47 = new _0x318b69();
      const {
        version: _0x32eff7
      } = await fetchLatestBaileysVersion();
      const _0x200b9e = {
        'printQRInTerminal': false,
        'auth': {
          'creds': _0x261ad5.creds,
          'keys': makeCacheableSignalKeyStore(_0x261ad5.keys, _0x4f591a({
            'level': "silent"
          }))
        },
        'logger': _0x4f591a({
          'level': "silent"
        }),
        'browser': _0x173a26 ? ['Ubuntu', 'Chrome', "20.0.04"] : ['Kotori-Bot', "Safari", "2.0.0"],
        'markOnlineOnConnect': true,
        'generateHighQualityLinkPreview': true,
        'getMessage': async _0x3684b1 => {
          let _0x58b4ed = jidNormalizedUser(_0x3684b1.remoteJid);
          let _0x31795b = await _0x59af36.loadMessage(_0x58b4ed, _0x3684b1.id);
          return _0x31795b?.["message"] || '';
        },
        'msgRetryCounterCache': _0x4a4c47,
        'version': _0x32eff7
      };
      let _0x45ad8a = makeWASocket(_0x200b9e);
      _0x45ad8a.isInit = false;
      _0x45ad8a.uptime = Date.now();
      let _0x478f74 = true;
      async function _0x2302c9(_0xc6c690) {
        const {
          connection: _0x362aaa,
          lastDisconnect: _0x30de7d,
          isNewLogin: _0x2dcc70,
          qr: _0x31d26b
        } = _0xc6c690;
        if (_0x2dcc70) {
          _0x45ad8a.isInit = false;
        }
        if (_0x31d26b && !_0x173a26) {
          _0x47d87d.sendMessage(_0x56cd40.chat, {
            'image': await _0x3b186e.toBuffer(_0x31d26b, {
              'scale': 0x8
            }),
            'caption': "*╭━╴╶╴╶╴╶╴ꖒ╶╴╶╴╶╴╶━╮*\n*│🔥 S E R B O T - S U B B O T 🔥*\n*├╶╴╶ᷟ╴ͤ╶ᷚ╴ͧ╶ͫ╴ͥ╶ᷠ╴̄╶╴ᷨ╶ͦ╴ͭ╶̄╴╶ᷟ╴ͩ╶╴*\n*│ 𝐸𝑠𝑐𝑎𝑛𝑒𝑎 𝑒𝑠𝑡𝑒 𝑄𝑅 𝑝𝑎𝑟𝑎 𝑠𝑒𝑟 𝑢𝑛 𝑆𝑢𝑏 𝐵𝑜𝑡*\n*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴*\n*│💥 𝑷𝒂𝒔𝒐𝒔 𝒑𝒂𝒓𝒂 𝒆𝒔𝒄𝒂𝒏𝒆𝒂𝒓:*\n*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴*\n*│ `1` : 𝐻𝑎𝑔𝑎 𝑐𝑙𝑖𝑐𝑘 𝑒𝑛 𝑙𝑜𝑠 3 𝑝𝑢𝑛𝑡𝑜𝑠*\n*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴*\n*│ `2` : 𝑇𝑜𝑞𝑢𝑒 𝑑𝑖𝑠𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑜𝑠 𝑣𝑖𝑛𝑐𝑢𝑙𝑎𝑑𝑜𝑠*\n*├╶╴╶╴╶╴╶╴╶╴╶╴*\n*│ `3` : 𝐸𝑠𝑐𝑎𝑛𝑒𝑎 𝑒𝑠𝑡𝑒 𝑄𝑅*\n*├╶╴╶╴╶╴╶╴╶╴*\n> *𝑵𝒐𝒕𝒂:* 𝑬𝒔𝒕𝒆 𝒄𝒐𝒅𝒊𝒈𝒐 𝑸𝑹 𝒆𝒙𝒑𝒊𝒓𝒂 𝒆𝒏 30 𝒔𝒆𝒈𝒖𝒏𝒅𝒐𝒔.\n*╰━╴╶╴╶╴╶╴ꖒ╶╴╶╴╶╴╶━╯*"
          }, {
            'quoted': _0x56cd40
          });
        }
        if (_0x31d26b && _0x173a26) {
          let _0x5175a5 = _0x56cd40.sender.split`@`[0x0];
          if (_0x5175a5.startsWith('52')) {
            _0x5175a5 = "521" + _0x5175a5.slice(0x2);
          }
          let _0x1e1ba0 = await _0x45ad8a.requestPairingCode(_0x5175a5);
          _0x47d87d.sendMessage(_0x56cd40.chat, {
            'text': "🚩 S E R B O T - S U B B O T 🚩\n\n*Usa este Código para convertirte en un Sub Bot*\n\n🍟 Pasos:\n\n`1` : Haga click en los 3 puntos\n\n`2` : Toque dispositivos vinculados\n\n`3` : Selecciona Vincular con el número de teléfono\n\n`4` : Escriba el Codigo\n\n> *Nota:* Este Código solo funciona en el número que lo solicito."
          }, {
            'quoted': _0x56cd40
          });
          await delay(0x1388);
          _0x47d87d.sendMessage(_0x56cd40.chat, {
            'text': _0x1e1ba0
          }, {
            'quoted': _0x56cd40
          });
        }
        const _0x9bc059 = _0x30de7d?.["error"]?.["output"]?.["statusCode"] || _0x30de7d?.["error"]?.["output"]?.["payload"]?.["statusCode"];
        if (_0x362aaa === "close") {
          if (_0x45ad8a.user && dataconst[_0x45ad8a.user.id.split('@')] == 0x3) {
            return _0x47d87d.sendMessage(_0x56cd40.chat, {
              'text': "🌵 Se ha alcanzado el limite de reconexiones, por favor intente mas tarde."
            }, {
              'quoted': _0x56cd40
            });
          }
          if (_0x9bc059 == 0x195 || _0x9bc059 == 0x194) {
            _0xbbf44.unlinkSync('./' + jadi + '/' + _0x1f2687 + "/creds.json");
            return _0x542f5d();
          }
          if (_0x9bc059 === DisconnectReason.badSession) {
            _0x47d87d.sendMessage(_0x56cd40.chat, {
              'text': "🌵 La session actual es invalida, tendrás que iniciar session de nuevo."
            }, {
              'quoted': _0x56cd40
            });
            _0xbbf44.rmdirSync('./' + jadi + '/' + _0x1f2687, {
              'recursive': true
            });
          } else {
            if (_0x9bc059 === DisconnectReason.connectionClosed) {
              if (_0x45ad8a.fstop) {
                return _0x47d87d.sendMessage(_0x56cd40.chat, {
                  'text': "🌵 El bot se ha apagado correctamente."
                }, {
                  'quoted': _0x56cd40
                });
              }
              if (!_0x45ad8a.fstop) {
                _0x47d87d.sendMessage(_0x56cd40.chat, {
                  'text': "🚩 La conexión se cerró, se intentará reconectar automaticamente\n" + dataconst[_0x45ad8a.user.id.split('@')] + '/3'
                }, {
                  'quoted': _0x56cd40
                });
              }
              if (!_0x45ad8a.fstop) {
                await _0x5d094d(true)["catch"](console.error);
              }
            } else {
              if (_0x9bc059 === DisconnectReason.connectionLost) {
                _0x47d87d.sendMessage(_0x56cd40.chat, {
                  'text': "🚩 La conexión se cerró, se intentará reconectar automaticamente\n" + dataconst[_0x45ad8a.user.id.split('@')] + '/3'
                }, {
                  'quoted': _0x56cd40
                });
                await _0x5d094d(true)["catch"](console.error);
              } else {
                if (_0x9bc059 === DisconnectReason.connectionReplaced) {
                  _0x47d87d.sendMessage(_0x56cd40.chat, {
                    'text': "🚩 La conexión se reemplazó. Su conexión se cerró*\n\n*⌜⌟ Para volver conectarse use:*\n*◉* " + _0x32d6f2 + _0x58aa9f
                  }, {
                    'quoted': _0x56cd40
                  });
                } else {
                  if (_0x9bc059 === DisconnectReason.loggedOut) {
                    _0x47d87d.sendMessage(_0x56cd40.chat, {
                      'text': "🚩 La session actual se cerró, si desea volver a conectarse tendrá que iniciar nuevamente la session"
                    }, {
                      'quoted': _0x56cd40
                    });
                    return _0xbbf44.rmdirSync('./' + jadi + '/' + _0x1f2687, {
                      'recursive': true
                    });
                  } else {
                    if (_0x9bc059 === DisconnectReason.restartRequired) {
                      await _0x5d094d(true)["catch"](console.error);
                    } else if (_0x9bc059 === DisconnectReason.timedOut) {
                      _0x47d87d.sendMessage(_0x56cd40.chat, {
                        'text': "🚩 La conexión se cerró, se intentará reconectar automaticamente\n" + dataconst[_0x45ad8a.user.id.split('@')] + '/3'
                      }, {
                        'quoted': _0x56cd40
                      });
                      await _0x5d094d(true)["catch"](console.error);
                    } else {
                      _0x47d87d.sendMessage(_0x56cd40.chat, {
                        'text': "🌵 Razón de la desconexión desconocida. " + (_0x9bc059 || '') + ": " + (_0x362aaa || '') + " Por favor reporte al propietario."
                      }, {
                        'quoted': _0x56cd40
                      });
                    }
                  }
                }
              }
            }
          }
          let _0x578cda = global.conns.indexOf(_0x45ad8a);
          if (_0x578cda < 0x0) {
            return console.log("no se encontro");
          }
          delete global.conns[_0x578cda];
          global.conns.splice(_0x578cda, 0x1);
        }
        if (global.db.data == null) {
          loadDatabase();
        }
        if (_0x362aaa == "open") {
          _0x45ad8a.isInit = true;
          global.conns.push(_0x45ad8a);
          await _0x47d87d.sendMessage(_0x56cd40.chat, {
            'text': _0x13f930[0x0] ? "🚩 Reconectado con éxito" : "🚩 Conectado con éxito, para volver a conectarse use " + (_0x32d6f2 + _0x58aa9f) + '*'
          }, {
            'quoted': _0x56cd40
          });
          if (_0x362aaa === "open") {
            dataconst[_0x45ad8a.user.id.split('@')] = 0x1;
            _0x47d87d.sendMessage(_0x56cd40.chat, {
              'text': "🚩 Conectado con éxito.\n🌵 Se está cargando los mensajes...."
            }, {
              'quoted': _0x56cd40
            });
            return console.log(await _0x5d094d(false)["catch"](console.error));
          }
          await sleep(0x1388);
          if (!_0x13f930[0x0]) {
            _0x47d87d.sendMessage(_0x56cd40.chat, {
              'text': _0x32d6f2 + _0x58aa9f + " " + Buffer.from(_0xbbf44.readFileSync('./' + jadi + '/' + _0x1f2687 + "/creds.json"), 'utf-8').toString('base64')
            }, {
              'quoted': _0x56cd40
            });
          }
        }
      }
      setInterval(async () => {
        if (!_0x45ad8a.user) {
          try {
            _0x45ad8a.ws.close();
          } catch {}
          _0x45ad8a.ev.removeAllListeners();
          let _0x595734 = global.conns.indexOf(_0x45ad8a);
          if (_0x595734 < 0x0) {
            return;
          }
          delete global.conns[_0x595734];
          global.conns.splice(_0x595734, 0x1);
        }
      }, 0xea60);
      let _0x107954 = global.handler;
      let _0x5d094d = async function (_0x254aae) {
        try {
          const _0x5e2d01 = await import("../handler.js?update=" + Date.now())["catch"](console.error);
          if (Object.keys(_0x5e2d01 || {}).length) {
            _0x107954 = _0x5e2d01;
          }
        } catch (_0x2aa8b5) {
          console.error(_0x2aa8b5);
        }
        if (_0x254aae) {
          try {
            _0x45ad8a.ws.close();
          } catch {}
          _0x45ad8a.ev.removeAllListeners();
          _0x45ad8a = makeWASocket(_0x200b9e);
          _0x478f74 = true;
        }
        if (_0x45ad8a.user && _0x45ad8a.user.id && !dataconst[_0x45ad8a.user.id.split('@')]) {
          dataconst[_0x45ad8a.user.id.split('@')] = 0x0;
        }
        if (_0x45ad8a.user && _0x45ad8a.user.id && dataconst[_0x45ad8a.user.id.split('@')] && _0x254aae) {
          dataconst[_0x45ad8a.user.id.split('@')]++;
        }
        if (!_0x478f74) {
          _0x45ad8a.ev.off("messages.upsert", _0x45ad8a.handler);
          _0x45ad8a.ev.off("group-participants.update", _0x45ad8a.participantsUpdate);
          _0x45ad8a.ev.off("groups.update", _0x45ad8a.groupsUpdate);
          _0x45ad8a.ev.off("message.delete", _0x45ad8a.onDelete);
          _0x45ad8a.ev.off("call", _0x45ad8a.onCall);
          _0x45ad8a.ev.off("connection.update", _0x45ad8a.connectionUpdate);
          _0x45ad8a.ev.off('creds.update', _0x45ad8a.credsUpdate);
        }
        _0x45ad8a.handler = _0x107954.handler.bind(_0x45ad8a);
        _0x45ad8a.participantsUpdate = _0x107954.participantsUpdate.bind(_0x45ad8a);
        _0x45ad8a.groupsUpdate = _0x107954.groupsUpdate.bind(_0x45ad8a);
        _0x45ad8a.onDelete = _0x107954.deleteUpdate.bind(_0x45ad8a);
        _0x45ad8a.onCall = _0x107954.callUpdate.bind(_0x45ad8a);
        _0x45ad8a.connectionUpdate = _0x2302c9.bind(_0x45ad8a);
        _0x45ad8a.credsUpdate = _0x3d35bb.bind(_0x45ad8a, true);
        _0x45ad8a.ev.on("messages.upsert", _0x45ad8a.handler);
        _0x45ad8a.ev.on("group-participants.update", _0x45ad8a.participantsUpdate);
        _0x45ad8a.ev.on('groups.update', _0x45ad8a.groupsUpdate);
        _0x45ad8a.ev.on("message.delete", _0x45ad8a.onDelete);
        _0x45ad8a.ev.on("call", _0x45ad8a.onCall);
        _0x45ad8a.ev.on("connection.update", _0x45ad8a.connectionUpdate);
        _0x45ad8a.ev.on("creds.update", _0x45ad8a.credsUpdate);
        _0x45ad8a.subreloadHandler = _0x5d094d;
        _0x478f74 = false;
        return true;
      };
      _0x5d094d(false);
    }
    _0x542f5d();
  });
};
handler.help = ['serbot', 'serbot --code'];
handler.tags = ["serbot"];
handler.command = ['jadibot', 'serbot'];
export default handler;
const delay = _0xdf05d7 => new Promise(_0x2656e8 => setTimeout(_0x2656e8, _0xdf05d7));
function sleep(_0x4bf998) {
  return new Promise(_0x3e4f7b => setTimeout(_0x3e4f7b, _0x4bf998));
}