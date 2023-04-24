// Ques 1. Using console.log()
// console.log("Hello World");

//-------------------------------

// Ques 2. Program to Add Two Numbers
/*
 const a = parseInt(prompt('Enter the first number '));
const b = parseInt(prompt('Enter the second number '));
const sum = a + b;
console.log(sum);
 */

//-----------------------------------

// Ques 3 - Find the sq root 
/*
const res = Math.sqrt(25);
console.log(res);
*/

//-------------------------------------

// Ques 4 - Calculate the area of triangle 
/*
const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');
const areaValue = (baseValue * heightValue) / 2;
console.log(`The area of the triangle is ${areaValue}`);
*/

//--------------------------------------

//Ques 5 - Swap two variables 
/*
let a = 3;
let b = 5;
[a,b] = [b,a];
console.log(a,b);
*/

//---------------------------------------

// Ques 6 -  Program to Solve Quadratic Equation
/*
let root1, root2;
let a = prompt("Enter number 1");
let b = prompt("Enter number 2");
let c = prompt("Enter number 3");
let discriminant = b*b - 4 * a * c;
if(discriminant > 0){
    root1 = (-b + Math.sqrt(discriminant) / (2*a));
    root2 = (-b - Math.sqrt(discriminant) / (2*a));
    console.log("Roots are ", root1, " and ", root2);
}
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
} 
*/

//--------------------------------------

// Ques 7 - Program to Convert Kilometers to Miles
/*
const km = 2.2;
const factor = 0.621371;
const miles = km * factor;
console.log(miles);
 */

//--------------------------------------------

// Ques 8 - Program to Convert Celsius to Fahrenheit
/*
const celcius = 55;
const fahrenheit = (celcius * 1.8) + 32;
console.log(fahrenheit);
*/

//------------------------------------------

// Ques 9 - generate a random number 
/*
const a = Math.random();
console.log(a);
 */

//------------------------------------------

// Ques 10 - Program to Check if a number is Positive, Negative, or Zero
/*
const a = 3;
if(a>0){
    console.log("Positive");
} else if(a<0){
    console.log("Negative");
} else{
    console.log("Zero");
}
 */

//----------------------------------------------

//Ques 11 - Check if a number is off or even
/*
let a = 8;
if(a%2 === 0){
    console.log("Even");
} else{
    console.log("Odd");
}
 */

//------------------------------------------------

// Ques 12 - Largest among three numbers 
/*
let a = 3;
let b = 2;
let c = 7;
if(a>b && a>c){
    console.log(a, " is largest");
} else if(b>c && b>a){
    console.log(b, " is largest");
} else{
    console.log(c, " is largest")
}
 */

//--------------------------------------------------

//Ques 13 - check if a number is prime or not 
/*
let a = 7;
let isPrime = true;
if(a ===1 ){
    console.log("1 is neither a prime number nor a composite number ")
} else if (a > 1){
    for(let i=2; i<a; i++){
        if(a % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(a, " is a prime number ")
    } else{
        console.log(a, " is not a prime number ")
    }
}
 */

//-----------------------------------------------------

// Ques 14 - Print All Prime Numbers in an Interval
/*
const low = 3;
const high = 6;
for(let i=low; i<=high; i++){
    let flag = 0;
    for(let j=2; j<i; j++){
        if(i%j == 0){
            flag = 1;
            break;
        }
    }
    if(i > 1 && flag == 0){
        console.log(i);
    }
} */

//----------------------------------------------------

// Ques 15 - Print factorial of a number 
/*
let num = 5;
let fact = 1;
for(let i=1; i<=num; i++){
    fact*= i;
}
console.log(fact);
 */

//------------------------------------------------------


// Ques 16 - Display the mutiplication table 
/*
let n = 5;
for(let i=0; i<=10; i++){
    console.log(n, " * ", i, " = ", n*i);
} 
 */

//------------------------------------------------------

// Ques 17 - Print the fibbonacci sequence 
/*
let n = 5;
let a = 0;
let b = 1;
for(let i=0; i<=n; i++){
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}
 */

//-----------------------------------------------------

//Ques 18 - Program to Check Armstrong Number
/*
let sum = 0;
const number = 153;
let temp = number;
while(temp > 0){
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp/10);
}
if(sum == number){
    console.log("Armstrong Number");
} else{
    console.log("Not an amrstrong number ")
}
 */

//---------------------------------------------------

// Ques 19 - Find Armstrong Number in an Interval
/*
let low = 10;
let high = 500;
for(let i=low; i<=high; i++){
    let digits = i.toString().length;
    let sum = 0;
    let temp = i;
    while(temp > 0){
        let remainder = temp % 10;
        sum += remainder ** digits;
        temp = parseInt(temp/10);
    }
    if (sum == i) {
        console.log(i);
    }
}
 */

//--------------------------------------------

// Ques 20 - Program to Make a Simple Calculator
/*
let operator = '+';
let n1 = 4;
let n2 = 6;
let result;
if(operator == '+'){
    result = n1 + n2;
}
else if(operator == '-'){
    result = n2 -  n1;
}
else if(operator == '*'){
    result = n1 * n2;
}
else{
    result = n1/n2;
}
console.log(result);
 */

//-------------------------------------------

// Ques 21 - Find the Sum of Natural Numbers
/*
let n = 100;
let sum = 0;
for(let i=0; i<= n; i++){
    sum += i;
}
console.log("Sum of n natural number is : ", sum);
*/

//-------------------------------------------

// Ques 22 - Check if the Numbers Have Same Last Digit
/*
const a = 8;
const b = 38;
const c = 48;
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;
if(result1 == result2 && result1 == result3) {
    console.log(`same last digit.`);
}
else {
    console.log(`different last digit.`);
}
*/

//--------------------------------------------

// Ques 23 - Program to Find HCF or GCD
/*
let hcf;
const number1 = 60;
const number2 = 72;

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {
    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);
*/

//--------------------------------------------------

// Ques 24 - Program to find LCM
/*
 const num1 = 6;
const num2 = 8;
let min = (num1 > num2) ? num1 : num2;
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}
 */

// ------------------------------------------------------

// Ques 25 - Program to Find the Factors of a Number 
/*
const num = 12;
console.log(`The factors of ${num} is:`);
for(let i = 1; i <= num; i++) {
    if(num % i == 0) {
        console.log(i);
    }
}
*/











