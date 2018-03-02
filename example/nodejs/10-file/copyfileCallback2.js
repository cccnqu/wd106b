var fs = require('fs');
fs.readFile("copyfileCallback2.js", "utf8", function(err, data) {
  console.log('讀取完成!');
  fs.writeFile("copyfileCallback2.js2",  data, function(err) {
    console.log('寫入完成!');
    fs.readFile("copyfileCallback2.js2", "utf8", function(err, data) {
      console.log('又讀取完成 !');
      fs.writeFile("copyfileCallback2.js3",  data, function(err) {
        console.log('又寫入完成!');
      });
    });
  });
});