function sum(n) {
  var s=0;
  for (i=1; i<=n; i++) {
    s = s+i;
  }
  return s;
}

sum10 = sum(10);
console.log("1+...+10="+sum10);