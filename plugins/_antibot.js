/*export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (!m.isGroup) return;
    let chat = global.db.data.chats[m.chat]
    let delet = m.key.participant
    let bang = m.key.id
    let bot = global.db.data.settings[this.user.jid] || {}
    if (m.fromMe) return true;

    if (m.id.startsWith('3EB0') && m.id.length === 22) {
        let chat = global.db.data.chats[m.chat];

        if (chat.antiBot) {
         //   await conn.reply(m.chat, "     ͞ ͟͞ ͟𝗔𝗜-𝗬𝗮𝗲𝗺𝗼𝗿𝗶🌸͟ ͟͞ ͞   \n╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝\n\n𝑆𝑜𝑦 𝑨𝒊-𝒀𝒂𝒆𝒎𝒐𝒓𝒊-𝑴𝑫 𝑙𝑎 𝑚𝑒𝑗𝑜𝑟 𝑏𝑜𝑡 𝑑𝑒 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑!!\n𝐸𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜 𝑛𝑜 𝑡𝑒 𝑛𝑒𝑐𝑒𝑠𝑖𝑡𝑎, 𝑎𝑑𝑖𝑜𝑠𝑖𝑡𝑜 𝑏𝑜𝑡 𝑑𝑒 𝑠𝑒𝑔𝑢𝑛𝑑𝑎.", null, rcanal);

            if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
    }
}*/

let handler = async (m, { text, amorfix }) => {

  if (!text) return m.reply('《✧》Y el nombre del amor de tu vida?', m)

try {
m.reply('buscando a esa persona....', m)
  
let buscar = await love(`http://busqueda.amor.com/name=${text}`)

  let { amor } = await buscar.json()

  if (!amor.length) return m.reply('No se encontró a Sara', m)

} catch {  
m.reply('Ocurrió un error, puede ser que esa persona no te ame o no existe en tu corazón', m)
}}

handler.comando = ['buscar', 'amorbuscar']
export default handler;