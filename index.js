// console.log("Hello");
// let str_val = "Welcome Geeks to GeeksForGeeks";
// console.log(str_val);

const { join } = require("path");

//1.) length() Example
/*
function getLength(str){
  console.log(str.length);
}
getLength(str_val); 
*/

// 2.) indexOf() Example
/*
function getIndex(str){
  console.log(str.indexOf("ee"));
}
getIndex(str_val);
*/

// 3.) lastIndexOf()
/*
function getLastIndex(str){
  console.log(str.lastIndexOf("Geeks"));
}
getLastIndex(str_val);
*/

// 4.) slice(startIndex, endIndex) Example
/*
function getSlice(str){
  console.log(str.slice("0", "7"));
}
getSlice(str_val);
*/

// 5.) substring(startIndex, lastIndex)
/*
function getSubstring(str){
  console.log(str.substring("10","7"));
}
getSubstring(str_val);
*/

// 6.) substr(start, length)
/*
function getSubstr(str){
  console.log(str.substr("11", "4"));
}
getSubstr(str_val);
*/

// 7.) replace(replace_value, replace_with_value) example
/*
function getReplace(str){
  console.log(str.replace("Geeks", "students"));
}
getReplace(str_val);
*/

// 8.) replaceAll(regex | substring, newSubstr | funtion)
/*
function getReplaceAll(str){
  console.log(str.replaceAll("Geeks", "Geek"));
}
getReplaceAll(str_val);
*/

// 9.) toUpperCase(string variable) Example
/*
function getUpperCase(str){
  console.log(str.toUpperCase(str));
}
getUpperCase(str_val);
*/

// 10.) toLowerCase(string variable) Example
/*
function getLowerCase(str){
  console.log(str.toLowerCase(str));
}
getLowerCase(str_val);
*/

// 11.) concat() Example
/*
function getConcatValue(str){
  console.log(str.concat(" this year"));
}
getConcatValue(str_val);
*/

// 12.) trim() Example
/*
function getTrimValue(str){
console.log(str.trim());
}

getTrimValue("     Rohit Bhardwaj       ");
*/

// 13.) trimStart() Example
/*
function getTrimStartValue(str){
  console.log(str.trimStart());
}
getTrimStartValue("     Rohit Bhardwaj");
*/

// 14.) trimEnd() Example
/*
function getTrimEndValue(str){
  console.log(str.trimEnd());
}

getTrimEndValue("Rohit Bhardwaj            ");
*/

// 15.) pad() example
/*
function getPaddValue(str){
  console.log(str.padStart("9", "Soul "));
}

getPaddValue("Mate");
*/

// 16.) padEnd() Example
/*
function getPadEnd(str){
  console.log(str.padEnd("9", "Mate"));
}
getPadEnd("Soul ");
*/

// 17.) charAt() Example
/*
function getCharAt(str){
  console.log(str.charAt(2));
}
getCharAt(str_val);
*/

// 18.) charCodeAt() Example
/*
function getCharCodeAt(str){
  console.log(str.charCodeAt(2));
}
getCharCodeAt(str_val);
*/

// 19.) Split() Example
/*
function getSplit(str){
  console.log(str.split(' '));
}
getSplit(str_val);
*/

/* Given a string S and two integers L and R. Print the characters in the range L to R of the string.
NOTE: Assume zero based indexing. */

// function getSubString(str, l, r){
//   var ans = "";
//   for(let i=l; i<=r; i++){
//     ans += str[i];
//   }
//   return ans;
// }

// console.log(getSubString("Bhardwaj", 2, 6));

// ======================================================================
// Arrays - Non primitive data type
// Iterating values of an array

// let s1 = "Prakash";
// let s2 = "Ashish";
// let s3 = "Riya";
// let s4 = "Adarsh";
// let studentName = ["Prakash", "Adarsh", "Riya", "Ashish", "Jay", "Piyush"];

/* For loop */
// for(let i=0; i<studentName.length; i++){
//   console.log(studentName[i]);
// }

/* for let of */
// for( let name of studentName){
//   console.log(name);
// }

/* let for in */
// for(let name in studentName){
//   console.log(name);
// }

