// singleton
// Object.create


// object literals => {}


let mySym = Symbol("key1") // Declaring symbol



const JsUser = {
    name: "mayank",
    [mySym] : "myKey1", // symbol syntax
    age: 20,
    email: "mayankshukla@gmail.com",
    location: "delhi",
    isLoggedIn: false,
    lastLoginDays: ["monday", "wednesday"]
}

// Accessing elements

// console.log(JsUser.email);
// console.log(JsUser["email"]); // the key values are actually strings, basically name is c

// console.log(JsUser[mySym]); // Accessing symbols
// console.log(typeof mySym);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// changing object elements

JsUser.email = "godlikemarshal@gmail.com"
// Object.freeze(JsUser) // object is freeze right now you can't make any changes so the next line will not work for changing the element
// JsUser.email = "godlikemarshal@chatGPT.com";
// console.log(JsUser.email);

// console.log(JsUser);


JsUser.greeting = function () {
     console.log(`hello JD user, ${this.name}`);
 }

// JsUser.greeting()
// console.log(JsUser.greeting)


///////////////////////////////////////////////////////////////////////////////////////////////////////




// Singleton and constructor


const tinderUser = new Object()
// const helloUser = {}

// console.log(tinderUser);
// console.log(helloUser);



tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.gender = "male"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

// nesting objects
const regularUser = {
    email: "godlikemarshal@gmail.com",
    fullName: {
        userFullName: {
            firstName: "godlike",
            lastName: "marshal"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

// marging objects |-

let obj1 = {1: "a", 2: "b"}
let obj2 = { 3: "c", 4: "d" }

// let obj3 = Object.assign({}, obj1, obj2)

let obj3 = {...obj1, ...obj2}

// console.log(obj3);


// objects from databases

const users = [
    {
        name: "123ab",
        email: "m@gmail.com"
    },
    {
        name: "123ab",
        email: "m@gmail.com"
    },
    {
        name: "123ab",
        email: "m@gmail.com"
    },
    {
        name: "123ab",
        email: "m@gmail.com"
    }
]

// console.log(users[1].email);

// keys()
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // now we will get an array of keys and we can use loops and others on this
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("sam"));


// Destructuring |-

const course = {
    courseName : "mern stack",
    price: 999,
    instructor: "hitesh"
}
// course.instructor

// const { instructor: inst } = course

// console.log(inst);
const {courseName: cname, price: p, instructor : padhaneWala} = course

let navBar = ({name, price, inst}) => {
    console.log(`i have a course named ${cname} and the price of the course is ${p} and name of the instructor is ${padhaneWala}`);
}
// navBar(course)

//json and API |- 
{
    
}



