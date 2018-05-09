const Setting = {}

Setting.html = `
<table>
  <thead><tr><th>欄位</th><th>內容</th></tr></thead>
  <tbody>
    <tr><td>商店名稱</td><td><input id="shopName" type="text" value=""/></td></tr>
    <tr><td>地址</td><td><input id="shopAddress" type="text" value=""/></td></tr>
    <tr><td>電話</td><td><input id="shopTel" type="text" value=""/></td></tr>
    <tr><td>產品清單</td><td><textarea id="items"></textarea></td></tr>
    <tr><td>附加選項</td><td><textarea id="addons"></textarea></td></tr>
    <tr><td>交貨選項</td>
      <td>
        <input id="comeToShop" type="checkbox">來店自取 / 
        <input id="mailToYou"  type="checkbox">宅配寄送 / 
        <input id="goForYou"   type="checkbox">派人到府
      </td>
    </tr>
  </tbody>
</table>
<br/>
<button onclick="Setting.save()">儲存設定</button>
<button onclick="ShopMain.start()">回主選單</button>
`

Setting.start = function () {
  Ui.show(Setting.html)
  Ui.id('shopName').value = Shop.name
  Ui.id('shopAddress').value = Shop.address
  Ui.id('shopTel').value = Shop.tel
  Ui.id('items').value = JSON.stringify(Shop.items, null, 2)
  Ui.id('addons').value = JSON.stringify(Shop.addons, null, 2)
  Ui.id('comeToShop').checked = Shop.isComeToShop
  Ui.id('mailToYou').checked = Shop.isMailToYou
  Ui.id('goForYou').checked = Shop.isGoForYou
}

Setting.save = function () {
  try {
    Shop.name = Ui.id('shopName').value
    Shop.address = Ui.id('shopAddress').value
    Shop.tel = Ui.id('shopTel').value
    Shop.items = JSON.parse(Ui.id('items').value)
    Shop.addons = JSON.parse(Ui.id('addons').value)
    Shop.isComeToShop = Ui.id('comeToShop').checked
    Shop.isMailToYou = Ui.id('mailToYou').checked
    Shop.isGoForYou = Ui.id('goForYou').checked
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  Db.save('Shop', Shop)
  Ui.id('title').innerHTML = Shop.name
  alert('儲存成功！')
}
