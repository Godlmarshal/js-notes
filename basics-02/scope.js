/** @format */

// In browser console have different global scope and in code environment of node the global scope is different.

if (true) {
  let a = 1;
  const b = 2;
  var c = 3;
  // console.log(a); // you can access let and const inside the scope
}
// console.log(a);
// console.log(b);
// console.log(c); // As you can see we can access var outside the scope which is kind of less safe.

{
} // => this is scope

// thats why we use let and const instead of var beacause let and const are much safer than var.

// Scope level and Mini Hoisting |-

// Scope nesting =>

let one = () => {
  let username = "mayank";
  let two = () => {
    let email = "m@gmail.com";
    console.log(username);
  };
  // console.log(email);
 // two();
};

// one();

// now the question is how are we able to access username because its scope is function one it is happening because of lexical scoping we will learn it later about lexical scoping.



if (true) {
  let username = "mayank"
  if (username === "mayank") {
    let website = " youtube"
    // console.log(username + website)
  }
  // console.log(website)

}
// console.log(username);

// Hoisting => using variables and functions before their declaration.
 

// Hoisting()  // used after declaration 
function Hoisting() {
  console.log("huii");
}
// expression() // but in expression it gives error
let expression = function () {    // function expression
  console.log("hey");
}

