const User = {
  // user: null
}

/*
User.restore = function () {
  let user = Local.load('User')
  if (user) User.user = user
}
*/
User.isLogin = function () {
  return Shared.user != null
}

User.getName = function () {
  if (Shared.user == null) return null
  return Shared.user.name
}

User.logout = function () {
  Shared.user = null
  Local.remove('User')
  // Sms.start()
  User.showLogout()
}

User.showLogin = function () {
  let msg = (User.isLogin()) ? '您已經登入了，身分是' + User.getName() + ' !' : '您尚未登入，請先登入！'
  Ui.show(`<h1>${msg}</h1><br/>
  <button id="googleLoginBtn" onclick="User.googleLogin()">Google 登入</button>`)
}

User.showLogout = function () {
  Ui.show(`<h1>您已經登出!</h1>`)
}

User.googleLogin = async function () {
  var gUser = await Fire.googleLogin()
  if (gUser != null) {
    let user = {uid: gUser.uid, name: gUser.displayName, email: gUser.email}
    Ui.id('userName').innerHTML = user.name
    Shared.user = user
    Local.save('User', user)
    Ui.show('<h1>您已登入成功！</h1>')
    // User.login(user)
    return user
  }
}

User.myShop = function () {
  Shop.mainPage()
}

User.newShop = function () {
  Setting.start()
}

User.findShop = function () {
  Gmap.start()
}