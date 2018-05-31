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
  Ui.id('ShopTableBody').innerHTML = Ui.tbodyHtml(Shared.shops, ShopTable.rowHtml)
}

ShopTable.rowHtml = function (i, shop) {
  return `<tr>
  <td><a href="#" onclick="ShopTable.showDetail('${shop.id}')">${i}</a></td>
  <td>${shop.name}</td>
  <td>${JSON.stringify(shop.items)}</td>
  </tr>`
}