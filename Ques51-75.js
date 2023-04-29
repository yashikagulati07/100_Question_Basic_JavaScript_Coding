// Ques 51 - Program to Format Numbers as Currency Strings
/*
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

formatter.format(2500);
 */

//-------------------------------------------------------------

// Ques 52 - Program to Generate Random String
/*
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
console.log(generateString(5));
                OR
const result = Math.random().toString(36).substring(2,7);
console.log(result);
*/

//-------------------------------------------------------------

// Ques 53 - Program to Check if a String Starts With Another String
/*
const string = "hello World";
const toCheckString = "he";
if(string.startsWith(toCheckString)){
    console.log("Yes");
} else{
    console.log("No");
}
*/

//-------------------------------------------------------------

// Ques 54 - Program to Trim a String
/*
const string = "    Hello   ";
const result = string.trim();
console.log(string);
console.log(result);
 */

//-------------------------------------------------------------

// Ques 55 - Program to Convert Objects to Strings
/*
const person = {
    name: 'Yashika',
    age: 20,
}
const result =  JSON.stringify(person);
console.log(result);
console.log(typeof result)
 */

//-------------------------------------------------------------

// Ques 56 - Check Whether a String Contains a Substring

/*
const str = "Yashika";
const checkString = "ikka";
if(str.includes(checkString)){
    console.log("Yes");
} else{
    console.log("No");
}
 */

//-------------------------------------------------------------

// Ques 57 - Program to Compare Two Strings
/*
const s1 = "JS Program";
const s2 = "js program";
const result = s1.toLowerCase() == s2.toLowerCase();
if(result){
    console.log("Similar");
} else{
    console.log("Not similar");
}
 */

//-------------------------------------------------------------

// Ques 58 -  Encode a String to Base64 Using btoa()
/*
const str = "Learning JavaScript"; 
const result = window.btoa(str);
console.log(result);
const result1 = window.atob(result);
console.log(result1);
 */


//-------------------------------------------------------------

// Ques 59 - Program to Replace all Instances of a Character in a String
/*
const string = " Hello guys, i'm learning javascript"
const result = string.replace(/a/g, 'A');
console.log(result);
 */


//-------------------------------------------------------------

// Ques 60 - Replace All Line Breaks

/*
const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;
const result = string.replace(/(\r\n|\r|\n)/g, '<br>');
const result2 = string.split('\n').join('<br>');
console.log(result);
console.log(result2);
 */

//-------------------------------------------------------------

// Ques 61- Display Date and Time
/*
const date = new Date(2017, 2, 12, 9, 25, 30);
const n = date.toDateString();
const time = date.toLocaleTimeString();
console.log('Date: ' + n);
console.log('Time: ' + time);
 */


//-------------------------------------------------------------

// Ques 62 - Program to Check Leap Year
/*
function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
const year = 2020;
checkLeapYear(year);
 */

//-------------------------------------------------------------

// Ques 63 - Program to Format the Date

/*
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
if (month < 10) {
    month = '0' + month;
}
const formattedDate1 = month + '/' + day + '/' + year;
console.log(formattedDate1);
const formattedDate2 = month + '-' + day + '-' + year;
console.log(formattedDate2);
const formattedDate3 = day + '-' + month + '-' + year;
console.log(formattedDate3);
const formattedDate4 = day + '/' + month + '/' + year;
console.log(formattedDate4);
 */

//-------------------------------------------------------------

// Ques 64 - Display Current Date
/*
const date = new Date();
const n = date.toDateString();
const time = date.toLocaleTimeString();
console.log('Date: ' + n);
console.log('Time: ' + time);
 */

//-------------------------------------------------------------

// Ques 65 - Cpmpare the values of two dates 

/*
const d1 = new Date();
const d2 = new Date();
const compare1 = d1 < d2;
console.log(compare1);
const compare2 = d1 > d2;
console.log(compare2);
const compare3 = d1 <= d2;
console.log(compare3);
const compare4 = d1 >= d2;
console.log(compare4);
const compare5 = d1.getTime() === d2.getTime();
console.log(compare5);
const compare6 = d1.getTime() !== d2.getTime();
console.log(compare6);
 */

//-------------------------------------------------------------

// Ques 66 - Program to Create Countdown Timer
/*
let countDownDate = new Date().getTime() + 24 * 60 * 60 *1000;
let x = setInterval(function(){
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;
    const days = Math.floor( timeLeft/(1000*60*60*24) );
    const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
    const minutes = Math.floor( (timeLeft/1000/60) % 60 );
    const seconds = Math.floor( (timeLeft/1000) % 60 );
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    if (timeLeft < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }
    }, 2000);
 */

//-------------------------------------------------------------

// Ques 67 - Program to Remove Specific Item From an Array

/*
const result = removefromarray([1,2,3,4,5],2);
console.log(result);
function removefromarray(array,n){
    const newArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i] !== n){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
 */

//-------------------------------------------------------------

// Ques 68 - Program to Check if An Array Contains a Specified Value
const array = ['you', 'will', 'learn', 'javascript'];
const hasValue = array.includes('javascript');
if(hasValue){
    console.log('Contains a value');
} else{
    console.log('Do not contain a value');
}

//-------------------------------------------------------------

// Ques 69 - Add Item to Array Using splice()
/*
let arr = [1,2,3,4,5];
arr.splice(5,0,9);
console.log(arr);
 */

//-------------------------------------------------------------

// Ques 70 - program to append an object to an array
/*
let arr = [1,2,3];
let obj = {x:12, y:5};
arr.push(obj);
console.log(arr);
 */

//-------------------------------------------------------------

// Ques 71 - Program to Check if An Object is An Array
/*
const arr = [1, 2, 3];
checkObject(arr);
function checkObject(arr) {
    const result = Array.isArray(arr);
    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }
}
 */


//-------------------------------------------------------------

// Ques 72 - Program to Empty an Array
/*
const arr = [1, 2 ,3];
console.log(arr);
const result = emptyArray(array);
console.log(result);
function emptyArray(arr) {
    arr = [];
    return arr;
}
 */


//-------------------------------------------------------------

// Ques 73 - Program to Add Element to Start of an Array
/*
const arr = [1,2,3];
arr.unshift(7);
console.log(arr);
 */

//-------------------------------------------------------------

// Ques 74 - program to remove duplicate value from an array
/*
const arr = [1,2,2,4,4,5];
removeduplicate(arr);
function removeduplicate(arr){
    let unique = [];
    for(let i of arr){
        if(unique.indexOf(i) === -1){
            unique.push(i);
        }
    }
    console.log(unique);
}
 */

//-------------------------------------------------------------

// Ques 75 - Merge Two Arrays and Remove Duplicate Items
/*
const arr1= [1,2,5];
const arr2 = [2,3,5];
getUniqueAfterMerge(arr1, arr2);
function getUniqueAfterMerge(arr1, arr2){
    let arr = arr1.concat(arr2);
    let unique = [];
    for(let i of arr){
        if(unique.indexOf(i) === -1){
            unique.push(i);
        }
    }
    console.log(unique);
}
 */
