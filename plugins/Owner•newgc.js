let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('Por favor, proporciona un nombre para el grupo.');
  
  try {
    m.reply('Creando grupo, espera un momento...');

    // Crear el grupo
    let group = await conn.groupCreate(text, [m.sender]);

    // Obtener el enlace del grupo
    let link = await conn.groupInviteCode(group.gid);
    let url = 'https://chat.whatsapp.com/' + link;

    // Enviar el enlace al remitente
    m.reply(`Grupo creado con éxito. Aquí está el enlace de invitación:\n${url}`);
  } catch (e) {
    m.reply(`❌ No se pudo crear el grupo. Es posible que la persona no esté agregada. Enviando invitación...`);
    
    // Obtener el enlace del grupo y enviar invitación si hay error
    if (e.contextInfo) {
      let link = await conn.groupInviteCode(e.contextInfo.gid);
      let url = 'https://chat.whatsapp.com/' + link;
      m.reply(`Únete al grupo usando este enlace:\n${url}`);
    }
  }
};

handler.help = ['creargc *<nombre>*'];
handler.tags = ['owner'];
handler.command = ['newgc', 'gcnew'];
handler.owner = true;

export default handler;