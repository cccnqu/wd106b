// 第一種寫法，直接宣告函數
function sub(a,b) {         
  return a-b;
}

// 第二種寫法，將匿名函數指定給變數。
var add = function(a,b) {     
  return a+b;
}
console.log("add(3,5)=", add(3,5), " sub(7,2)=", sub(7,2));