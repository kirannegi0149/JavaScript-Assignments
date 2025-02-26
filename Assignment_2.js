// Q1.Find Grades
// Your school has the following grading system based upon the marks (M) obtained by a student:
//  If M≤10, the grade will be E.
//  If 11≥M≤20, the grade will be D.
//  If 21≥M≤30, the grade will be C.
//  If 31≥M≤40, the grade will be B.
//  If 41≥M≤50, the grade will be A.
// Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement
let marks = 49;
let grade;
switch (true) {
    case marks >= 0 && marks <= 10:
        grade = "E";
        break;
    case marks >= 11 && marks <= 20:
        grade = "D";
        break;
    case marks >= 21 && marks <= 30:
        grade = "C";
        break;
    case marks >= 31 && marks <= 40:
        grade = "B";
        break;
    case marks >= 41 && marks <= 50:
        grade = "A";
        break;
    default:
        grade = "Invalid Marks";
}
console.log(grade);


// Q2. Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the
// table corresponding to an input character and return it.
// | P or p - PrepBytes |
// | Z or z - Zenith |
// | E or e - Expert Coder |
// | D or d - Data Structure |

let char = "D";
if (char == "P" || char == "p") {
    console.log("PreBytes");
}
else if (char == "Z" || char == "z") {
    console.log("Zenith");
}
else if (char == "E" || char == "e") {
    console.log("Expert Coder");
}
else (char == "D" || char == "d") 
{
    console.log("Data Structure");
}


// Q3. Find the maximum out of three numbers.
// Take three numbers and print the largest number among them if all of three are same print −1−1.
// Note: You have to complete Max_out_of_three. No need to take any input.
// Input Format
// The input contains three numbers A, B and C.
// Output Format
// Return the maximum number out of the three numbers as result.
let A = 12;
let B = 1;
let C = 11;
if(A==B && B==C && C==A){
    console.log(-1-1);
}
else if (A > B && A > C) {
    console.log(A);
}
else if (B > A && B > C) {
    console.log(B);
}
else{
    console.log(C);
}


// Q4. Second Smallest
// You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided
// integers.
let a=12;
let b=13;
let c=23;
if(a>b && a<c || a<b && a>c)
{
    console.log(a);
}
else if(b>a && b<c || b<a && b>c)
{
    console.log(b);
}
else 
{
    console.log(c);
}


// Q5. Check whether the triangle is Acute or Obtuse
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
// Note: You have to complete Triangle_Check. No need to take any input
let A1=100;
let B1=20;
let C1=60;
if(A1+B1+C1 !==180){
    console.log("Not a traingle");
}
else if(A1<90 && B1<90 && C1<90)
{
    console.log("Acute");
}
else
{
    console.log("Obtuse");
}

