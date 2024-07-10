// if
let someVal = true
if (someVal) {     // in condition put something that is true or a condition that is true
   // console.log("executed");
}

let galeSpeed = 100

if (galeSpeed > 80 ) {
    // console.log("fast");
}

// else => it works when condition of IF isnt true or truthy

if (galeSpeed < 50) {
  // console.log("slow");
} else {
   // console.log("fast");
}

// nesting if and else


let balance = 1000


/* if (balance < 500) {
   console.log("less than 500");
} else if (balance == 200) {
   console.log("equals to 200");         // nested if else
} else if (balance < 200) {
   console.log("less than 200");
} else {
   console.log("not less and equal to anyone");
} */

// && operator => it checks both the conditions or more than 2 conditions are true or not if one of the conditions is false then the if or else will not run

if (2 == 2 && 3 > 2) {   
  // console.log("true");
}


// || Or operator => it checks if one condition is true same it works with multiple conditions.

if (someVal || 2 > 3) {
  // console.log("executed");
}

// nullish coalescing operator => (??): null and undefined
// works with null and undefined

// val1 = null ?? 10 => 10
// val1 = undefined ?? null ?? 1 => 1
// val1 = undefined ?? null => null
// val1 = null ?? 10 ?? 5

// console.log(val1);


// terniary operator
 
// condition ? true : false

// 22 < 25 ? console.log("yes") : console.log("no");




// truthy and falsy values => there are some values that are already declared as falsy or truthy values


// falsy values =>
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy values =>
// true , "anything here even a blank space", [], {}, function(){}   <= empty function is a truthy value.

const obj = {}

if (Object.entries(obj).length === 0) {
  // console.log("empty");
}

// false == 0 => negative condtion but answer is true
// false == "" => true
// 0 == ""     => true




