const Db = {}

Db.load = function (path) {
  let json = localStorage.getItem(path)
  if (json == null) return
  return JSON.parse(json)
}

Db.save = function (path, obj) {
  localStorage.setItem(path, JSON.stringify(obj))
  /*
  if (Fire.loginUser != null)
  Fire.
  */
}

Db.insert = function (path, obj) {
  let id = Lib.uuid()
  obj.id = id
  Db.save(path +'.' + id, obj)
}

Db.remove = function (path, obj) {
  localStorage.removeItem(path + '.' + obj.id)
}

Db.loadAll = function (path) {
  let list = []
  for (let key in localStorage) {
    if (key.startsWith(path)) {
      let obj = Db.load(key)
      list.push(obj)
    }
  }
  return list
}

Db.sortBy = function (list, arg) {
  return list.sort((o1, o2) => o1[arg.sortBy] < o2[arg.sortBy])
}

Db.query = function (path, arg) {
  let list = Db.loadAll(path)
  return Db.sortBy(list, arg)
}
