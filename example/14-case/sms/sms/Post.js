const Post = {}

Post.start = function () {
  if (User.isLogin()) {
    Ui.show(`<h1>新增貼文</h1>
    <div style="text-align:left">
      <input id="postTitle" type="text" placeholder="標題" style="width:100%"/><br/>
      <textarea id="postBody" placeholder="內文"></textarea>
    </div>
    <button onclick="Post.save()">送出</button>
    <button>放棄</button>  
    `)
  } else {
    User.showLogin()
  }
}

Post.save = function () {
  try {
    let id = Fire.addByPath('/sms/', { 
      title: Ui.id('postTitle').value,
      body: Ui.id('postBody').value
    })
    alert('儲存成功！')
  } catch {
    alert('儲存失敗！')
  }
}
