const Shop = {
  items: {'紅茶': 20, '綠茶': 20, '珍珠奶茶': 35 },
  addons: {'去冰': 0, '半糖': 0, '熱': 0, '加鮮奶': 10 }
}

Shop.html = `
<div style="width:100px">
  <button class="big" onclick="Order.start()">新增訂單</button><br/><br/>
  <button class="big">本日報表</button><br/><br/>
  <button class="big" onclick="Setting.start()">商店設定</button><br/><br/>
</div>
`

Shop.start = function () {
  const itemsJson = localStorage.getItem('Shop.items')
  const addonsJson = localStorage.getItem('Shop.addons')
  if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
  if (addonsJson != null) Shop.addons = JSON.parse(addonsJson)
  show(Shop.html)
}
