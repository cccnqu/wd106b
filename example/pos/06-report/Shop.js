const Shop = {
  name: '茶舖子',
  address: '金門縣金寧鄉安美村湖南 33 號',
  tel: '082-333333',
  items: {'紅茶': 20, '綠茶': 20, '珍珠奶茶': 35 },
  addons: {'去冰': 0, '半糖': 0, '熱': 0, '加鮮奶': 10 },
  orderCount: 0,
}

Shop.html = `
<div>
  <button class="big" onclick="Pos.start()">新增訂單</button><br/><br/>
  <button class="big" onclick="Report.start()">本日報表</button><br/><br/>
  <button class="big" onclick="Setting.start()">商店設定</button><br/><br/>
</div>
`

Shop.start = function () {
  Shop.init()
  Shop.name = localStorage.getItem('Shop.name') || Shop.name
  Shop.address = localStorage.getItem('Shop.address') || Shop.address
  Shop.tel = localStorage.getItem('Shop.tel') || Shop.tel
  Ui.id('menuShopName').innerHTML = Shop.name
  const itemsJson = localStorage.getItem('Shop.items')
  const addonsJson = localStorage.getItem('Shop.addons')
  if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
  if (addonsJson != null) Shop.addons = JSON.parse(addonsJson)
  Ui.show(Shop.html)
}

Shop.init = function () {
  Shop.orderCount = localStorage.getItem('Pos.Order.count')
  if (Shop.orderCount == null) {
    Shop.orderCount = 0
    localStorage.setItem('Pos.Order.count', Shop.orderCount)
  }
}

Shop.incCount = function () {
  // let orderCount = parseInt(localStorage.getItem('Pos.Order.count')) + 1
  localStorage.setItem('Pos.Order.count', ++ Shop.orderCount)
}

Shop.saveOrder = function (Order) {
  localStorage.setItem('Pos.Order.' + Shop.orderCount, JSON.stringify(Order))
}

Shop.getOrder = function (i) {
  let orderJson = localStorage.getItem('Pos.Order.'+i)
  if (orderJson == null) return null
  return JSON.parse(orderJson)
}
