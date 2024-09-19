const handler = async (m, {conn}) => {
  conn.reply(m.chat, text, m, fake);
};
handler.help = ['infosala'];
handler.tags = ['ff'];
handler.command = ['habilidades', 'infosala', 'infoalcrear', 'reglas'];
handler.group = true;
handler.register = true;
export default handler;

global.text = `《✧》 *Información al crear la sala*

✎ *Habilidad Activa*: Alok
✎ *Habilidades pasiva:* Moco, Kelly y Maxim
✎ Primera ronda desert, despues no vale.
✎ Armas: Solo Ump
✎ 1M 10 Equipo

《✧》 *Prohibido:* 
✎ Alturas: Solo cajas, autos y containers (Montaña de mill parte alta no vale)
✎ No tirar granada.


✎ Primera sala: rival
✎ Segunda: clan
✎ Tercera: perdedor de primera

✎ Creación de sala: 200Hp
✎ Aditamento: no
✎ Airdrop: no
✎ Airdrop cibernetico: no
✎ Atributos del arma: no
✎ Municiones limitadas: si

《✧》 *Sala avanzada:*
✎ Desert
✎ Ump
✎ M10
✎ Pared gloo
✎ Caja de reparacion
✎ Casco y chaleco nivel 2
✎ Hongo nivel 3
`;