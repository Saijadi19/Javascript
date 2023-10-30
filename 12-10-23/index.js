// pattern-1 

function printPattern(a){
    for(let i=1;i<=a;i++)
    {
          let pattern = ' ';

        for( let j=1;j<=i;j++)
        {
            pattern +='* ';

        }
        console.log(pattern);
    }

}
printPattern(5)



// pattern-2
function printPattern(a){
    for(let i=a;i>=1;i--)
    {
          let pattern = ' ';

        for( let j=1;j<=i;j++)
        {
            pattern +='* ';

        }
        console.log(pattern);
    }

}
printPattern(5)

