const debug = true
const userJson = sessionStorage.getItem('urspace_user')
const toLanguage = sessionStorage.getItem('urspace_to_language')

const shared = {}
export default shared

shared.user = userJson ? JSON.parse(userJson) : null
shared.to = toLanguage

shared.setUser = function (user) {
  if (debug) console.log('setUser:', user)
  this.user = user
  sessionStorage.setItem('urspace_user', JSON.stringify(user))
}

shared.clearUser = function () {
  if (debug) console.log('clearUser:', this.user)
  this.user = null
  sessionStorage.removeItem('urspace_user')
}

shared.isLogin = function () {
  return (this.user != null)
}
