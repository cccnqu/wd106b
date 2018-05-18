const Model = {}

Model.shopSave = function () {
  Db.save('Shop', Shop)
  if (!Fire.app) return
  if (Shop.id == null || Shop.id.length === 0) {
    Shop.id = Fire.addByPath('/shops/', Shop)
  } else {
    Fire.setByPath('/shops/'+Shop.id+'/', Shop)
  }
}

Model.shopLoad = function () {
  Shop = Db.load('Shop') || Shop
}
