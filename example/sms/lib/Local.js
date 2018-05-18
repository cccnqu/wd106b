const Local = {}

Local.load = function (path) {
  let json = localStorage.getItem(path)
  if (json == null) return
  return JSON.parse(json)
}

Local.save = function (path, obj) {
  localStorage.setItem(path, JSON.stringify(obj))
  /*
  if (Fire.loginUser != null)
  Fire.
  */
}

Local.insert = function (path, obj) {
  let id = Lib.uuid()
  obj.id = id
  Local.save(path +'.' + id, obj)
}

Local.delete = function (path) {
  localStorage.removeItem(path)
}

Local.remove = function (path, obj) {
  localStorage.removeItem(path + '.' + obj.id)
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

Local.sortBy = function (list, arg) {
  return list.sort((o1, o2) => o1[arg.sortBy] < o2[arg.sortBy])
}

Local.query = function (path, arg) {
  let list = Local.loadAll(path)
  return Local.sortBy(list, arg)
}
