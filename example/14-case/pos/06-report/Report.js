const Report = {}

Report.html = `
  <div id="report" class="panel">
    <table>
      <thead><tr><th>代號</th><th>金額</th><th>日期</th><th>時間</th></tr></thead>
      <tbody id="reportBody"></tbody>
    </table>
    <br/>
    <div class="center">
      <label>本日總收入：</label>
      <label id="dayTotal"></label>
      <br/><br/>
      <button onclick="Shop.start()">回主選單</button>
    </div>
  </div>
  <div id="detail" class="panel" style="display:none">
    <table>
      <thead><tr><th>商品</th><th>單價</th><th>數量</th></tr></thead>
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

Report.start = function () {
  Ui.show(Report.html)
  Report.showReport()
}

Report.showReport = function () {
  Ui.id('reportBody').innerHTML = Report.orderListHtml()
  Ui.id('dayTotal').innerHTML = Report.dayTotal + ''
}

Report.showDetail = function (i) {
  Ui.showPanel('detail')
  let order = Shop.getOrder(i)
  Ui.id('detailBody').innerHTML = Report.orderDetailHtml(order)
  Ui.id('totalPrice').innerHTML = order.totalPrice
}

Report.orderListHtml = function () {
  list = []
  let dayTotal = 0
  for (let i=1; i <= Shop.orderCount; i++) {
    let order = Shop.getOrder(i)
    dayTotal += order.totalPrice
    list.push(Report.orderRowHtml(i, order))
  }
  Report.dayTotal = dayTotal
  return list.join('\n')
}

Report.orderRowHtml = function (i, order) {
  let time = new Date(order.time)
  return '<tr><td><a href="#" onclick="Report.showDetail('+i+')">0' + i + '</a></td><td class="number">' + order.totalPrice + '</td><td>' + Lib.dateToString(time) + '</td><td>' + Lib.timeToString(time) + '</td></tr>'
}

Report.orderDetailHtml = function (order) {
  let detail = []
  let records = order.records
  for (let i=0; i<records.length; i++) {
    let r = records[i]
    detail.push('<tr><td>' + r.name + '</td><td>' + r.price + '</td><td>' + r.quantity + '</td></tr>')
  }
  return detail.join('\n')
}

