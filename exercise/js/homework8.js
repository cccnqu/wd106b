function isPrime(a)
{
for(i=2;i<=a;i++)
{
    if(a%i==0) 
    {
        console.log('No');
        break;
    }
    else 
    {
        console.log('ture');
        break;
    }
}}
console.log(isPrime(17))