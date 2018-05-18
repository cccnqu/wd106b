const Shop = {}

Shop.shop = {
  name: '茶舖子',
  address: '金門縣金寧鄉安美村湖南 33 號',
  tel: '082-333333',
  items: {'紅茶': 20, '綠茶': 20, '珍珠奶茶': 35 },
  addons: {'去冰': 0, '半糖': 0, '熱': 0, '加鮮奶': 10 },
  isComeToShop: true,
  isMailToYou: false,
  isGoForYou: false
}

Shop.save = function () {
  const shop = Shop.shop
  Db.save('Shop', shop)
  if (!Fire.app) return
  if (shop.id == null || shop.id.length === 0) {
    shop.id = Fire.addByPath('/shops/', shop)
  } else {
    Fire.setByPath('/shops/'+shop.id+'/', shop)
  }
}

Shop.load = function () {
  Shop.shop = Db.load('Shop') || Shop.shop
}

Shop.mainPage = function () {
  Shop.load()
  // Ui.html('#header', ShopMain.headerHtml)
  // Ui.html('#menu', ShopMain.menuHtml)
  Ui.show(`
  <div>
    <button onclick="Pos.start()">新增訂單</button>
    <button onclick="Setting.start()">商店設定</button>
    <button onclick="Shop.todayReport()">本日報表</button>
    <button onclick="Report.start()">全部報表</button>
    <button onclick="Storage.start()">資料處理</button>
  </div>
  `)
  Ui.title(Shop.shop.name)
}

Shop.todayReport = function () {
  Report.start({range: Lib.dayRange(new Date())})
}