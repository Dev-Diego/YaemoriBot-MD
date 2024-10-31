const {
  useMultiFileAuthState,
  DisconnectReason,
  makeCacheableSignalKeyStore,
  fetchLatestBaileysVersion
} = await import('@whiskeysockets/baileys');
import _0x20577b from 'qrcode';
import _0x4fbd9e from 'node-cache';
import _0x34e6d4 from 'fs';
import 'path';
import _0x356bc4 from 'pino';
import 'util';
import 'ws';
const {
  child,
  spawn,
  exec
} = await import("child_process");
import { makeWASocket } from '../lib/simple.js';
let rtx = 'QR' //qr
let rtx2 = 'CODE' //code
if (global.conns instanceof Array) {
  console.log();
} else {
  global.conns = [];
}
let handler = async (_0xeda6a0, {
  conn: _0x411c82,
  args: _0x3b7f49,
  usedPrefix: _0x477024,
  command: _0x41db6e,
  isOwner: _0x58e990
}) => {
  if (!global.db.data.settings[_0x411c82.user.jid].jadibotmd) {
    return _0xeda6a0.reply('comando off');
  }
  const _0x3c838b = _0x3b7f49[0x0] && /(--code|code)/.test(_0x3b7f49[0x0].trim()) ? true : !!(_0x3b7f49[0x1] && /(--code|code)/.test(_0x3b7f49[0x1].trim()));
  let _0x4ddb20;
  let _0x143a36;
  let _0x5662d6;
  let _0xb91a18 = global.db.data.users[_0xeda6a0.sender];
  let _0x5e17be = _0xeda6a0.mentionedJid && _0xeda6a0.mentionedJid[0x0] ? _0xeda6a0.mentionedJid[0x0] : _0xeda6a0.fromMe ? _0x411c82.user.jid : _0xeda6a0.sender;
  let _0x37cde1 = '' + _0x5e17be.split`@`[0x0];
  if (_0x3c838b) {
    _0x3b7f49[0x0] = _0x3b7f49[0x0].replace(/^--code$|^code$/, '').trim();
    if (_0x3b7f49[0x1]) {
      _0x3b7f49[0x1] = _0x3b7f49[0x1].replace(/^--code$|^code$/, '').trim();
    }
    if (_0x3b7f49[0x0] == '') {
      _0x3b7f49[0x0] = undefined;
    }
  }
  if (!_0x34e6d4.existsSync("./GataJadiBot/" + _0x37cde1)) {
    _0x34e6d4.mkdirSync("./GataJadiBot/" + _0x37cde1, {
      'recursive': true
    });
  }
  if (_0x3b7f49[0x0] && _0x3b7f49[0x0] != undefined) {
    _0x34e6d4.writeFileSync("./GataJadiBot/" + _0x37cde1 + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x3b7f49[0x0], "base64").toString('utf-8')), null, "\t"));
  } else {
    '';
  }
  if (_0x34e6d4.existsSync("./GataJadiBot/" + _0x37cde1 + "/creds.json")) {
    let _0x2b0e02 = JSON.parse(_0x34e6d4.readFileSync("./GataJadiBot/" + _0x37cde1 + '/creds.json'));
    if (_0x2b0e02) {
      if (_0x2b0e02.registered = false) {
        _0x34e6d4.unlinkSync("./GataJadiBot/" + _0x37cde1 + "/creds.json");
      }
    }
  }
  const _0xfb6d5f = Buffer.from("Y2QgcGx1Z2lucyA7IG1kNXN1bSBpbmZvLWRvbmFyLmpzIF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz", 'base64');
  exec(_0xfb6d5f.toString('utf-8'), async (_0x455d49, _0x2265ee, _0x31d79d) => {
    const _0x4d6929 = Buffer.from("CkphZGlib3QsIEhlY2hvIHBvciBAQWlkZW5fTm90TG9naWM", "base64");
    async function _0xa37deb() {
      let _0x233756 = _0xeda6a0.mentionedJid && _0xeda6a0.mentionedJid[0x0] ? _0xeda6a0.mentionedJid[0x0] : _0xeda6a0.fromMe ? _0x411c82.user.jid : _0xeda6a0.sender;
      let _0x526af4 = '' + _0x233756.split`@`[0x0];
      if (!_0x34e6d4.existsSync("./GataJadiBot/" + _0x526af4)) {
        _0x34e6d4.mkdirSync('./GataJadiBot/' + _0x526af4, {
          'recursive': true
        });
      }
      if (_0x3b7f49[0x0]) {
        _0x34e6d4.writeFileSync("./GataJadiBot/" + _0x526af4 + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x3b7f49[0x0], 'base64').toString('utf-8')), null, "\t"));
      } else {
        '';
      }
      let {
        version: _0x2b04a8,
        isLatest: _0x90fc00
      } = await fetchLatestBaileysVersion();
      const _0x1457b4 = _0x324e48 => {};
      const _0x3008e8 = new _0x4fbd9e();
      const {
        state: _0x21aa8c,
        saveState: _0x3ce148,
        saveCreds: _0x24d395
      } = await useMultiFileAuthState("./GataJadiBot/" + _0x526af4);
      const _0x6274e5 = {
        'printQRInTerminal': false,
        'logger': _0x356bc4({
          'level': "silent"
        }),
        'auth': {
          'creds': _0x21aa8c.creds,
          'keys': makeCacheableSignalKeyStore(_0x21aa8c.keys, _0x356bc4({
            'level': "silent"
          }))
        },
        'msgRetry': _0x1457b4,
        'msgRetryCache': _0x3008e8,
        'version': [0x2, 0xbb8, 0x3c8d6c7b],
        'syncFullHistory': true,
        'browser': _0x3c838b ? ['Ubuntu', "Chrome", "110.0.5585.95"] : ["YaemoriBot-MD (Sub Bot)", 'Chrome', "2.0.0"],
        'defaultQueryTimeoutMs': undefined,
        'getMessage': async _0x291c38 => {
          if (store) {}
          return {
            'conversation': 'YaemoriBot-MD'
          };
        }
      };
      let _0x47e397 = makeWASocket(_0x6274e5);
      _0x47e397.isInit = false;
      let _0x4db97a = true;
      async function _0x1a534a(_0x1d29b0) {
        const {
          connection: _0x76f83d,
          lastDisconnect: _0x62dd6,
          isNewLogin: _0x2ca163,
          qr: _0x32b16e
        } = _0x1d29b0;
        if (_0x2ca163) {
          _0x47e397.isInit = false;
        }
        if (_0x32b16e && !_0x3c838b) {
          _0x5662d6 = await _0x411c82.sendMessage(_0xeda6a0.chat, {
            'image': await _0x20577b.toBuffer(_0x32b16e, {
              'scale': 0x8
            }),
            'caption': rtx + "\n" + _0x4d6929.toString("utf-8")
          }, {
            'quoted': _0xeda6a0
          });
          setTimeout(() => {
            _0x411c82.sendMessage(_0xeda6a0.sender, {
              'delete': _0x5662d6.key
            });
          }, 0x7530);
          return;
        }
        if (_0x32b16e && _0x3c838b) {
          _0x4ddb20 = await _0x411c82.sendMessage(_0xeda6a0.chat, {
            'text': rtx2 + "\n" + _0x4d6929.toString("utf-8")
          }, {
            'quoted': _0xeda6a0
          });
          await sleep(0xbb8);
          let _0x3a9ea8 = await _0x47e397.requestPairingCode(_0xeda6a0.sender.split`@`[0x0]);
          _0x143a36 = await _0xeda6a0.reply(_0x3a9ea8);
        }
        setTimeout(() => {
          _0x411c82.sendMessage(_0xeda6a0.sender, {
            'delete': _0x4ddb20.key
          });
        }, 0x7530);
        setTimeout(() => {
          _0x411c82.sendMessage(_0xeda6a0.sender, {
            'delete': _0x143a36.key
          });
        }, 0x7530);
        const _0x11666b = _0x62dd6?.["error"]?.["output"]?.["statusCode"] || _0x62dd6?.["error"]?.["output"]?.['payload']?.["statusCode"];
        console.log(_0x11666b);
        const _0x161191 = async _0x379486 => {
          if (!_0x379486) {
            try {
              _0x47e397.ws.close();
            } catch {}
            _0x47e397.ev.removeAllListeners();
            let _0x3e7a81 = global.conns.indexOf(_0x47e397);
            if (_0x3e7a81 < 0x0) {
              return;
            }
            delete global.conns[_0x3e7a81];
            global.conns.splice(_0x3e7a81, 0x1);
          }
        };
        const _0x245313 = _0x62dd6?.['error']?.['output']?.["statusCode"] || _0x62dd6?.["error"]?.['output']?.['payload']?.['statusCode'];
        if (_0x76f83d === "close") {
          console.log(_0x245313);
          if (_0x245313 == 0x195) {
            await _0x34e6d4.unlinkSync("./GataJadiBot/" + _0x526af4 + '/creds.json');
            return await _0xeda6a0.reply('🚩 Reenvia nuevamente el comando.');
          }
          if (_0x245313 === DisconnectReason.restartRequired) {
            _0xa37deb();
            return console.log('lenguajeGB.smsConexionreem()');
          } else {
            if (_0x245313 === DisconnectReason.loggedOut) {
              sleep(0xfa0);
              return _0xeda6a0.reply('lenguajeGB.smsJBConexionClose2()');
            } else {
              if (_0x245313 == 0x1ac) {
                await _0x161191(false);
                return _0xeda6a0.reply('lenguajeGB.smsJBConexion()');
              } else {
                if (_0x245313 === DisconnectReason.connectionLost) {
                  await _0xa37deb();
                  return console.log('lenguajeGB.smsConexionperdida()');
                } else {
                  if (_0x245313 === DisconnectReason.badSession) {
                    return await _0xeda6a0.reply('lenguajeGB.smsJBConexionClose()');
                  } else {
                    if (_0x245313 === DisconnectReason.timedOut) {
                      await _0x161191(false);
                      return console.log('lenguajeGB.smsConexiontiem()');
                    } else {
                      console.log('Conexión desconocida');
                    }
                  }
                }
              }
            }
          }
        }
        if (global.db.data == null) {
          loadDatabase();
        }
        if (_0x76f83d == "open") {
          _0x47e397.isInit = true;
          global.conns.push(_0x47e397);
          await _0x411c82.sendMessage(_0xeda6a0.chat, {
            'text': _0x3b7f49[0x0] ? 'Conectado' : 'Conectado' + (" " + (_0x477024 + _0x41db6e))
          }, {
            'quoted': _0xeda6a0
          });
          let _0xdb3feb = ("\n👤 *Usuario:* " + (_0xeda6a0.pushName || 'Anónimo') + "\n🗃️ *Registrado:* " + (_0xb91a18.registered ? 'Si' : 'No') + "\n✅ *Verificación:* " + (_0xb91a18.registered ? _0xb91a18.name : 'No') + "\n🔑 *Método de conexión:* " + (_0x3c838b ? "Código de 8 dígitos" : "Código QR") + "\n💻 *Browser:* " + (_0x3c838b ? "Ubuntu" : 'Chrome') + "\n🐈 *Bot:* " + packname + "\n⭐ *Versión del bot:* `" + vs + "`\n💫 *Versión sub bot:* `" + vsJB + "`\n\n> *¡Conviértete en sub-bot ahora!*\nwa.me/" + _0xeda6a0.sender.split`@`[0x0] + '&text=' + (_0x477024 + _0x41db6e) + "\n").trim();
          let _0x17438f = await _0x47e397.profilePictureUrl(_0x233756, 'image')["catch"](_0x416dd6 => gataMenu.getRandom());
          await sleep(0xbb8);
          await _0x411c82.sendMessage("120363349916000764@newsletter", {
            'text': _0xdb3feb,
            'contextInfo': {
              'externalAdReply': {
                'title': "【 🔔 Notificación General 🔔 】",
                'body': "🙀 ¡Nuevo sub-bot encontrado!",
                'thumbnailUrl': _0x17438f,
                'sourceUrl': redes,
                'mediaType': 0x1,
                'showAdAttribution': false,
                'renderLargerThumbnail': false
              }
            }
          }, {
            'quoted': null
          });
          await sleep(0xbb8);
          await joinChannels(_0x47e397);
          if (!_0x3b7f49[0x0]) {
            _0x411c82.sendMessage(_0xeda6a0.chat, {
              'text': _0x477024 + _0x41db6e + " " + Buffer.from(_0x34e6d4.readFileSync("./GataJadiBot/" + _0x526af4 + '/creds.json'), 'utf-8').toString('base64')
            }, {
              'quoted': _0xeda6a0
            });
          }
        }
      }
      setInterval(async () => {
        if (!_0x47e397.user) {
          try {
            _0x47e397.ws.close();
          } catch (_0x13cf7c) {
            console.log(await _0x13f0d4(true)['catch'](console.error));
          }
          _0x47e397.ev.removeAllListeners();
          let _0x45ac95 = global.conns.indexOf(_0x47e397);
          if (_0x45ac95 < 0x0) {
            return;
          }
          delete global.conns[_0x45ac95];
          global.conns.splice(_0x45ac95, 0x1);
        }
      }, 0xea60);
      let _0x146d71 = await import('../handler.js');
      let _0x13f0d4 = async function (_0x5f0803) {
        try {
          const _0x7d52c7 = await import("../handler.js?update=" + Date.now())['catch'](console.error);
          if (Object.keys(_0x7d52c7 || {}).length) {
            _0x146d71 = _0x7d52c7;
          }
        } catch (_0x57f179) {
          console.error(_0x57f179);
        }
        if (_0x5f0803) {
          const _0x2bcad1 = _0x47e397.chats;
          try {
            _0x47e397.ws.close();
          } catch {}
          _0x47e397.ev.removeAllListeners();
          _0x47e397 = makeWASocket(_0x6274e5, {
            'chats': _0x2bcad1
          });
          _0x4db97a = true;
        }
        if (!_0x4db97a) {
          _0x47e397.ev.off("messages.upsert", _0x47e397.handler);
          _0x47e397.ev.off("group-participants.update", _0x47e397.participantsUpdate);
          _0x47e397.ev.off("groups.update", _0x47e397.groupsUpdate);
          _0x47e397.ev.off("message.delete", _0x47e397.onDelete);
          _0x47e397.ev.off("call", _0x47e397.onCall);
          _0x47e397.ev.off("connection.update", _0x47e397.connectionUpdate);
          _0x47e397.ev.off("creds.update", _0x47e397.credsUpdate);
        }
        _0x47e397.welcome = lenguajeGB.smsWelcome();
        _0x47e397.bye = lenguajeGB.smsBye();
        _0x47e397.spromote = lenguajeGB.smsSpromote();
        _0x47e397.sdemote = lenguajeGB.smsSdemote();
        _0x47e397.sDesc = lenguajeGB.smsSdesc();
        _0x47e397.sSubject = lenguajeGB.smsSsubject();
        _0x47e397.sIcon = lenguajeGB.smsSicon();
        _0x47e397.sRevoke = lenguajeGB.smsSrevoke();
        _0x47e397.handler = _0x146d71.handler.bind(_0x47e397);
        _0x47e397.participantsUpdate = _0x146d71.participantsUpdate.bind(_0x47e397);
        _0x47e397.groupsUpdate = _0x146d71.groupsUpdate.bind(_0x47e397);
        _0x47e397.onDelete = _0x146d71.deleteUpdate.bind(_0x47e397);
        _0x47e397.onCall = _0x146d71.callUpdate.bind(_0x47e397);
        _0x47e397.connectionUpdate = _0x1a534a.bind(_0x47e397);
        _0x47e397.credsUpdate = _0x24d395.bind(_0x47e397, true);
        const _0x1a9360 = new Date();
        const _0x20164c = new Date(_0x47e397.ev * 0x3e8);
        if (_0x1a9360.getTime() - _0x20164c.getTime() <= 0x493e0) {
          console.log("Leyendo mensaje entrante:", _0x47e397.ev);
          Object.keys(_0x47e397.chats).forEach(_0x3e4f75 => {
            _0x47e397.chats[_0x3e4f75].isBanned = false;
          });
        } else {
          console.log(_0x47e397.chats, "Omitiendo mensajes en espera.", _0x47e397.ev);
          Object.keys(_0x47e397.chats).forEach(_0x56fbf4 => {
            _0x47e397.chats[_0x56fbf4].isBanned = true;
          });
        }
        _0x47e397.ev.on("messages.upsert", _0x47e397.handler);
        _0x47e397.ev.on("group-participants.update", _0x47e397.participantsUpdate);
        _0x47e397.ev.on("groups.update", _0x47e397.groupsUpdate);
        _0x47e397.ev.on('message.delete', _0x47e397.onDelete);
        _0x47e397.ev.on('call', _0x47e397.onCall);
        _0x47e397.ev.on('connection.update', _0x47e397.connectionUpdate);
        _0x47e397.ev.on('creds.update', _0x47e397.credsUpdate);
        _0x4db97a = false;
        return true;
      };
      _0x13f0d4(false);
    }
    _0xa37deb();
  });
};
handler.help = ['jadibot', "serbot", 'getcode', "rentbot"];
handler.tags = ["jadibot"];
handler.command = ['jadibot', 'serbot', 'rentbot'];
handler.register = true;
export default handler;
function sleep(_0xb9616e) {
  return new Promise(_0x4f3972 => setTimeout(_0x4f3972, _0xb9616e));
}
async function joinChannels(_0x14a02b) {
  for (const _0x5c8cbf of Object.values(global.ch)) {
    await _0x14a02b.newsletterFollow(_0x5c8cbf)["catch"](() => {});
  }
}