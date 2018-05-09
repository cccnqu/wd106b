const Export = {}

Export.start = function () {
  let storageObj = Export.toObj()
  Ui.show(`
  <div>
    <button onclick="Ui.id('downlink').click()">按此下載</button>
    <button onclick="ShopMain.start()">回主選單</button>
    <a id="downlink" style="display:none"></a>
    <pre style="text-align:left">\n${JSON.stringify(storageObj, null, 2)}\n</pre>
  </div>
  `)
  var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storageObj, null, 2))
  Ui.id('downlink').setAttribute('href', dataStr)
  Ui.id('downlink').setAttribute('download', 'shop'+Lib.dateToString(new Date()).replace(/\//g, '')+'.json')
}

Export.toObj = function () {
  let obj = {}
  for (var i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i)
    obj[key] = JSON.parse(localStorage.getItem(key))
  }
  return obj
}
