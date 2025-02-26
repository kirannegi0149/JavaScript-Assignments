// Q1. Write a JavaScript program to construct the     following pattern, using a nested for loop.
//       * 
//       * * 
//       * * *  
//       * * * *
//       * * * * *

const n = 5;
for (let i = 1; i <= n; i++) {
    let pattern="";
    
    for (let j = 1; j <= i; j++) {
        pattern+="* ";
    }
    console.log(pattern);
}

// Q2. Iterate through all numbers from 1 to 45. Print the following:

//    For multiples of 3 print “Fizz”
//    For multiples of 5 print “Buzz”
//    For multiples of 3 and 5 print “FizzBuzz”
let num=3;
for(let i=1; i<=45; i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("FizzBuzz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else if(i%3==0)
    {
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
}


// Q3. Calculate the sum of all the numbers in the following array

// var numbersArray = [1,13,22,123,49]

var numbersArray = [1,13,22,123,49];
var sum=0;
for(let i=0; i<numbersArray.length; i++)
{
    sum+=numbersArray[i];
    
}
console.log("sum" + "="+sum);


// Q4.Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let sum1=0;
for(let i=0; i<arr1.length; i++)
{
    sum1+=arr1[i];
}
console.log(sum1);

let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let sum2=0;
for(let i=0; i<arr2.length; i++)
{
    sum2+=arr2[i];
}
console.log(sum2);
console.log("Total" + "=" + (sum1+ sum2));


// Q5.Using a for loop output the elements in reverse order

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];


let arr =[43, "what", 9, true, "cannot", false, "be", 3, true];
for(let i=arr.length-1 ; i>=0; i--)
{
console.log(arr[i]);
}



