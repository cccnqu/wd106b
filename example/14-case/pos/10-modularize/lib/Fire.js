const Fire = { isInit: false }

// Initialize Firebase
Fire.config = {
  apiKey: "AIzaSyCtF7tTfbheK2i9WUy6xD63RpefAj1VNFk",
  authDomain: "lapos-ccc.firebaseapp.com",
  databaseURL: "https://lapos-ccc.firebaseio.com",
  projectId: "lapos-ccc",
  storageBucket: "lapos-ccc.appspot.com",
  messagingSenderId: "914514522521"
}

/*
  const firestore = firebase.firestore();
  const settings = { your settings...  timestampsInSnapshots: true};
  firestore.settings(settings);
*/

Fire.init = async function () {
  if (Fire.isInit) return
  Fire.app = firebase.initializeApp(Fire.config)
  console.log('Fire.app=', Fire.app)
  Fire.googleProvider = new firebase.auth.GoogleAuthProvider()
  Fire.googleProvider.setCustomParameters({'display': 'popup'})
  // Fire.loginUser = await firebase.auth().onAuthStateChanged()
  // Fire.TIMESTAMP = firebase.database.ServerValue.TIMESTAMP
  Fire.db = firebase.firestore()
  const settings = { timestampsInSnapshots: true}
  Fire.db.settings(settings)
  Fire.isInit = true
}

Fire.googleLogin = async function () {
  let result = await firebase.auth().signInWithPopup(Fire.googleProvider)
  var token = result.credential.accessToken
  Fire.loginUser = result.user
  console.log('Fire.googleLogin() : ', Fire.loginUser)
  return result.user
}
// ========================== Realtime Database ===========================
/*
Fire.clear = async function () {
  return Fire.setByPath('/', {})
}

Fire.setByPath = async function (path, value) {
  console.log('Fire.setByPath: ', path, value)
  return firebase.database().ref(path).set(value)
}

Fire.addByPath = async function (path, value) {
  let ref = firebase.database().ref(path)
  var key = ref.push().key
  value.key = key
  value.time = firebase.database.ServerValue.TIMESTAMP
  var command = {}
  command[key] = value
  await ref.update(command)
  return key
}

Fire.getByPath = async function (path) { // q = {table, orderBy, start, end, limit, desc=false }
  var ref = firebase.database().ref(path)
  const snapshot = await ref.once('value')
  return snapshot.val()
}
*/
// ========================== Cloud Firestore Database ===========================
Fire.setByPath = async function (path, value) {
  let doc = Fire.db.doc(path)
  doc.set(value)
  console.log('Fire.setByPath: ', path, value)
}

Fire.addByPath = async function (path, value) {
  let table = Fire.db.collection(path)
  value.timestamp = firebase.firestore.FieldValue.serverTimestamp()
  var ref = await table.add(value)
  return ref.id
}

/*
// Add a new document in collection "cities"
db.collection("cities").doc("LA").set({
  name: "Los Angeles",
  state: "CA",
  country: "USA"
})
*/

Fire.init().catch(function(error) {
  console.log('error=', error)
})