// -------------------------------------------------
// Array reference
/*
let arr1 = [1, 2, 3]; //is referring to memory loction - abc123
let arr2 = arr1; //Is also pointing/referring to the same memory location

//Shallow copy
console.log("Arr1: "+ arr1);
console.log("Arr2: "+ arr2);

arr2.push(4);
console.log("Updated arr1: " + arr1);
console.log("Updated arr2: " + arr2);

//Spread operator
let arr3 = [...arr1];
console.log("Arr3 - :" + arr3);

arr3.push(5);
console.log("Updated arr1: "+ arr1);
console.log("Updated arr3: " + arr3);

//Another Way
let arr4 = [1, 2, 3, 4];
let arr5 = [];
for(let number of arr4){
  arr5.push(number);
}
console.log("Arr4: "+ arr4);
console.log("Arr5: "+ arr5);

arr5.push(5);

console.log("Updated Arr4: "+ arr4);
console.log("Updated Arr5: " + arr5);
*/

// ----------------------------------------------------------------------

// Array Methods - Push & Concat
 // Mutable (Changed) Object OR Immutable (Not Changed)
// Push Method
/*
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
fruits.push("Orange");
console.log(fruits);
fruits.push("Kiwi", "Berries", "Melons");
console.log(fruits);
*/

// Concat Method
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = arr1.concat(arr2);

// console.log(arr3);

// ...................................
/*
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let arr4 = arr1.concat(arr2);
let arr5 = arr1.concat(arr2, arr3);
console.log(arr4);
console.log(arr5);
*/

// ----------------------------------------------------------------------
// Array Methods - Pop, Slice, Splice

//Pop
/*
let course = ["HTML", "CSS", "JS", "ReactJS", "JQuery"];
console.log(course);
let removedItem = course.pop(); //It removes last indexed value/element
console.log("Removed Item is: "+removedItem);
console.log(course);
*/

// Slice
/*
let courses = ["HTML", "CSS", "JavaScript", "ReactJS", "Jquery"];

let value = courses.slice(3, 4); //ll pick till 4 but not 4

console.log(value);
console.log(typeof value);

// example
let userName = "rohit bhardwaj";
let firstUpperCaseChar = userName[0].toUpperCase();
let capitalizeName = firstUpperCaseChar + userName.slice(1);
console.log(capitalizeName);
*/

// Splice
/*
let courses = ["HTML", "CSS", "JS", "ReactJS", "Jquery", "Vue.js"];
courses.splice(4, 2); //it will remove 2 indexed value after 4th index
console.log(courses);

courses.splice(3, 0, "Java"); //It will add "Java" after index 3 and do not remove anything
console.log(courses);
*/

// ---------------------------------------------------------------
// includes
// arr.includes(any)
/*
const availableSize = ["S", "M", "L", "XL", "XXL", "XXXL"];
const readlineSync = require("readline-sync");
const userSize = readlineSync.question("Which size of shirt do you want (S/M/L/XL/XXL/XXXL) - ");

const isSizeAvailable = availableSize.includes(userSize);
// console.log(isSizeAvailable);
if(isSizeAvailable){
  console.log("Size is available");
}
else{
  console.log("Size is unavailable");
}
*/

// ------------------------------------------------------------------------
// Array- Sort
// const fruits  = ["Apple", "Cherry", "Orange", "Banana", "Berries"];
// fruits.sort();
// console.log(fruits);

// const numbers = [1, 2, 4, 7, 9, 6, 5, 3, 8];
// function inAscendingOrder(a, b){
//   return a-b;
// }
// numbers.sort(inAscendingOrder);
// console.log(numbers

// function inDescendingOrder(a, b){
//   return b-a;
// }
// numbers.sort(inDescendingOrder);
// console.log(numbers);

// ---------------------------------------------------------------------------

// Array - Split & join

//Split Example
// const inputStr = "madam may i come in";
// const arrOfChar = inputStr.split(" ");
// console.log(arrOfChar);

//Join Example
// const inputStr = "Rohit Bhardwaj";
// const arrOfChar = inputStr.split("");
// arrOfChar.reverse();
// console.log(arrOfChar.join(""));

// ----------------------------------------------------------------------------
/*
// Spread
// ..arr
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
// console.log("Array: ", arr)
// console.log(...arr);

const arr3 = [...arr1, ...arr2, 10, 11];
console.log(arr3);
*/
// ----------------------------------------------------------------------------------
// # Destructuring Array

// const number = [1, 2, 3];
// const [a, b, c] = [1, 2, 3];
// console.log(a);
// console.log(b);
// console.log(c);

// const fname ="Rishi"
// lname = "Raj"
// console.log(`Hello ${fname}, Nice to meet you.`)

// ===================================================================================
