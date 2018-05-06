const items = {'紅茶':20, '綠茶': 20, '珍珠奶茶': 35 }

const notes = {'去冰':0, '半糖':0, '熱':0, '加鮮奶':10 }

let order = {
  totalPrice: 0,
  records: []
}

const quantityControl = document.getElementById('quantity')
const priceControl = document.getElementById('price')
const itemSelect = document.getElementById('items')
const noteSelect = document.getElementById('notes')
const orderTable = document.getElementById('orderTable')
const orderTableBody = document.getElementById('orderTableBody')
const totalPriceControl = document.getElementById('totalPrice')

function init() {
  itemSelect.innerHTML = optionList(items)
  noteSelect.innerHTML = optionList(notes)
  calcPrice()
  if (localStorage.getItem('pos.orderCount') == null)
    localStorage.setItem('pos.orderCount', 0)
}

function submit() {
  let orderCount = parseInt(localStorage.getItem('pos.orderCount')) + 1
  localStorage.setItem('pos.order.'+orderCount, JSON.stringify(order))
  localStorage.setItem('pos.orderCount', orderCount)
  reset()
}

function reset() {
  order = {
    totalPrice: 0,
    records: []
  }
  orderTableBody.innerHTML = '<tr><td>&nbsp;</td><td></td><td></td></tr>'
  totalPriceControl.value = order.totalPrice
}

function abort() {
  reset()
}

function optionList(list) {
  let r = []
  for (let name in list) {
    let price = list[name]
    r.push('<option value="'+name+':'+price+'">'+name+':'+price+'</option>')
  }
  return r.join('\n')
}

function orderList(order) {
  let records = order.records
  let list = []
  for (let i=0; i<records.length; i++) {
    list.push(`<tr><td>${records[i].name}</td><td>${records[i].price}</td><td>${records[i].quantity}</td></tr>`)
  }
  return list.join('\n')
}

function calcPrice() {
  let [item, itemPrice] = itemSelect.value.split(':')
  let [note, notePrice] = noteSelect.value.split(':')
  let price = parseInt(itemPrice) + parseInt(notePrice)
  priceControl.value = price
  return {item, note, price}
}

function addItem() {
  let {item, note, price} = calcPrice()
  let quantity = parseInt(quantityControl.value)
  let record = {name: item+'('+note+')', price: price, quantity: quantity}
  order.records.push(record)
  orderTableBody.innerHTML = orderList(order)
  order.totalPrice += price * quantity
  totalPriceControl.value = order.totalPrice
}

function quantityAdd() {
  quantity.value = parseInt(quantity.value) + 1
}
