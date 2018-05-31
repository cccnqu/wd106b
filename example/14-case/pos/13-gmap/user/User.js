const User = {
  user: null
}

User.restore = function () {
  let user = Local.load('User')
  if (user) User.user = user
}

User.isLogin = function () {
  return User.user != null
}

User.getName = function () {
  if (User.user == null) return null
  return User.user.name
}

User.logout = function () {
  User.user = null
  Local.delete('User')
  // Sms.start()
  User.showLogout()
}

User.showLogin = function () {
  let msg = (User.isLogin()) ? '您已經登入了，身分是' + User.getName() + ' !' : '您尚未登入，請先登入！'
  Ui.show(`<h1>${msg}</h1>
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
    User.user = user
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