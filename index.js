import { join, dirname } from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import boxen from 'boxen';
import { setupMaster, fork } from 'cluster';
import { watchFile, unwatchFile } from 'fs';
import cfonts from 'cfonts';
import { createInterface } from 'readline';
import yargs from 'yargs';
import chalk from 'chalk';

console.log('\n✰ Iniciando Yaemori ✰');

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const { name, description, collaborators, author, version } = require(join(__dirname, './package.json'));
const { say } = cfonts;
const rl = createInterface(process.stdin, process.stdout);

const subtitleStyle = chalk.white.bold;
const responseStyle = chalk.dim.bold;

let activeCollaborators = Object.values(collaborators).join(', ');

say('yaemori\nbot md', {
  align: 'center',
  gradient: ['red', 'blue']
});

say(description, {
  font: 'console',
  align: 'center',
  gradient: ['blue', 'magenta']
});

const message = `${subtitleStyle('Desarrollado por »')} ${responseStyle(author.name)}
${subtitleStyle('Código basado por »')} ${responseStyle('BrunoSobrino')}
${subtitleStyle('Colaboradores activos »')} ${responseStyle(activeCollaborators)}
${subtitleStyle('Versión »')} ${responseStyle(version)}`

console.log(boxen(message, {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  borderColor: 'blue',
  float: 'center',
}));

let isRunning = false;

function start(file) {
  if (isRunning) return;
  isRunning = true;

  const args = [join(__dirname, file), ...process.argv.slice(2)];

  setupMaster({
    exec: args[0],
    args: args.slice(1),
  });

  const p = fork();

  p.on('message', data => {
    switch (data) {
      case 'reset':
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        p.send(process.uptime());
        break;
    }
  });

  p.on('exit', (code) => {
    isRunning = false;
    if (code !== 0) {
      console.error('Error:\n', code);
      process.exit();

      watchFile(args[0], () => {
        unwatchFile(args[0]);
        start(file);
      });
    }
  });

  const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();

  if (!opts.test && !rl.listenerCount('line')) {
    rl.on('line', line => {
      p.emit('message', line.trim());
    });
  }
}

process.on('warning', (warning) => {
  if (warning.name === 'MaxListenersExceededWarning') {
    console.warn('🚩 Se excedió el límite de Listeners en:');
    console.warn(warning.stack);
  }
});

start('sunlight.js');