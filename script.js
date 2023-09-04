
// Use a for loop to call a function multiple times that calculates the square of a number and prints the result.
//(ask input in prompt and show result in alert)
 
let count = 0;
 
function square(x)
{
    alert(`The square of ${x} is ${x*x}`)
}

let times = prompt("How many times you want to calculate the square of a number")

for (i=0; i<times; i++)
{
    count++;
    let num = prompt( `${count}.Enter the number to square`);
    square(num);
}