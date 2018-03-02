function sub(a,b) {         
  return a-b;
}

function f5(f, a) {
  return f(a, 5);
}

console.log("sub(8,5)="+sub(8, 5));
console.log("f5(sub,8)="+f5(sub,8));