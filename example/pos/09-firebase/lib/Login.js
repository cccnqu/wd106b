const Login = {}

Login.html = `
<table>
<tr><td>帳號</td><td> <input id="username" type="text" class="short" placeholder="Username"></td></tr>
<tr><td>密碼</td><td> <input id="password" type="password" class="short" placeholder="Password"></td></tr>
</table>
<button onclick="Login.login()">登入</button>
<br/><br/>
<button onclick="Login.facebookLogin()">Facebook 登入</button>
<button id="googleLoginBtn" onclick="Login.googleLogin()">Google 登入</button>
</div>
`

//  onclick="Login.googleLogin()"

Login.start = function () {
  Ui.show(Login.html)
}

Login.googleLogin = async function () {
  let user = await Fire.googleLogin()
  Ui.id('userDisplayName').innerHTML = user.displayName
  
  /*
  Fire.googleLogin(function(user) {
    Ui.id('userDisplayName').innerHTML = user.displayName
  })
  */
}