import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

         const { key } = await conn.sendMessage(m.chat, {text: `🚀 Ping.....`}, {quoted: m});
        await delay(1000 * 1);
        await conn.sendMessage(m.chat, {text: `🚀 Pong.....`, edit: key});
        await delay(1000 * 1);
        await conn.sendMessage(m.chat, {text: `♻️ Cargando...`, edit: key});
         await conn.sendMessage(m.chat, {text: `*Pong* 🏓 ${latensi.toFixed(4)} ms`, edit: key})};
}
handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']
handler.register = true

export default handler