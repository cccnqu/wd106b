const Setting = {}

Setting.html = `
<table>
  <thead><tr><th>欄位</th><th>內容</th></tr></thead>
  <tbody>
    <tr><td>id</td><td><label id="shopId"></label></tr>
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
<button onclick="Shop.mainPage()">回主選單</button>
`

Setting.start = function () {
  let shop = Shop.shop
  Ui.show(Setting.html)
  Ui.id('shopId').innerText = shop.id || ''
  Ui.id('shopName').value = shop.name
  Ui.id('shopAddress').value = shop.address
  Ui.id('shopTel').value = shop.tel
  Ui.id('items').value = JSON.stringify(shop.items, null, 2)
  Ui.id('addons').value = JSON.stringify(shop.addons, null, 2)
  Ui.id('comeToShop').checked = shop.isComeToShop
  Ui.id('mailToYou').checked = shop.isMailToYou
  Ui.id('goForYou').checked = shop.isGoForYou
}

Setting.save = function () {
  const shop = Shop.shop
  try {
    shop.id = Ui.id('shopId').innerText
    shop.name = Ui.id('shopName').value
    shop.address = Ui.id('shopAddress').value
    shop.tel = Ui.id('shopTel').value
    shop.items = JSON.parse(Ui.id('items').value)
    shop.addons = JSON.parse(Ui.id('addons').value)
    shop.isComeToShop = Ui.id('comeToShop').checked
    shop.isMailToYou = Ui.id('mailToYou').checked
    shop.isGoForYou = Ui.id('goForYou').checked
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  Shop.save(shop)
  /*
  Db.save('Shop', Shop)
  if (Shop.id == null || Shop.id.length === 0) {
    Shop.id = Fire.addByPath('/shops/', Shop)
  } else {
    Fire.setByPath('/shops/'+Shop.id+'/', Shop)
  }
  */
  Ui.id('title').innerHTML = Shop.name
  alert('儲存成功！')
}
