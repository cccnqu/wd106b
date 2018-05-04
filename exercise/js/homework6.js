function commonFactor(a,b)
{
while(b!=0)
{
    i=a%b;
    a=b;
    b=i
}
console.log("%d",a)
}
console.log(commonFactor(12,15))