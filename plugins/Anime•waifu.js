var handler = async (m, { conn, usedPrefix, command, text }) => {

// Lista de waifus, pronto se agrega en json
const waifus = [
  { nombre: 'Rem', imagen: imagen1 },
  { nombre: 'Mikasa', imagen: imagen2 },
  { nombre: 'Asuna', imagen: imagen3 },
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