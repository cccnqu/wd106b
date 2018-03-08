var fs = require('mz/fs');
var co = require('co');

co(function*() {
  var data1=yield fs.readFile("copyfileYield2.js", "utf8");
  console.log('讀取完成!');
  yield fs.writeFile("copyfileYield2.js2", data1);
  console.log('寫入完成!');
  var data2 = yield fs.readFile("copyfileYield2.js2", "utf8");
  console.log('又讀取完成 !');
  yield fs.writeFile("copyfileYield2.js3", data2);
  console.log('又寫入完成!');
});