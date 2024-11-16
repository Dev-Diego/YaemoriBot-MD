var handler = async (m, { conn, usedPrefix, command, text }) => {

// Lista de waifus, pronto se agrega en json
const waifus = [
  { nombre: 'Rem', imagen: '(link unavailable)' },
  { nombre: 'Mikasa', imagen: '(link unavailable)' },
  { nombre: 'Asuna', imagen: '(link unavailable)' },
  // Agrega más waifus a la lista
];

function obtenerWaifuAleatoria() {
  const index = Math.floor(Math.random() * waifus.length);
  return waifus[index];
}

async function rollWaifu(msg) {
  const waifu = obtenerWaifuAleatoria();
  const respuesta = `Tu waifu es... ${waifu.nombre}!`;
  const imagen = waifu.imagen;

conn.sendFile(m.chat, imagen, 'rollwaifu.jpg', respuesta, fkontak, m, null, rcanal)}

handler.help = ['rollwaifu'] 
handler.tags = ['gacha'] 
handler.command = ['rollwaifu', 'rw'] 

export default handler