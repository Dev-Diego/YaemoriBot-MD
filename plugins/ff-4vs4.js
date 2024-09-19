const handler = async (m, { conn, groupMetadata, usedPrefix, args }) => {
    // Verificar si se proporcionaron los argumentos necesarios
    if (args.length < 2) {
         await  conn.reply(m.chat, `🚩 Debes proporcionar la hora (HH:MM) y el pais (CO, CL, AG, MX)\n\nEjemplo:\n» ${usedPrefix}4vs4 10:10 CO`, m, rcanal);
        return;
    }

    // Validar el formato de la hora
    const horaRegex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
    if (!horaRegex.test(args[0])) {
         await  conn.reply(m.chat, `🚩 Debes proporcionar la hora (HH:MM) y el pais (CO, CL, AG, MX)\n\nEjemplo:\n» ${usedPrefix}4vs4 10:10 CO`, m, rcanal);
        return;
    }

    const horaUsuario = args[0]; // Hora proporcionada por el usuario
    const pais = args[1].toUpperCase(); // País proporcionado por el usuario

    // Definir la diferencia horaria de cada país con respecto a México
    const diferenciasHorarias = {
        MX: 0, // México tiene la misma hora
        CO: 1, // Colombia tiene una hora más
        CL: 2, // Chile tiene dos horas más
        AG: 3  // Argentina tiene tres horas más
    };

    if (!(pais in diferenciasHorarias)) {
        conn.reply(m.chat, '🚩 País no válido. Usa MX para México, CO para Colombia, CL para Chile o AG para Argentina.', m, rcanal);
        return;
    }

    // Obtener la diferencia horaria del país seleccionado
    const diferenciaHoraria = diferenciasHorarias[pais];

    // Calcular las cuatro horas consecutivas en cada país según la hora proporcionada y la diferencia horaria
    const hora = parseInt(horaUsuario.split(':')[0], 10);
    const minutos = parseInt(horaUsuario.split(':')[1], 10);

    const horasEnPais = [];
    for (let i = 0; i < 4; i++) {
        const horaActual = new Date();
        horaActual.setHours(hora + i);
        horaActual.setMinutes(minutos);
        horaActual.setSeconds(0);
        horaActual.setMilliseconds(0);

        const horaEnPais = new Date(horaActual.getTime() - (3600000 * diferenciaHoraria)); // Restar la diferencia horaria
        horasEnPais.push(horaEnPais);
    }

    // Formatear las horas según el formato de 24 horas y obtener solo la hora y minutos
    const formatTime = (date) => date.toLocaleTimeString('es', { hour12: false, hour: '2-digit', minute: '2-digit' });

    const horaActual = formatTime(new Date()); // Obtener la hora actual sin modificación

    const message = `
*4 Vs 4*  

🇲🇽 Mx : ${formatTime(horasEnPais[0])}
🇨🇴 Co : ${formatTime(horasEnPais[1])}
🇨🇱 Cl : ${formatTime(horasEnPais[2])}
🇦🇷 Ag : ${formatTime(horasEnPais[3])}

《✧》 *ESCUADRA*

👑 ┇ ${toM(a)}
🥷🏻 ┇ ${toM(b)}
🥷🏻 ┇ ${toM(c)}
🥷🏻 ┇ ${toM(d)}


《✧》 *SUPLENTE*
🥷🏻 ┇ ${toM(e)}
🥷🏻 ┇ ${toM(f)}
`.trim();

    m.reply(message, null, {
mentions: [a, b, c, d, e, f]
})};
};
handler.help = ['4vs4'];
handler.tags = ['ff'];
handler.command = ['4vs4', 'vs4'];
handler.register = true;
export default handler;

let R = Math.random;
let Fl = Math.floor;
let toM = (a) => "@" + a.split("@")[0];
function handler(m, {groupMetadata}) {
  let ps = groupMetadata.participants.map((v) => v.id);
  let a = ps[Fl(R() * ps.length)];
  let b;
  do b = ps[Fl(R() * ps.length)];
  while (b === a);
  let c;
  do c = ps[Fl(R() * ps.length)];
  while (b === a);
  let d;
  do d = ps[Fl(R() * ps.length)];
  while (b === a);
  let e;
  do e = ps[Fl(R() * ps.length)];
  while (b === a);
  let f;
  do f = ps[Fl(R() * ps.length)];
  while (b === a);