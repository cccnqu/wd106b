const Pos = {
  order: {
    totalPrice: 0,
    records: [],
    submitted: false
  }
}

const Order = Pos.order

Pos.html = `
<table id="orderTable">
<thead>
  <tr>
    <td>
      <select id="items" onchange="Pos.calcPrice()"></select>
      <select id="addons" onchange="Pos.calcPrice()"></select>
    </td>
    <td><input id="price" type="number" value="0"></td>
    <td>
      <input id="quantity" type="number" value="1">
      <button onclick="Pos.addItem()">新增</button>
    </td>
  </tr>
  <tr><th>商品</th><th>單價</th><th>數量</th></tr>
</thead>
<tbody id="orderTableBody">
  <tr><td>&nbsp;</td><td></td><td></td></tr>
</tbody>
</table>
<br/>
<div class="strong center" style="width:300px">
  <label>總價:</label>
  <input id="totalPrice" type="number" value="0">
  <button id="submit" onclick="Pos.submit()">送出訂單</button>
  <button id="abort" onclick="Pos.abort()">放棄訂單</button>
  <br/><br/>
  <button id="goShop" onclick="Pos.goShop()">回主選單</button>
  <button id="newOrder" onclick="Pos.start()" disabled="disabled">新增下一筆</button>
  <br/><br/>
</div>
`

Pos.goShop = function () {
  if (!Order.submitted) {
    if (confirm('您的訂單尚未送出，請問是否要放棄該訂單？')) {
      Shop.start()
      return
    } else {
      return
    }
  }
  Shop.start()
}

Pos.abort = function () {
  if (confirm('確定要放棄本訂單？')) {
    Pos.start()
  }
}

var quantityControl, priceControl, itemSelect, addonSelect, orderTable, orderTableBody, totalPriceControl

Pos.start = function () {
  show(Pos.html)
  quantityControl = document.getElementById('quantity')
  priceControl = document.getElementById('price')
  itemSelect = document.getElementById('items')
  addonSelect = document.getElementById('addons')
  orderTable = document.getElementById('orderTable')
  orderTableBody = document.getElementById('orderTableBody')
  totalPriceControl = document.getElementById('totalPrice')
  submitButton = document.getElementById('submit')
  abortButton = document.getElementById('abort')
  newOrderButton = document.getElementById('newOrder')

  itemSelect.innerHTML = Pos.optionList(Shop.items)
  addonSelect.innerHTML = Pos.optionList(Shop.addons)
  Pos.resetOrder(Order)
  Pos.calcPrice()
}

Pos.resetOrder = function (Order) {
  Order.totalPrice = 0
  Order.records = []
  Order.submitted = false
}

Pos.submit = function () {
  if (Order.records.length === 0) {
    alert('您的訂單是空的，無法送出！')
    return
  }
  Shop.incCount()
  Order.time = Date.now()
  Order.submitted = true
  Shop.saveOrder(Order)
  submitButton.disabled = 'disabled'
  submitButton.innerHTML = '已送出'
  abortButton.disabled = 'disabled'
  newOrderButton.disabled = ''
}

Pos.optionList = function (list) {
  let r = []
  for (let name in list) {
    let price = list[name]
    r.push('<option value="'+name+':'+price+'">'+name+':'+price+'</option>')
  }
  return r.join('\n')
}

Pos.list = function () {
  let records = Order.records
  let list = []
  for (let i=0; i<records.length; i++) {
    list.push(`<tr><td>${records[i].name}</td><td>${records[i].price}</td><td>${records[i].quantity}</td></tr>`)
  }
  return list.join('\n')
}

Pos.calcPrice = function () {
  let [item, itemPrice] = itemSelect.value.split(':')
  let [addon, addonPrice] = addonSelect.value.split(':')
  let price = parseInt(itemPrice) + parseInt(addonPrice)
  priceControl.value = price
  return {item, addon, price}
}

Pos.addItem = function () {
  let {item, addon, price} = Pos.calcPrice()
  let quantity = parseInt(quantityControl.value)
  let record = {name: item+'('+addon+')', price: price, quantity: quantity}
  Order.records.push(record)
  orderTableBody.innerHTML = Pos.list()
  Order.totalPrice += price * quantity
  totalPriceControl.value = Order.totalPrice
}
