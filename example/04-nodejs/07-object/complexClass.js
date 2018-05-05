class Complex {
  constructor (r, i) {
    this.r = r
    this.i = i
  }

  add (c2) {
    return new Complex(this.r + c2.r, this.i + c2.i)
  }

  sub (c2) {
    return new Complex(this.r - c2.r, this.i - c2.i)
  }

  mul (c2) {
    return new Complex(this.r * c2.r - this.i * c2.i,
                       this.r * c2.i + this.i * c2.r)
  }
  toString () {
    return this.r + '+' + this.i + 'i'
  }
}

var a = new Complex(1, 2)
var b = new Complex(2, 1)

var x = a.add(b).sub(b).mul(b)

console.log('a=%s', a)
console.log('b=%s', b)
console.log('a.add(b)=%s', a.add(b))
console.log('a.sub(b)=%s', a.sub(b))
console.log('a.mul(b)=%s', a.mul(b))
console.log('x=%s', x)
