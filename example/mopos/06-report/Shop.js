const Shop = {
  items: {'紅茶': 20, '綠茶': 20, '珍珠奶茶': 35 },
  addons: {'去冰': 0, '半糖': 0, '熱': 0, '加鮮奶': 10 },
  orderCount: 0,
}

Shop.html = `
<div style="width:100px">
  <button class="big" onclick="Pos.start()">新增訂單</button><br/><br/>
  <button class="big" onclick="Report.start()">本日報表</button><br/><br/>
  <button class="big" onclick="Setting.start()">商店設定</button><br/><br/>
</div>
`

Shop.start = function () {
  Shop.init()
  const itemsJson = localStorage.getItem('Shop.items')
  const addonsJson = localStorage.getItem('Shop.addons')
  if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
  if (addonsJson != null) Shop.addons = JSON.parse(addonsJson)
  show(Shop.html)
}

Shop.init = function () {
  Shop.orderCount = localStorage.getItem('pos.Order.count')
  if (Shop.orderCount == null) {
    Shop.orderCount = 0
    localStorage.setItem('pos.Order.count', Shop.orderCount)
  }
}

Shop.incCount = function () {
  // let orderCount = parseInt(localStorage.getItem('pos.Order.count')) + 1
  localStorage.setItem('pos.Order.count', ++ Shop.orderCount)
}

Shop.saveOrder = function (Order) {
  localStorage.setItem('pos.Order.' + Shop.orderCount, JSON.stringify(Order))
}

Shop.getOrder = function (i) {
  let orderJson = localStorage.getItem('pos.Order.'+i)
  if (orderJson == null) return null
  return JSON.parse(orderJson)
}
