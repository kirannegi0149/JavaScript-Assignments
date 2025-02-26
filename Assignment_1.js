// JavaScript Questions
// Q1. Add two Numbers
// You are provided with two numbers A and B. Your task is to add these two numbers.
// Note: You have to complete AddTwoNumbers function. No need to take any input.
// Input Format
// The first line contains two integers A and B.
// Output Format = Return the result after adding two numbers.
// Constraints
// 1≤A, B≤5001≤, ≤500

let a=4;
let b=6;
let res=a+b;
console.log(res);


// Q2. Find if the conditions are obeyed or not?
// You are given two number first as A� and second as B� and check if both conditions
// (A<10�<10 and A>B�>�) are satisfied or not with the help of operators.
// Note: You have to complete Is_Valid function. No need to take any input.
// Input Format
// The first line contains two integers A� and B�.
// Output Format
// Return the result as true if the given condition gets satisfied, else false.
// Constraints
// 1≤A,B≤5001≤�,�≤500

let A=5;
let B=3;
console.log(A<10 && B<10 &&A>B);


// Q3.Check the conditions
// You are given two numbers A� and B�. You need to do the following checks:
// 1. if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this.
// Note: You have to complete Check function. No need to take any input
// Input Format
// The first line contains two natural numbers A� and B�.
// Output Format
// Return the required result.
// Constraints
// 1≤A,B≤100001≤�,�≤10000

let c=10;
let d=20;

// if both are divisible by 10 console true.
console.log(c%10==0 && d%10==0);

// if both are not divisible by 10 console false.
console.log(c%!10==0 && d%!10==0);

// if one of them only is divisible by 10 console true.
console.log(c%10==0 || d%10==0);

// Q4.Find the first digit of a 4 digit number
// You are provided a four digit number N only. Your task is to print out the first digit of that
// number.
// Note: You have to complete First_Digit function. No need to take any input.
// Input Format
// The first line contains one four digit natural number N�.
// Output Format
// Return the required result.
// Constraints
// 1000≤N≤99991000≤�≤9999

let N=4577;
let res1=Math.floor(N/1000);
console.log(res1);


// Q6.Find the remainder
// You are provided with two numbers A� and B� where A� as divisor and B� as dividend.Your
// task is find the remainder.
// Note: You have to complete Find_the_remainder function. No need to take any input.
// Input Format
// The first line of the input contains two integers A� and B�.
// Output Format
// Return the result after finding the remainder.
// Constraints
// 1≤A,B≤10001≤�,�≤1000

let divisor=9;
let dividend=2;
console.log(9%2==0);


// Q7.Multiply two Numbers
// You are provided with two numbers A� and B�. Your task is to multiply these two numbers.
// Note: You have to complete Multiply_two_number function. No need to take any input.
// Input Format
// The first line contains two integers A� and B�.
// Output Format
// Return the result after multiplying two numbers.
// Constraints
// 1≤A,B≤301≤�,�≤30

let A1=2;
let A2=5;
console.log(A1*A2);


// Q8. Marks Calculator
// Shyam has got his marks in three subjects as A�, B�, and C� (out of 100).Write a program to
// calculate his total marks and his average.
// Note: You have to complete Sum and Average functions. No need to take any input.
// Input Format
// The input contains three numbers A�, B� and C�.
// Output Format
// Return the required result.
// Constraints
// 0≤A,B,C≤1000≤�,�,�≤100

let X=50;
let Y=20;
let Z=100;
let add=X+Y+Z;
console.log(add);
console.log(add/3);




