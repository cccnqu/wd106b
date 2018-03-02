var fs = require('fs');
var html = fs.readFileSync(process.argv[2]).toString();
var r = /href\s*=\s*"(.+?)"/gi;
while (true) {
  var m = r.exec(html);
  if (!m) break;
  console.log(m[1]);
}