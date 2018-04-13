# Firebase

執行：

```
$ npm i live-server
$ live-server
```

然後看 http://localhost:8080/ 選下列檔案：

* http://localhost:8080/firebaseLogin.html
* http://localhost:8080/firebaseDatabase.html
* http://localhost:8080/firebaseDatabaseMessages.html

記得開《開發人員工具》觀察結果！

## 參考資料

* https://firebase.google.com/
  * [Firebase 簡體中文官方首頁](https://firebase.google.com/docs/firestore/rtdb-vs-firestore?hl=zh-cn)
* [Firebase 介紹 (1)](http://guang.logdown.com/posts/262366-firebase-describes-a)
* Firebase網頁教學
  * [1 - 專案操作](http://sj82516-blog.logdown.com/posts/1048782/auth-firebase-web-operations-validation-review)
  * [2 - 驗證篇](http://sj82516-blog.logdown.com/posts/1050619)
  * [3 - Realtime Databe篇](http://sj82516-blog.logdown.com/posts/1061094)
* [[Angular Firebase 入門與實做] Day-07 Cloud Firestore - Hosting](https://ithelp.ithome.com.tw/articles/10194219?sc=iThelpR)
  * npm i -g firebase-tools
  * firebase login
  * firebase init
  * firebase deploy --only hosting

## 整體功能

* Firebase
  * database -- 網狀 JSON 資料庫 (較基礎) [參考](https://ithelp.ithome.com.tw/articles/10193074)
  * firestore -- 文件式資料庫 (像 mongodb, 較新) [參考](https://ithelp.ithome.com.tw/articles/10193495)
  * messaging -- 訊息傳遞 [參考](https://ithelp.ithome.com.tw/articles/10196749)
  * storage -- 檔案系統 [參考](https://ithelp.ithome.com.tw/articles/10194983)


## Firebase.database -- 網狀資料庫

Firebase 是一種網狀 JSON 資料庫，優點是彈性，缺點是《沒有正規化》，資料並非原子狀，所以刪除與修改動作可能需要做好幾次，端看你曾經在那裡放置資料。

舉例而言，以下程式在貼文後，同時對兩個地方做新增。

```js
function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
```