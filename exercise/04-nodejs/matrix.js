function add(m1, m2) {
  let m = []
  for (let i=0; i < m1.length; i++) {
    m[i] = []
    for (let j=0; j < m1[i].length; j++) {
      m[i][j] = m1[i][j] + m2[i][j]
    }
  }
  return m
}

let M = add([ [1,2], [3,4] ], [ [1,1], [1,1] ]) // => [[2,3], [4,5]]
console.log('M=%j', M)
