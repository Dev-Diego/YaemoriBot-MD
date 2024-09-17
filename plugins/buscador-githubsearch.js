/*import fetch from 'node-fetch'
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un repositorio de github*\n\nEjemplo, ${usedPrefix + command} Ai-Yaemori`, m, rcanal)
try {
await m.react(rwait)
const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
q: text,
}))
const json = await res.json()
if (res.status !== 200) throw json
let str = json.items.map((repo, index) => {
return `
🍟 *Resultado:* ${1 + index}
🔗 *Enlace:* ${repo.html_url}
👑 *Creador:* ${repo.owner.login}
🍟 *Nombre:* ${repo.name}
🫂 *Creado:* ${formatDate(repo.created_at)}
💥 *Actualizado:* ${formatDate(repo.updated_at)}
👀 *Visitas:* ${repo.watchers}
✨️ *Bifurcado:* ${repo.forks}
🌟 *Estrellas:* ${repo.stargazers_count}
🍂 *Issues:* ${repo.open_issues}
🍭 *Descripción:* ${repo.description ? `${repo.description}` : 'Sin Descripción'}
⭐️ *Clone:* ${repo.clone_url}
`.trim()}).join('\n\n─────────────────\n\n') 
// await m.react(done)
let img = await (await fetch(json.items[0].owner.avatar_url)).buffer()
//await conn.sendMini(m.chat, '🍟 G I T H U B - S E A R C H 🍟', dev, str, img, img, redes, estilo)
await conn.reply(m.chat, str, m, rcanal)
await m.react(done)
} catch {
await m.react(error)
conn.reply(m.chat, '🚩 *No se encontró resultados de:* ' + text, m, fake)}}
handler.help = ['githubsearch']
handler.tags = ['buscador']
handler.command = ['githubsearch']

handler.register = true

export default handler 

function formatDate(n, locale = 'es') {
const d = new Date(n)
return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})}*/

import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un repositorio de github*\n\nEjemplo, ${usedPrefix + command} Ai-Yaemori`, m, rcanal);
const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
q: text,
}));
const json = await res.json();
if (res.status !== 200) throw json;
//const imagen = await conn.getFile(json.items[0].owner.avatar_url).data
const str = json.items.map((repo, index) => {
return `
*${1 + index}. ${repo.full_name}${repo.fork ? ' (fork)' : ''}*
🔗 *Url:* ${repo.html_url}
📅 *Creado el:* ${formatDate(repo.created_at)}
🔄 *Actualizado el:* ${formatDate(repo.updated_at)}
📥 *Clone:* $ git clone ${repo.clone_url}
👁 ${repo.watchers} ◉ 🍴 ${repo.forks} ◉ ⭐ ${repo.stargazers_count} ◉ ❓ 
${repo.description ? `📝 *Descripción:*\n${repo.description}` : ''}
`.trim()}).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');

conn.sendMessage(m.chat, {text: str.trim()}, {quoted: estilo})
//conn.sendMessage(m.chat, {text: str.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": packname, "containsAutoReply": true, "mediaType": 1, "thumbnail": icons, "mediaUrl": redes, "sourceUrl": redes}}}, {quoted: estilo});  
};

handler.help = ['githubsearch'];
handler.tags = ['buscador'];
handler.command = ['githubsearch'];

handler.register = true;

export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}