const shops = [
  {
    id: '1',
    name: '茶舖子',
    address: '金門縣金寧鄉安美村湖南 33 號',
    tel: '082-333333',
    items: {'紅茶': 20, '綠茶': 20, '珍珠奶茶': 35 },
    addons: {'去冰': 0, '半糖': 0, '熱': 0, '加鮮奶': 10 },
    isComeToShop: true,
    isMailToYou: false,
    isGoForYou: false,
    at: { lat: 24.44, lng: 118.32 }
  },
  {
    id: '2',
    name: '農莊七號',
    address: '金門縣金寧鄉安美村湖南7號',
    tel: '082-333444',
    items: {'馬鈴薯': 20, '火龍果': 40, '土雞': 150 },
    addons: { },
    isComeToShop: true,
    isMailToYou: false,
    isGoForYou: false,
    at: { lat: 24.43, lng: 118.33 }
  }
]

const ShopTable = {}

ShopTable.html = `
<div id="ShopTable" class="panel">
<table>
  <thead><tr><th>排序</th><th>店名</th><th>產品</th></tr></thead>
  <tbody id="ShopTableBody"></tbody>
</table>
</div>
`

ShopTable.start = function (arg={}) {
  ShopTable.arg = arg
  Ui.show(ShopTable.html)
  ShopTable.showReport()
}

ShopTable.showReport = function () {
  Ui.id('ShopTableBody').innerHTML = Ui.tbodyHtml(shops, ShopTable.rowHtml)
}

ShopTable.rowHtml = function (i, shop) {
  return `<tr>
  <td><a href="#" onclick="ShopTable.showDetail('${shop.id}')">${i}</a></td>
  <td>${shop.name}</td>
  <td>${JSON.stringify(shop.items)}</td>
  </tr>`
}