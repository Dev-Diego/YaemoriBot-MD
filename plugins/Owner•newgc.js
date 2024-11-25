let handler = async (m, { conn, text }) => {

if (!text) return m.reply('🚩 Ingresa un nombre para el grupo.');
    
try {
m.reply('🚩 *Creando grupo*');
let group = await conn.groupCreate(text, [m.sender]);
let link = await conn.groupInviteCode(group.gid);
m.reply(`🚩 Grupo creado con éxito. Aquí está el enlace de invitación: https://chat.whatsapp.com/${link}`);
} catch (e) {
m.reply(`🚩 Ocurrió un error al crear el grupo.`);
};
}

handler.help = ['grupocrear <nombre>'];
handler.tags = ['owner'];
handler.command = ['creargc', 'newgc', 'creargrupo', 'grupocrear'];
handler.rowner = true;
handler.register = true;

export default handler;