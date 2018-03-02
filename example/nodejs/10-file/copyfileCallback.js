var fs = require('fs');
fs.readFile("copyfileCallback.js", "utf8", function(err, data) {
  console.log('讀取完成！');
  fs.writeFile("copyfileCallback.js2",  data, function(err) {
    console.log('寫入完成!');
  });
});