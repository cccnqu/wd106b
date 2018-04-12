import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCmc44S50DGj-f9LbagNPLgnVHHaphIZhI',
  authDomain: 'ccc-urspace.firebaseapp.com',
  databaseURL: 'https://ccc-urspace.firebaseio.com',
  projectId: 'ccc-urspace',
  storageBucket: '',
  messagingSenderId: '1023578722292'
})

export async function googleLogin () {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const result = await firebase.auth().signInWithPopup(googleProvider)
  return result.user
}

const fdb = firebaseApp.database()

export const db = {}

db.TIMESTAMP = firebase.database.ServerValue.TIMESTAMP

db.add = async function (table, record) {
  let ref = fdb.ref('/' + table + '/')
  var key = ref.push().key
  var command = {}
  command[key] = record
  return ref.update(command)
}

db.query = async function (q) { // q = {table, orderBy, start, end, limit, desc=false }
  var ref = fdb.ref('/' + q.table + '/').orderByChild(q.orderBy)
  ref = (q.start != null) ? ref.startAt(q.start) : ref
  ref = (q.end != null) ? ref.endAt(q.end) : ref
  ref = (q.sort === 'desc') ? ref.limitToLast(q.limit) : ref.limitToFirst(q.limit)
  const snapshot = await ref.once('value')
  const list = []
  snapshot.forEach(function (childSnapshot) {
    list.push(childSnapshot.val())
  })
  console.log('query:q=%j list=%j', q, list)
  if (q.sort === 'desc') list.reverse()
  return list
}

export default { db: db, googleLogin: googleLogin }
