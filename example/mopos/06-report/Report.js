const Report = {}

Report.html = `
<div style="width:400px">
  <div id="report">
    <table>
      <thead><tr><th>代號</th><th>金額</th><th>時間</th></tr></thead>
      <tbody id="reportBody"></tbody>
    </table>
    <br/>
    <div style="width:150px">
      <label>本日總收入：</label>
      <label id="dayTotal"></label>
    </div>
  </div>
  <div id="detail" style="width:400px; display:none">
    <table>
      <thead><tr><th>商品</th><th>單價</th><th>數量</th></tr></thead>
      <tbody id="detailBody"></tbody>
    </table>
    <br/>
    <div style="width:100px">
      <label>總價:</label><label id="totalPrice"></label>
      <br/><br/>
      <button onclick="Report.showReport()">檢視報表</button>
    </div>
  </div>
  <br/>
  <div style="width:100px">
    <button onclick="Shop.start()">回主選單</button>
  </div>
</div>
`

var reportBody, detailPanel, reportPanel, detailBody, totalPriceLabel, dayTotalLabel

Report.start = function () {
  console.log('Report.start()')
  show(Report.html)
  reportPanel = document.getElementById('report')
  detailPanel = document.getElementById('detail')
  reportBody = document.getElementById('reportBody')
  detailBody = document.getElementById('detailBody')
  dayTotalLabel = document.getElementById('dayTotal')
  totalPriceLabel = document.getElementById('totalPrice')
  reportBody.innerHTML = Report.orderListHtml()
  dayTotalLabel.innerHTML = Report.dayTotal + ''
}

Report.orderListHtml = function () {
  list = []
  let dayTotal = 0
  for (let i=1; i <= Shop.orderCount; i++) {
    let order = Shop.getOrder(i)
    dayTotal += order.totalPrice
    list.push(Report.orderShort(i, order))
  }
  Report.dayTotal = dayTotal
  return list.join('\n')
}

Report.orderShort = function (i, order) {
  let time = new Date(order.time)
  return '<tr><td><a href="#" onclick="Report.showOrderDetail('+i+')">0' + i + '</a></td><td>' + order.totalPrice + '</td><td>' + dateToString(time) + '</td></tr>'
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

Report.showOrderDetail = function (i) {
  detailPanel.style.display = 'block'
  reportPanel.style.display = 'none'
  let order = Shop.getOrder(i)
  detailBody.innerHTML = Report.orderDetailHtml(order)
  totalPriceLabel.innerHTML = order.totalPrice
}

Report.showReport = function () {
  detailPanel.style.display = 'none'
  reportPanel.style.display = 'block'
}