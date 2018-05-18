const ShopMain = {}

ShopMain.html = `
<div>
  <button onclick="Pos.start()">新增訂單</button>
  <button onclick="Setting.start()">商店設定</button>
  <button onclick="ShopMain.todayReport()">本日報表</button>
  <button onclick="Report.start()">全部報表</button>
  <button onclick="Storage.start()">資料處理</button>
</div>
`

ShopMain.start = function () {
  Shop = Db.load('Shop') || Shop
  // Ui.html('#header', ShopMain.headerHtml)
  // Ui.html('#menu', ShopMain.menuHtml)
  Ui.show(ShopMain.html)
  Ui.title(Shop.name)
}

ShopMain.todayReport = function () {
  Report.start({range: Lib.dayRange(new Date())})
}

/*
ShopMain.menuHtml = `
<a href="#love">最愛商店</a>
<a href="#search">商店搜尋</a>
<a href="#map">商店地圖</a>
<a href="#help">使用說明</a>
<a href="#about">關於本軟體</a>
`

ShopMain.headerHtml = `
<div class="navbar" style="float:left">
<a onclick="Ui.openNav()" style="cursor:pointer">&#9776;</a>
<a href="#LaPos" style="font-family:Verdana; text-shadow: 1px 0px 1px white; ">LaPos</a>
</div>
<div class="navbar" style="float:right">
<div class="dropdown">
  <button class="dropbtn">
    <i class="fa fa-user"></i>
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <a href="#login">登入</a>
    <a href="#logout">登出</a>
    <a href="#signup">註冊</a>
  </div>
</div>
<a href="#title" id="title">店名</a>
</div>
`
*/