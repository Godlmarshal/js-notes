// this =>


const user = {
    username: "mayank",
    welcomeMessage: function () {
         console.log(this.username)
       console.log(this);
    }
}
// user.welcomeMessage()
user.username = "sam"
// console.log(this);
// user.welcomeMessage()

// this => it refers to current context values


// console.log(this) // => {} in node
// console.log(this) // => window in browser

function ths() {
    let username = "mayank"

    // console.log(this.username) // it will give undefined because this will not work in functions
}
// ths()

const thus = function () {
    let username = "mayank"
    console.log(this.username); // even in function expression we will get undefined
}

// thus()

let arrow = () => {
    let username = "sam"
    console.log(this.username) // same result undefined and if we only console this we will get empty object {}
}
// arrow()


// Arrow Functions =>

let eg = (parameters) => {
    
}
eg(arguments)


// implicit return
 
// let ir = (num1, num2) => (num1+ num2) // if the code is one liner you can remove the return keyword and wrap the code in brackets
let ir = (num1, num2) => ({username : "hitesh"}) // for objects

// console.log(ir(5, 6));