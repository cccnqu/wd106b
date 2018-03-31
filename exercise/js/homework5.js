function degree(average)
{
if(average>=90)
{
console.log("A");
}
else if(average>=80)
{
console.log("B")
}
else if(average>=70)
{
console.log("C")
}
else if(average<69)
{
console.log("D")
}
return average;
}
console.log(degree(91))