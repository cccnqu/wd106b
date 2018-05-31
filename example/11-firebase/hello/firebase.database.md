# Firebase.database

## 寫入

```js
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
});

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
  var newPostKey = firebase.database().ref().child('posts').push().key; // 注意這行，用 key 取得插入的 post 物件代號。

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
```

## 過濾

* OrderByKey() -- Order results by child keys
* OrderByChild(field) -- Order results by the value of a specified child key
  * Queries can only order by one key at a time. Calling orderByChild() multiple times on the same query is an error.
* orderByValue() -- Order results by child values.
* startAt(), endAt(), and equalTo()
  * https://firebase.google.com/docs/reference/js/firebase.database.Reference
* limitToFirst(limit) , limitToLast(limit)

OrderByChild 的排序順序 -- https://firebase.google.com/docs/database/web/lists-of-data#sort_data

* Children with a null value for the specified child key come first.
* Children with a value of false for the specified child key come next. If multiple children have a value of false, they are sorted lexicographically by key.
* Children with a value of true for the specified child key come next. If multiple children have a value of true, they are sorted lexicographically by key.
* Children with a numeric value come next, sorted in ascending order. If multiple children have the same numerical value for the specified child node, they are sorted by key.
* Strings come after numbers and are sorted lexicographically in ascending order. If multiple children have the same value for the specified child node, they are ordered lexicographically by key.
* Objects come last and are sorted lexicographically by key in ascending order.

## 交易 (transactions)

```js
function toggleStar(postRef, uid) {
  postRef.transaction(function(post) {
    if (post) {
      if (post.stars && post.stars[uid]) {
        post.starCount--;
        post.stars[uid] = null;
      } else {
        post.starCount++;
        if (!post.stars) {
          post.stars = {};
        }
        post.stars[uid] = true;
      }
    }
    return post;
  });
}
```

## 離線運作 (Write data offline)

If a client loses its network connection, your app will continue functioning correctly.

Every client connected to a Firebase database maintains its own internal version of any active data. When data is written, it's written to this local version first. The Firebase client then synchronizes that data with the remote database servers and with other clients on a "best-effort" basis.

As a result, all writes to the database trigger local events immediately, before any data is written to the server. This means your app remains responsive regardless of network latency or connectivity.

Once connectivity is reestablished, your app receives the appropriate set of events so that the client syncs with the current server state, without having to write any custom code.

## 事件

* on

```js
ref.on('value', function(dataSnapshot) {
  ...
});

ref.on('child_added', function(childSnapshot, prevChildKey) {
  ...
});

ref.on('child_removed', function(oldChildSnapshot) {
  ...
});

ref.on('child_changed', function(childSnapshot, prevChildKey) {
  ...
});

ref.on('child_moved', function(childSnapshot, prevChildKey) {
  ...
});

ref.once('value').then(function(dataSnapshot) {
    // handle read data.
});

var ref = firebase.database().ref("dinosaurs");
ref.orderByChild("height").on("child_added", function(snapshot) {
  console.log(snapshot.key + " was " + snapshot.val().height + " m tall");
});
```

## 設定索引規則

* [FIREBASE WARNING: Using an unspecified index. Consider adding “.indexOn”: “Keyboards” at / to your security rules for better performance](https://stackoverflow.com/questions/46754749/firebase-warning-using-an-unspecified-index-consider-adding-indexon-keybo/46755222)

