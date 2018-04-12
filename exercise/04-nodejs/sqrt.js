function sqrt(n) {
  let x
  for (x=0; x*x < n; x+=0.001) {
  }
  return x
}

console.log('sqrt(4)=', sqrt(4))
console.log('sqrt(17.8)=', sqrt(17.8))
