var fs = require('fs');
var data = fs.readFileSync(process.argv[2]);
console.log(data);
fs.writeFileSync(process.argv[3], data);