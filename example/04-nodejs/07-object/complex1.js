function add (c1, c2) {
  return { r: c1.r + c2.r, i: c1.i + c2.i }
}

function sub (c1, c2) {
  return { r: c1.r - c2.r, i: c1.i - c2.i }
}

function mul (c1, c2) {
  return {
    r: c1.r * c2.r - c1.i * c2.i,
    i: c1.r * c2.i + c1.i * c2.r
  }
}

function toStr (c) {
  return c.r + '+' + c.i + 'i'
}

var a = { r: 1, i: 2 }
var b = { r: 2, i: 1 }

var add12 = add(a, b)
var sub12 = sub(a, b)
var mul12 = mul(a, b)

console.log('a=%s', toStr(a))
console.log('b=%s', toStr(b))
console.log('add(a,b)=%s', toStr(add12))
console.log('sub(a,b)=%s', toStr(sub12))
console.log('mul(a,b)=%s', toStr(mul12))
