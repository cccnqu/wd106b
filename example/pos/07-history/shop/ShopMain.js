const ShopMain = {}

ShopMain.html = `
<div>
  <button class="big" onclick="Pos.start()">新增訂單</button><br/><br/>
  <button class="big" onclick="ShopMain.todayReport()">本日報表</button><br/><br/>
  <button class="big" onclick="Report.start()">全部報表</button><br/><br/>
  <button class="big" onclick="Setting.start()">商店設定</button><br/><br/>
</div>
`

ShopMain.leftMenuHtml = `
<a href="#about">關於 LaPos</a>
<a href="#announce">商店公告</a>
<a href="#map">商店地圖</a>
<a href="#message">發訊息給商店</a>
<a href="#help">使用說明</a>
<a href="#license">軟體授權</a>
`

ShopMain.start = function () {
  Shop = Db.load('Shop') || Shop
  Ui.show(ShopMain.html)
  Ui.title(Shop.name)
  Ui.html('#leftMenu', ShopMain.leftMenuHtml)
}

ShopMain.todayReport = function () {
  Report.start({range: Lib.dayRange(new Date())})
}
