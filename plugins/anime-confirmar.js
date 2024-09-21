/*
《✧》DERECHOS RESERVADOS POR EL AUTOR 《✧》
- DavidChian (@David-Chian)
*/

import fs from 'fs';

let cooldowns = {};

const obtenerDatos = () => {
    if (fs.existsSync('data.json')) {
        return JSON.parse(fs.readFileSync('data.json', 'utf-8'));
    } else {
        return { usuarios: {}, personajesReservados: [] };
    }
};

const guardarDatos = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
};
const verificarBot = () => {
        try {
            const packageData = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
            if (packageData.name !== 'YaemoriBot-MD') return false;
            if (packageData.repository.url !== 'git+https://github.com/Dev-Diego/YaemoriBot-MD.git') return false;
            return true;
        } catch (error) {
            console.error('✧ Error al leer package.json:', error);
            return false;
        }
    };

let handler = async (m, { conn, isBaileys }) => {
    if (!m.quoted) return m.reply('《✧》Responda a la waifu que quieres reclamar.');

if (!m.quoted.text.includes("┏━━━━━━━━━⪩")) return m.reply('《✧》La waifu tiene que ser enviada por YaemoriBot')


    if (!verificarBot()) {
        await conn.sendMessage(m.chat, '✧ Este comando solo es disponible en YaemoriBot-MD\n◇ https://github.com/Dev-Diego/YaemoriBot-MD', m, rcanal);
        return;
    }
    let userId = m.sender;
    let userName = await conn.getName(userId);
    let characterId = m.quoted.text.match(/<id:(.*)>/)?.[1];
    let data = obtenerDatos();

    if (!characterId) return;

    let reservedCharacter = data.personajesReservados.find(p => p.id === characterId);

    let now = new Date().getTime();
let cooldown = 10 * 60 * 1000; // 10 min
let lastUsed = cooldowns[userId] || 0;

if (now - lastUsed < cooldown) {
    let remainingTime = cooldown - (now - lastUsed);
    let remainingMinutes = Math.floor(remainingTime / 60000);
    let remainingSeconds = Math.floor((remainingTime % 60000) / 1000);
    await m.reply(`《✧》Debes esperar *${remainingMinutes} minutos ${remainingSeconds} segundos* para usar *#c* de nuevo.`);
    return;
}
if (!reservedCharacter) {
    conn.reply(m.chat, `《✧》Lo siento, el personaje no está disponible por el momento.`, m, rcanal, { mentions: [userId] });
    return;
}
let characterInOtherUserInventory = data.usuarios[reservedCharacter.userId]?.characters?.some(char => char.url === reservedCharacter.url);

if (characterInOtherUserInventory) {
    conn.reply(m.chat, `《✧》El personaje ${reservedCharacter.name} ya es de otro usuario y no puedes robarlo.\nPrueba suerte con el comando #robarp`, m, rcanal, { mentions: [userId] });
    cooldowns[userId] = now;
    return;
}

if (reservedCharacter.userId !== userId) {

    setTimeout(async () => {
        let success = Math.random() < 0.5;

        if (success) {
            if (!data.usuarios[userId]) {
                data.usuarios[userId] = { characters: [], characterCount: 0, totalRwcoins: 0 };
            }

            data.usuarios[userId].characters.push({
                name: reservedCharacter.name,
                url: reservedCharacter.url,
                value: reservedCharacter.value
            });
            if (data.usuarios[reservedCharacter.userId]) {
                data.usuarios[reservedCharacter.userId].characters = data.usuarios[reservedCharacter.userId].characters.filter(char => char.url !== reservedCharacter.url);
            }
            data.personajesReservados = data.personajesReservados.filter(p => p.id !== characterId);
            guardarDatos(data);

            let otherUserId = reservedCharacter.userId;
            let otherUserName = await conn.getName(otherUserId);
            await conn.reply(m.chat, `《✧》 Felicidades @${userId.split('@')[0]}, has robado a ${reservedCharacter.name} de @${otherUserId.split('@')[0]}!`, m, { mentions: [userId, otherUserId] });
        } else {
            let otherUserId = reservedCharacter.userId;
            let otherUserName = await conn.getName(otherUserId);

            await conn.reply(m.chat, `《✧》No has podido robar el personaje ${reservedCharacter.name} de @${otherUserId.split('@')[0]}!`, m, { mentions: [userId, otherUserId] });
        }

        cooldowns[userId] = now;
    });

    return;
}

if (!data.usuarios[userId]) {
    data.usuarios[userId] = { characters: [], characterCount: 0, totalRwcoins: 0 };
}

let userData = data.usuarios[userId];
let hasCharacter = userData.characters?.some(char => char.url === reservedCharacter.url);

if (hasCharacter) {
    conn.reply(m.chat, `《✧》Ya tienes el personaje ${reservedCharacter.name}!`, m, rcanal, { mentions: [userId] });
    return;
}
userData.characters.push({
    name: reservedCharacter.name,
    url: reservedCharacter.url,
    value: reservedCharacter.value
});
userData.characterCount++;
userData.totalRwcoins += reservedCharacter.value;
data.usuarios[userId] = userData;
data.personajesReservados = data.personajesReservados.filter(p => p.id !== characterId);
guardarDatos(data);

conn.reply(m.chat, `✰ *${reservedCharacter.name}* ha sido reclamado por *@${userId.split('@')[0]}!*`, m, { mentions: [userId] });

cooldowns[userId] = now;
        }

handler.help = ['c'];
handler.tags = ['anime'];
handler.command = ['c', 'confirmar'];
handler.register = true;

export default handler;