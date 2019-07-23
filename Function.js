function larger (x, y, z) // 3 6 9 
{
    if(x>y)
    {
        if(x>z)
        console.log("A is greater");
        else
        console.log("C is greater");
    }
    else if(y>z)
    {
        console.log("B is greater");
    }
    else console.log("C is greater");
}
let a=3, b=6, c=9;
larger (a, b, c);
