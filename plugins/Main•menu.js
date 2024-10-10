import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import ws from 'ws';
let uniqueUsers = new Map();

let tags = {
  'main': 'MENÚ - INFO',
  'buscador': 'MENÚ - BUSQUEDAS',
  'fun': 'MENÚ - JUEGOS',
  'gacha': 'MENÚ - GACHA',
  'serbot': 'MENÚ - SUB BOTS',
  'rpg': 'MENÚ - RPG',
  'rg': 'MENÚ - REGISTRO',
  'xp': 'MENÚ - EXP',
  'sticker': 'MENÚ - STICKERS',
  'anime': 'MENÚ - ANIMES',
  'database': 'MENÚ - DATABASE',
  'fix': 'MENÚ - FIXMSGESPERA',
  'grupo': 'MENÚ - GRUPOS',
  'nable': 'MENÚ - ON/OFF', 
  'descargas': 'MENÚ - DESCARGAS',
  'tools': 'MENÚ - HERRAMIENTAS',
  'info': 'MENÚ - INFORMACIÓN',
  'nsfw': 'MENÚ - NSFW', 
  'owner': 'MENÚ - OWNER', 
  'audio': 'MENÚ - AUDIOS', 
  'ai': 'MENÚ - AI',
  'transformador': 'MENÚ - CONVERTIDORES',
}

switch (true) {     
case isCommand1:
try{

const defaultMenu = {
  before: `© mᥱᥒᥙ ᥆𝖿іᥴіᥲᥣ ძᥱ ᥡᥲᥱm᥆rіᑲ᥆𝗍 ☁️

*•/• Info usuario •/•*

🌸 Cliente » \`\`\`%name\`\`\`
✨️ Exp » \`\`\`%exp\`\`\`
🍪 Galletas » \`\`\`%cookies\`\`\`
🛡 Nivel » \`\`\`%level\`\`\`
💫 Rango » \`\`\`%role\`\`\`

*•/• Info del bot •/•*

👑 Made by » \`\`\`@DevDiego\`\`\`
🚩 Bot » \`\`\`%botofc\`\`\`
📆 Fecha » \`\`\`%fecha\`\`\`
🕖 Actividad » \`\`\`%muptime\`\`\`
👤 Usuarios » \`\`\`%totalreg\`\`\`

\t*L I S T A  -  D E  -  C O M A N D O S* 
`.trimStart(),
    header: '*•/• %category​ •/•*\n',
  body: '✰ %cmd',
  footer: '',
  after: `> ${dev}`,

}   

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
const isCommand1 = /^(allmenu))$/i.test(command)
const isCommand2 = /^(menu)$/i.test(command)
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, cookies, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        cookies: plugin.cookies,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
botofc: (conn.user.jid == global.conn.user.jid ? 'Oficial' : 'SubBot'), 
fecha: moment.tz('America/Bogota').format('DD/MM/YY'), 
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
greeting, level, cookies, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

let category = "video"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const rlink = db_.links[category][random]
global.vid = rlink
const response = await fetch(vid)
const gif = await response.buffer()

const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

const pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/AdwJ.jpg')

//await conn.reply(m.chat, '*Próximamente se remitirá el menú.*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: packname, body: dev, sourceUrl: redeshost, thumbnail: await (await fetch(pp)).buffer() }}})

switch (true) {     
case isCommand1:
try{

await m.react('⭐️') 

await conn.sendMessage(m.chat, { video: { url: vid }, caption: text.trim(), contextInfo: { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363263466636910@newsletter', newsletterName: '© ᥡᥲᥱm᥆rіᑲ᥆𝗍 - ᥴһᥲᥒᥒᥱᥣ 🌱', serverMessageId: -1, }, forwardingScore: 999, externalAdReply: { title: 'ᥡᥲᥱm᥆rі ᑲ᥆𝗍 ᰔᩚ', body: dev, thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false,
}, }, gifPlayback: true, gifAttribution: 0 }, { quoted: fkontak })

  } catch (e) {
    await m.react(error)
    conn.reply(m.chat, '「✘」 *Ocurrió un error al enviar el menú*', m, fake, )
    throw e
  }}

break

case isCommand2:
try{

    m.react("⭐️");
    let menu = ``;

    let txt =  `િ ฺ࣭࣪͘ \`ʜᴏʟᴀ\` p𝖾𝗋᷼𝗌᷼♤𝗇᷼𝗂𝗍α    𝗅𝗂𝗇𝖽α   (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠✧⁠*⁠。
 b𝗂𝖾𝗇𝖾𝗇𝗂𝖽𝗈   𝖺   ყαҽɱσɾι Ⴆσƚ꒱㇀  🌸‛᩠⋆  ⪦┽  :
 •ㅤ༚      𝆹ㅤㅤ•ㅤ༚         𝆹ㅤㅤㅤ•ᨘ
`
txt+= '.͜°˖ `ᴄʀᴇᴀᴅᴏʀ ::`' + ` DevDiego\n`;
txt+= '.͜°˖ `ʙᴏᴛ ::`' + ` YaemoriBot-MD\n`;
txt+= '.͜°˖ `ꜰᴇᴄʜᴀ ::`' + ` ${moment.tz('America/Bogota').format('DD/MM/YY')}\n`;
txt+= '.͜°˖ `ᴘʀᴇꜰɪᴊᴏ ::`' + ` [ ${usedPrefix} ]\n`;
txt+= '.͜°˖ `ᴜꜱᴜᴀʀɪᴏꜱ ::`' + ` ${rtotal}\n`;
txt+= '.͜°˖ `ᴄᴏɴᴛᴀᴄᴛᴏ ::` #owner\n\n';
txt+= '.͜°˖ `ᴀᴄᴛɪᴠᴏ ::`' + ` ${uptime}\n`;
txt+= "✬✭✰✬"

    let listSections = [];

        listSections.push({
        title: `✎ SELECCIÓNA LO QUE NECESITES`, highlight_label: `Popular YaemoriBot`,
        rows: [
            {
                header: "𓆩࿔ྀુ⃟🌹⃟𝘼𝙐𝙏𝙊 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍 ╎✅",
                title: "",
                description: `Verificacion Automáticamente`,
                id: `.reg ${nombre}.17`,
            },
            {
                header: "𓆩࿔ྀુ⃟🌹⃟𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 ╎ 🍿ꪳ͢",
                title: "",
                description: `𝘮𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘰𝘮𝘱𝘭𝘦𝘵𝘰`,
                id: `#allmenu`,
            },
            {
                header: "𓆩࿔ྀુ⃟🌹⃟𝙈𝙀𝙉𝙐𝙎 𝙉𝙎𝙁𝙒 ╎🔞",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘢𝘭𝘪𝘦𝘯𝘵𝘦`,
                id: `#hornymenu`,
            },
            {
                header: "👑⃝⃤҈𝙂𝙍𝙐𝙋𝙊𝙎 ☁️",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `#grupos`,
            },
        ],
    });

    let vid = "https://qu.ax/yddg.jpg";
    let img = "https://qu.ax/mqmGX.jpg";
    let img2 = "https://qu.ax/EhQB.jpg";

    await conn.sendListB(m.chat, menu, txt, ` 𓏲᭨ ̤̤֟✧⏤͟͞ू⃪٭ۣۜ ፝͜⁞M͢ᴇɴᴜs۫۫۫۫۫۫۫۫ ᭄፝🍟𑜟꙲𒁑⁩`, [vid, img, img2].getRandom(), listSections, estilo);
};

break

case cmd == "abrazar":

break
}    
break
}}

handler.command = ["allmenu", "menucompleto", "menu", "help", "menú"];

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;