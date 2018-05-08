const Report = {}

Report.html = `
  <div id="report" class="panel">
    <table>
      <thead><tr><th>排序</th><th>品項</th><th>金額</th><th>日期</th><th>時間</th></tr></thead>
      <tbody id="reportBody"></tbody>
    </table>
    <br/>
    <div class="center">
      <label>本日總收入：</label>
      <label id="dayTotal"></label>
      <br/><br/>
      <button onclick="ShopMain.start()">回主選單</button>
    </div>
  </div>
  <div id="detail" class="panel" style="display:none">
    <table>
      <thead><tr><th>商品</th><th>附加</th><th>單價</th><th>數量</th></tr></thead>
      <tbody id="detailBody"></tbody>
    </table>
    <br/>
    <div>
      <label>總價:</label><label id="totalPrice"></label>
      <br/><br/>
      <button onclick="Ui.showPanel('report')">回到報表</button>
    </div>
  </div>
`

Report.start = function (arg={}) {
  Report.arg = arg
  Ui.show(Report.html)
  Report.showReport()
}

Report.showReport = function () {
  Ui.id('reportBody').innerHTML = Report.orderListHtml(Report.arg)
  Ui.id('dayTotal').innerHTML = Report.dayTotal + ''
}

Report.showDetail = function (id) {
  Ui.showPanel('detail')
  let order = Db.load('Order.'+id)
  Ui.id('detailBody').innerHTML = Report.orderDetailHtml(order)
  Ui.id('totalPrice').innerHTML = order.totalPrice
}

Report.orderListHtml = function (arg) {
  list = []
  let dayTotal = 0
  let orders = Db.query('Order.', {sortBy:'time'})
  let i = 0
  for (let order of orders) {
    let orderTime = new Date(order.time)
    if (arg.range != null) {
      // console.log('orderTime=', orderTime, ' range.from=', arg.range.from, 'rang.to=', arg.range.to)
      if (orderTime < arg.range.from || orderTime >= arg.range.to) continue
    }
    let rowHtml = Report.orderRowHtml(++i, order)
    list.push(rowHtml)
    dayTotal += order.totalPrice
  }
  Report.dayTotal = dayTotal
  return list.join('\n')
}

Report.orderRowHtml = function (i, order) {
  let time = new Date(order.time)
  return `<tr>
    <td><a href="#" onclick="Report.showDetail('${order.id}')">${i}</a></td>
    <td>${order.records[0].item} ...</td>
    <td class="number">${order.totalPrice}</td>
    <td>${Lib.dateToString(time)}</td>
    <td>${Lib.timeToString(time)}</td>
  </tr>`
}

Report.orderDetailHtml = function (order) {
  let detail = []
  let records = order.records
  for (let i=0; i<records.length; i++) {
    let r = records[i]
    detail.push('<tr><td>' + r.item + '</td><td>' + r.addon + '</td><td>' + r.price + '</td><td>' + r.quantity + '</td></tr>')
  }
  return detail.join('\n')
}
