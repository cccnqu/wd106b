function countPrime(a,b)
{
c=0
for(i=a;i<=b;i++){
    for(j=2;j<=i;j++)
    {
        if(i%j==0)
        break;
    }
    if(i==j){c++
    }
}}
console.log(countPrime(3,7))
console.log(c)