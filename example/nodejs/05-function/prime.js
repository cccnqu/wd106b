function isPrime(n) {
  for (var i=2; i<n; i++) {
    if (n%i === 0)
      return false;
  }
  return true;
}

console.log("isPrime(33)="+isPrime(33));
console.log("isPrime(17)="+isPrime(17));

for (var p=1; p<=100; p++) {
  if (isPrime(p))
    console.log("isPrime("+p+")");
}