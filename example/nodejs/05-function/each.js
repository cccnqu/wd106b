function each(a, f) {
  for (var i in a) {
    f(a[i]);
  }
}

each([3,4,5,6], console.log);

function sinPrint(x) {
  console.log("sin(%d)=%d", x, Math.sin(x));
}

each([3,4,5,6], sinPrint);