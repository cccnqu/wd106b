const Storage = {}

Storage.start = function () {
  let storageObj = Storage.toObj()
  Ui.show(`
  <div>
    <button onclick="Ui.id('downlink').click()">匯出資料</button>
    <button onclick="Ui.id('importFile').click()">匯入資料</button>
    <input onchange="Storage.importFile()" id="importFile" type="file" value="匯入檔案" class="hidden">
    <button onclick="Shop.mainPage()">回主選單</button>
    <a id="downlink" style="display:none"></a>
    <pre style="text-align:left">\n${JSON.stringify(storageObj, null, 2)}\n</pre>
  </div>
  `)
  var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storageObj, null, 2))
  Ui.id('downlink').setAttribute('href', dataStr)
  Ui.id('downlink').setAttribute('download', 'shop'+Lib.dateToString(new Date()).replace(/\//g, '')+'.json')
}

Storage.importFile = function () {
  var file = Ui.id('importFile').files[0]
  if (file) {
    var reader = new FileReader()
    reader.readAsText(file, 'UTF-8')
    reader.onload = function (evt) {
      localStorage.clear()
      console.log('file=', evt.target.result)
      Storage.import(evt.target.result)
    }
    reader.onerror = function (evt) {
      alert('檔案載入失敗 (檔案不存在或非文字檔)！')
    }
  }
}

Storage.import = function (json) {
  let d = JSON.parse(json)
  for (let key in d) {
    Db.save(key, d[key])
  }
}

Storage.toObj = function () {
  let obj = {}
  for (var i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i)
    obj[key] = JSON.parse(localStorage.getItem(key))
  }
  return obj
}
