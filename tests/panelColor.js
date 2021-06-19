let printer = [];

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    code = String(i * 16 + j);
    printer.push('\u001b[38;5;' + code + 'm ' + code);
  };
};

console.log(printer.join(' ') + '\u001b[0m');

printer = [];

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    code = String(i * 16 + j);
    printer.push('\u001b[48;5;' + code + 'm ' + code);
  };
};

console.log(printer.join(' ') + '\u001b[0m');
