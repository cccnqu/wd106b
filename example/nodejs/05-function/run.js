function run(f, x) {
  var fx = f(x);
  console.log("f(x)="+fx);
}

run(Math.sin, Math.PI/4);