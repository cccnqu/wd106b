const Sms = {
  steps: 5,
  isFinished: false,
  posts: []
}

Sms.setInfiniteScroll = function (container) {
  var options = {
    distance: 5,
    callback: function(done) {
      Sms.nextPage(Ui.id('main')).then(function (r) {
        done()
      })
    }
  }
  infiniteScroll(options)
}

Sms.reset = function () {
  Sms.isFinished = false
  Sms.last = null
  Sms.posts = []
}

Sms.start = async function () {
  User.restore()
  Ui.show('')
  Sms.reset()
  infiniteScroll({}) // 必需先做這行，否則可能會多出 step 筆紀錄
  await Sms.nextPage(Ui.id('main'))
  Sms.setInfiniteScroll(Ui.id('main'))
  if (User.user != null) {
    Ui.id('userName').innerHTML = User.getName()
  } else {
    Ui.id('userName').innerHTML = '尚未登入'
  }
}

Sms.nextStep = async function () {
  if (Sms.isFinished) return
  let ref = (Sms.last == null) ? Fire.db.collection('sms').limit(Sms.steps) : Fire.db.collection('sms').startAfter(Sms.last).limit(Sms.steps)
  let r = await ref.get()
  Sms.last = r.docs[r.docs.length-1]
  if (r.docs.length < Sms.steps) Sms.isFinished = true
  return r
}

Sms.nextPage = async function (container) {
  let r = await Sms.nextStep()
  if (r == null) return
  console.log('---------------- page ---------------------')
  for (let i=0; i<r.docs.length; i++) {
    let top = Sms.posts.length
    let post = r.docs[i].data()
    Sms.posts.push(post)
    console.log('post['+top+']=', JSON.stringify(post))
    node = document.createElement('div')
    node.className = 'post'
    node.innerHTML = 'i = ' + top + JSON.stringify(post)
    container.appendChild(node)
  }
}
