const Shared = {}

Shared.shop = {
  name: '茶舖子',
  address: '金門縣金寧鄉安美村湖南 33 號',
  tel: '082-333333',
  items: {'紅茶': 20, '綠茶': 20, '珍珠奶茶': 35 },
  addons: {'去冰': 0, '半糖': 0, '熱': 0, '加鮮奶': 10 },
  isComeToShop: true,
  isMailToYou: false,
  isGoForYou: false
}

Shared.user = {
  id: '129IKrI6YPcCPazi9SuvqmU8BBn1',
  name: '陳鍾誠',
  email: 'ccckmit@gmail.com',
}

Shared.shops = [
  {
    id: '1',
    name: '茶舖子',
    address: '金門縣金寧鄉安美村湖南 33 號',
    tel: '082-333333',
    items: {'紅茶': 20, '綠茶': 20, '珍珠奶茶': 35 },
    addons: {'去冰': 0, '半糖': 0, '熱': 0, '加鮮奶': 10 },
    isComeToShop: true,
    isMailToYou: false,
    isGoForYou: false,
    at: { lat: 24.44, lng: 118.32 }
  },
  {
    id: '2',
    name: '農莊七號',
    address: '金門縣金寧鄉安美村湖南7號',
    tel: '082-333444',
    items: {'馬鈴薯': 20, '火龍果': 40, '土雞': 150 },
    addons: { },
    isComeToShop: true,
    isMailToYou: false,
    isGoForYou: false,
    at: { lat: 24.43, lng: 118.33 }
  }
]

Shared.restore = function () {
  Shared.user = Shared.loadObj('User')
  Shared.shop = Shared.loadObj('Shop')
}

Shared.load = function (path) {
  return Local.load(path)
}

Shared.save = function (path, obj) {
  Local.save(path, obj)
  /*
  if (!Fire.app) return
  if (obj.id == null || obj.id.length === 0) {
    obj.id = Fire.addByPath(path, obj)
  } else {
    Fire.setByPath(path + '/' + shop.id, obj)
  }
  */
}


/*

Shop.save = function () {
  const shop = Shop.shop
  Db.save('Shop', shop)
  if (!Fire.app) return
  if (shop.id == null || shop.id.length === 0) {
    shop.id = Fire.addByPath('/shops/', shop)
  } else {
    Fire.setByPath('/shops/'+shop.id+'/', shop)
  }
}

Shop.load = function () {
  Shop.shop = Db.load('Shop') || Shop.shop
}

*/
