// functions   => it holds the code inside and you can use that code in future just by calling its name
let abc = () => { } // arrow function *preferred one
function def() { } // es5 function

let arrowFnc = (parameters) => {  //parameters are variables which holds the values of arguments and you can use multiple parameters at once
    
}

arrowFnc(arguments) //values pass on to the parameters

// you can hold a function in a variabke and thats why these functions are known as higher order

let trialFncs = () => {
   console.log(2 + 2)
}
// trialFncs()


// example of parameters and arguments in a fncs

let addTwoNumbers = (number1, number2) => {
   console.log(typeof number2);
   console.log(typeof (number1 + number2));
}

// addTwoNumbers(4, null)

let twoNumbers = (n1, n2) => {
   console.log(n1 + n2);
   // let result = n1 + n2
   // return result
   return n1 + n2
}


// let retrunedVal = twoNumbers(4, 8)

// console.log(retrunedVal);


///// Rest operator

let restfnc = (...num1) => {  //rest operator => now it will return the argauments as ana array.
   return num1
}
// console.log(restfnc(100, 200, 300))

let restfnc2 = (val1, val2, ...num1) => { // first two variables get first two arguments and the rest will pass to num1.
   console.log(val1);
   console.log(val2);
   return num1
};
// console.log(restfnc2(100, 200, 300, 400));



///// Passing objects in functions

const user = {
   username: "mayank",
   email: "m@gmail.com"
}

let userfnc = (anyobj) => {
   console.log(`my name is ${anyobj.username} and my gmail is ${anyobj.email}`);
}

/* userfnc(user) */

/* userfnc({
   username: "hitesh",
   email: "histesh@gmail.com"
}) */



//// passing arrays in functions

let myArray = [1, 2, 3, 4]

let printSecVal = (anyArray) => {

   console.log(anyArray[1]);
   
}
// printSecVal(myArray)
// printSecVal([100, 200, 300, 400])