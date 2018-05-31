const Pos = {}

var Order = {}

Pos.html = `
<div>
  <table id="orderTable">
  <thead>
    <tr>
      <td><select id="items" onchange="Pos.calcPrice()"></select></td>
      <td><select id="addons" onchange="Pos.calcPrice()"></select></td>
      <td><input id="price" type="text" value="0" style="width:4em"></td>
      <td nowrap>
        <input id="quantity" onclick="this.value=''" type="text" list="quantityData" value="1" style="width:4em">
        <datalist id="quantityData">
          <option value="1">
          <option value="2">
          <option value="3">
          <option value="4">
          <option value="5">
          <option value="6">
          <option value="7">
          <option value="8">
          <option value="9">
          <option value="10">
          <option value="20">
          <option value="50">
          <option value="100">
          </datalist>
        <button onclick="Pos.addItem()">新增</button>
      </td>
    </tr>
    <tr><th>商品</th><th>屬性</th><th>單價</th><th>數量</th></tr>
  </thead>
  <tbody id="orderTableBody">
    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
  </tbody>
  </table>
  <div class="nowrap bigmargin">
    <label>總價:</label>
    <input id="totalPrice" type="number" value="0" style="width:5em">
    <button id="goShop" onclick="Pos.goShop()">回主選單</button>
    <button id="newOrder" onclick="Pos.start()" disabled="disabled">新增下一筆</button>
    <button id="submit" onclick="Pos.submit()">下單</button>
    <button id="abort" onclick="Pos.abort()">放棄</button>
  </div>
</div>
<br/>
<div>

</div>
</div>
`

Pos.start = function () {
  Ui.show(Pos.html)
  Ui.id('items').innerHTML = Pos.optionList(Shop.shop.items)
  Ui.id('addons').innerHTML = Pos.optionList(Shop.shop.addons)
  Order = Pos.newOrder()
  Pos.calcPrice()
}

Pos.goShop = function () {
  if (!Order.submitted) {
    if (confirm('您的訂單尚未送出，請問是否要放棄該訂單？')) {
      Shop.mainPage()
      return
    } else {
      return
    }
  }
  Shop.mainPage()
}

Pos.abort = function () {
  if (confirm('確定要放棄本訂單？')) {
    Pos.start()
  }
}

Pos.newOrder = function () {
  return {totalPrice: 0, records: [], submitted: false}
}

Pos.submit = function () {
  if (Order.records.length === 0) {
    alert('您的訂單是空的，無法送出！')
    return
  }
  Order.time = Date.now()
  Order.submitted = true
  Db.insert('Order', Order)
  Ui.id('submit').disabled = 'disabled'
  Ui.id('submit').innerHTML = '已送出'
  Ui.id('abort').disabled = 'disabled'
  Ui.id('newOrder').disabled = ''
}

Pos.optionList = function (list) {
  let r = []
  for (let name in list) {
    let price = list[name]
    r.push('<option value="'+name+':'+price+'">'+name+':'+price+'</option>')
  }
  return r.join('\n')
}

Pos.list = function (records) {
  let list = []
  for (let i=0; i<records.length; i++) {
    let r = records[i]
    list.push(`<tr><td>${r.item}</td><td>${r.addon}</td><td class="number">${r.price}</td><td class="number">${r.quantity}</td></tr>`)
  }
  return list.join('\n')
}

Pos.calcPrice = function () {
  let [item, itemPrice] = Ui.id('items').value.split(':')
  let [addon, addonPrice] = Ui.id('addons').value.split(':')
  let price = parseInt(itemPrice) + parseInt(addonPrice)
  Ui.id('price').value = price
  return {item, addon, price}
}

Pos.addItem = function () {
  let {item, addon, price} = Pos.calcPrice()
  let quantity = parseInt(Ui.id('quantity').value)
  let record = {item: item, addon:addon, price: price, quantity: quantity}
  Order.records.push(record)
  Ui.id('orderTableBody').innerHTML = Pos.list(Order.records)
  Order.totalPrice += price * quantity
  Ui.id('totalPrice').value = Order.totalPrice
}
