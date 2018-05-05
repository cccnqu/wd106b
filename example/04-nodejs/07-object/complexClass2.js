var c = console

class Complex {
  constructor (a, b) { this.a = a; this.b = b }
  conj () { return new Complex(this.a, -1 * this.b) }
  add (c2) { return new Complex(this.a + c2.a, this.b + c2.b)    }
  sub (c2) { return new Complex(this.a - c2.a, this.b - c2.b)    }
  mul (c2) {
    var a=this.a, b=this.b, c=c2.a, d=c2.b
    return new Complex(a*c-b*d, a*d+b*c)
  }
  div(c2) {
    var a=this.a, b=this.b, c=c2.a, d=c2.b;
    return new Complex((a*c+b*d)/(c*c+d*d), (b*c-a*d)/(c*c+d*d));
  }
  toString() { return this.a+'+'+this.b+'i' }
  parse(s) {
    var m = s.match(/^([^\+]*)(\+(.*))?$/)
    var a = parseFloat(m[1])
    var b = typeof m[3] === 'undefined' ? 1 : parseFloat(m[3])
    return new Complex(a, b)
  }
}

Complex.parse = Complex.prototype.parse

var c0 = Complex.parse('1+2i')
c.log(c0)

var c1 = new Complex(2, 3)
c.log(c1.toString())

var c2 = c1.add(c1).mul(c1).div(c1)
c.log(c2.toString())
