var dict = { name: 'john', age: 30 }

dict['email'] = 'john@gmail.com'
dict.tel = '02-12345678'

for (var key in dict) {
  console.log('key=', key, ' value=', dict[key])
}

console.log('age=', dict.age)
console.log('birthday=', dict['birthday'])
