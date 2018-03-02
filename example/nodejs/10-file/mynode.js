const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.prompt();

rl.on('line', (line) => {
  try {
    console.log(eval(line));
  } catch (e) {
    console.error(e.stack);
  }
  rl.prompt();
}).on('close', () => {
  process.exit(0);
});