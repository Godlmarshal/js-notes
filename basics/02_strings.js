// any word in "", '', ``, between these are strings.
let name = "Mayank"
let age = 20

// console.log(name + age + "value");
// console.log(`my name is ${name} and my age is ${age}.`);

let gameName = new String("mayank.xc")

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.toUpperCase());
//console.log(gameName);


let newString = gameName.substring(0, 6)
//console.log(newString);
let anotherString = gameName.split(".")
//console.log(anotherString);




let pracString = "yo yo Honey Singh."


// Most used methods for strings

// length => returns the length of a string

/* console.log(pracString.length) */


// charAt => returns the character at the given index

/* console.log(pracString.charAt(0))
console.log(pracString.charAt(2)); */

// concat => concats the given string with another string or more strings

let str1 = "Hello, " 
let str2 = "World"
let str3 = "!!"
    

/* console.log(str1.concat(str2).concat(str3)) */


// includes => returns true or false if a string includes in that string

/* console.log(pracString.includes("yo"))
console.log(pracString.includes("jassi")) */

// indexOf => returns the index of the given string if that string doesn't exists in that string then it will return -1

/* let str = "Hello, world!";
console.log(str.indexOf("Hello")); */

// Slice = returns a extracted section of a string without modifying or changing the original one.
 
let newStr = pracString.slice(-2, 16) // end value not included
//console.log(newStr)
/* console.log(pracString) */

// substring => similar to slice but doesnt accept negative indices in short slice will not work with negative numbers but substring will work which is not a good scenario.

let newstr2 = pracString.substring(-2 , 16)  // end value not included
//console.log(newstr2)
//console.log(pracString)

// trim => removes spaces from both ends doesnt remove spaces between the strings.

let trimstr = "may  ank  "
// console.log(trimstr.trim())

// split

let splitStr  = "i am playing .. cricket"

/* console.log(splitStr.split(" "))
console.log(splitStr.split(".")); */

// replace

let repstr = "i am playing football"

// console.log(repstr.replace("football", "cricket"))
