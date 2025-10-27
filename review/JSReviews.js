let num = 100;

console.log(num);

num = "JavaScript";

console.log(num);

console.log("------------------------");

let actualResult = "100.5";

let expectedResult = 100.5;

console.log(actualResult === expectedResult); // false ----> DOES NOT ignore the data types

console.log(actualResult == expectedResult); // true ----> ignores the data types


console.log("------------------------");

let browser = "chrome";

if(browser === "chrome"){
    console.log("Google Chrome is Selected!");
}else if(browser === "firefox"){
    console.log("Mozilla Firefox is Selected!");
}else{
    throw new Error("Invalid Browser Name!");
}

console.log("------------------------");

switch(browser){
    case "chrome":
        console.log("Google Chrome is Selected!");
        break;
    case "firefox":
        console.log("Mozilla Firefox is Selected!");
        break;
    default:
        console.log("Invalid Browser Name!");
        break;
}

console.log("------------------------");

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("------------------------");

let str = "JavaScript";

for(let each of str){
    console.log(each);
}

console.log("------------------------");

let s = "abcde1234efghi5678klmn90";

s = s.replace(/\d/g, ""); // "abcdefghiklmn"

console.log(s);

console.log("------------------------");

let expectedTitle = "Self Enrollment Portal";

let actualTitle = "self enrollment portal";

console.log(expectedTitle === actualTitle); // false

console.log(expectedTitle.toLowerCase() === actualTitle.toLowerCase()); // true
        // "self enrollment portal"   === "self enrollment portal"

console.log(`The Expected Title is ${expectedTitle}, and the Actual Title is ${actualTitle}.`);


console.log("------------------------");

let coutryDropDown = ["USA", "Canada", "UK", "France", "Germany"];

console.log(coutryDropDown);

console.log(coutryDropDown[0] === 'USA');

for(let country of coutryDropDown){
    console.log(country);
}

console.log(coutryDropDown.length ===  5);


console.log("------------------------");

// user for loop to print each element of the countryDropDown in reversed order.
for(let i = coutryDropDown.length - 1; i >= 0; i--){
    console.log(coutryDropDown[i]);
}

console.log("------------------------");

/*
Create a function that can reverse a string.
   function takes a string as an argument and returns the reservedversion of it.
*/
function reverseString(str){
    let reversedStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}


console.log( reverseString("Hello World") ); // "dlroW olleH"
console.log(reverseString("JavaScript") ); // "tpircSavaJ"

console.log("------------------------");

function wordBreak(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;
    
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[n];
}


// Usage Example:
const dictionary = ["i", "like", "sam", "sung", "samsung", "mobile", "ice", "cream", "icecream", "man", "go", "mango"];
console.log(wordBreak("ilike", dictionary)); // true
console.log(wordBreak("ilikesamsung", dictionary)); // true

console.log("------------------------");

function countDistinctSubstrings(str) {
    let count = 0;
    const n = str.length;
    for (let i = 0; i < n; i++) {
        let seen = new Set();
        for (let j = i; j < n; j++) {
            if (seen.has(str[j])) break;
            seen.add(str[j]);
            count++;
        }
    }
    return count;
}

// Usage examples:
console.log(countDistinctSubstrings("gffg")); // Output: 6
console.log(countDistinctSubstrings("gfg"));  // Output: 5
console.log(countDistinctSubstrings("abc"));  // Output: 6
///test


