const Setting = {}

Setting.html = `
<div style="width:300px">
<label>產品清單</label><br/>
<textarea id="items"></textarea><br/><br/>
<label>附加項目</label><br/>
<textarea id="addons"></textarea><br/><br/>
<button onclick="Setting.save()">儲存設定</button>
<button onclick="Shop.start()">回主選單</button>
</div>
`

var itemsText, addonsText

Setting.start = function () {
  show(Setting.html)
  itemsText = document.getElementById('items')
  addonsText = document.getElementById('addons')
  itemsText.value = JSON.stringify(Shop.items, null, 2)
  addonsText.value = JSON.stringify(Shop.addons, null, 2)
}

Setting.save = function () {
  try {
    Shop.items = JSON.parse(itemsText.value)
    Shop.addons = JSON.parse(addonsText.value)
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  localStorage.setItem('Shop.items', itemsText.value)
  localStorage.setItem('Shop.addons', addonsText.value)
  if (confirm('儲存成功！是否返回主選單？')) Shop.start()
}