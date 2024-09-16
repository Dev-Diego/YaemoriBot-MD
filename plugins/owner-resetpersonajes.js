import fs from 'fs';
const obtenerDatos = () => {
    if (fs.existsSync('data.json')) {
        return JSON.parse(fs.readFileSync('data.json', 'utf-8'))
    } else {
        return { usuarios: {}, personajesReservados: [] }
    }
};
const guardarDatos = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2))
};
const tagUser = (id) => '@' + id.split('@')[0]

let handler = async (m, { conn }) => {
    let data = obtenerDatos()  
    let mentionedJid = m.mentionedJid && m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted && m.quoted.sender 
            ? m.quoted.sender 
            : null
    if (!mentionedJid) {
        conn.reply(m.chat, '🚩 Etiqueta al usuario.', m, rcanal)
        return
    }

    if (!data.usuarios[mentionedJid]) {
        conn.reply(m.chat, `El usuario ${tagUser} no tiene personajes 😹🫵.`, m, {mentions: [m.sender]})
        return
        }

    data.usuarios[mentionedJid].characters = [];
    data.usuarios[mentionedJid].characterCount = 0;
    data.usuarios[mentionedJid].totalRwcoins = 0;
    guardarDatos(data)

    conn.reply(m.chat, `🚩 El usuario ${tagUser} ha sido reseteado. Todos sus personajes y monedas han sido eliminados.`, m, {mentions: [m.sender]})};

handler.help = ['resetpersonajes']
handler.tags = ['owner']
handler.command = ['resetpersonajes', 'resetp', 'eliminarpersonajes', 'eliminarp']
handler.group = true
handler.rowner = true
export default handler