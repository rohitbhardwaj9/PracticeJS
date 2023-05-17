// console.log("Hello");
let str_val = "Welcome Geeks to GeeksForGeeks";
// console.log(str_val);

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
function getSubstr(str){
  console.log(str.substr("11", "4"));
}
getSubstr(str_val);