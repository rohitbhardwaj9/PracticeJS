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
function getConcatValue(str){
  console.log(str.concat(" this year"));
}
getConcatValue(str_val);