const Lib = {}

Lib.dateToString = function (date) {
  return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()
}

Lib.timeToString = function (date) {
  return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}