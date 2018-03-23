function modify(num, array) {
  num = num + 1;
  array[0] = array[0] + 1;    
}

var n=3, a=[3,2,1];

modify(n, a);

console.log("n=", n, " a=", a);