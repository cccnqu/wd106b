var george = {
  'name': 'George',
  'age': 25,
  'friends': [
     { 'name': 'John', 'age': 22 },
     { 'name': 'Mary', 'age': 28 }
  ]
}

console.log('george = %j', george)
console.log('george.age=' + george.age)
console.log('george.friends:')
var friends = george.friends
for (let i in friends) {
  console.log('    ' + friends[i].name + ' is ' + friends[i].age + ' years old!')
}
