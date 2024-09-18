/*
《✧》Derechos reservados por autor《✧》
- おDiego.xyz (@Dev-Diego)
*/

import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {

if (msg.body.startsWith('search-npmjs')) {
const packageName = msg.body.split(' ')[1];
if (!packageName) {
m.reply('Por favor, proporciona el nombre del paquete que deseas buscar.');
return;
}
try {
const packageInfo = await npmjs.get(packageName);
const response = `**${packageName}**\n`;
response += `Version: ${packageInfo.version}\n`;
response += `Description: ${packageInfo.description}\n`;
response += `Author: ${packageInfo.author.name}\n`;
response += `License: ${packageInfo.license}\n`;
response += `Repository: ${packageInfo.repository.url}\n`;
msg.reply(response);
} catch (error) {
m.reply(`Error al buscar el paquete: ${error.message}`);
}
}
});
client.initialize();

handler.help = ['npmjs']
handler.tags = ['buscador']
handler.command = ['npmjs']
handler.register = true
handler.cookies = 1
export default handler