function printTime() {
  console.log(new Date());
  setTimeout(printTime, 1000);
}

setTimeout(printTime, 1000);