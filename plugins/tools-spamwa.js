const handler = async (m, {conn, text}) => {
const [nomor, pesan, jumlah] = text.split('|');

if (!nomor) resturn m.reply('*Uso Correcto:*\n*🚩 #spamwa numero|texto|cantidad*');

if (!pesan) return m.reply('*Uso Correcto:*\n*🚩 #spamwa numero|texto|cantidad*');

if (jumlah && isNaN(jumlah)) return m.reply('*🚩 La cantidad deve ser un numero*');

const fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net';
const fixedJumlah = jumlah ? jumlah * 1 : 10;

if (fixedJumlah > 999) return m.reply('*⚠️ Minimo 50 Caracteres*');

await m.reply('*🚩 Se envió con éxito el spam.*');
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m);
}
};
handler.help = ['spamwa <number>|<mesage>|<no of messages>'];
handler.tags = ['tools'];
handler.command = ['spam', 'spamwa'];
handler.premium = true;
export default handler;