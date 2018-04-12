function find(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) return i
  }
  return -1
}

let idx = find([ 1, 4, 5, 8, 9], 5)
console.log('idx=', idx)

idx = find([ 1, 4, 5, 8, 9], 6)
console.log('idx=', idx)
