const Local = {}

Local.load = function (path) {
  let json = localStorage.getItem(path)
  if (json == null) return
  return JSON.parse(json)
}

Local.save = function (path, obj) {
  localStorage.setItem(path, JSON.stringify(obj))
}

Local.insert = function (path, obj) {
  let id = Lib.uuid()
  obj.id = id
  Local.save(path +'.' + id, obj)
}

Local.remove = function (path) {
  localStorage.removeItem(path)
}

Local.loadAll = function (path) {
  let list = []
  for (let key in localStorage) {
    if (key.startsWith(path)) {
      let obj = Local.load(key)
      list.push(obj)
    }
  }
  return list
}

Local.query = function (path, arg) {
  let list = Local.loadAll(path)
  return Lib.sortBy(list, arg)
}
