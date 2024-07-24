// array - []
// example
// let myArray = [0, 1, 2, 3, 4];
//console.log(myArray.push(5));
//console.log(myArray.pop());
//console.log(myArray.unshift(5));
//console.log(myArray.shift());
//console.log(myArray);

// console.log(myArray.includes(8));
// console.log(myArray.indexOf(4));

//const newArray = myArray.join()

//console.log(myArray);
//console.log(typeof newArray);


// splice and slicelog
//console.log("A ", myArray);
//const arrA = myArray.slice(0, 3)
//console.log(arrA);
//console.log("B ", myArray);

// const arrB = myArray.splice(0, 3)
// console.log(arrB);
// console.log("C", myArray);


//*********************REVISION**********************//

const myArr = [1, 2, 3, 4]
//console.log(myArr[0]);

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr2);

// Array Methods

// pop()


let popped = myArr.pop()
//console.log(myArr);
//console.log(popped); the popped element will return here or where we use pop method



// push()



pushArr = [1, 2, 3, 4, 5]
let pushed = pushArr.push(6, 7, 8) // we can add multiple values at once here in push
//console.log(pushArr)
//console.log(pushed); // here the updated length of the array will return here



// shift()



shiftArr = [1, 2, 3, 4]
let shifted = shiftArr.shift() // here the first element of the array will be removed
//console.log(shiftArr);
//console.log(shifted);// here the shifted element returns here


// unshift()


unshiftArr = [1, 2, 3]
let unshifted = unshiftArr.unshift(-1, 0) // same here you can also add multiple elements at start of the array
//console.log(unshiftArr);
//console.log(unshifted); // the updated length will return here of the array





// includes()
includeArr = [1, 2, 3, 4]
// console.log(includeArr.includes(4)); // it checks that element included or not.


// slice and splice

sliceArr = [1, 2, 3, 4]
let myNewArr = sliceArr.slice(0, 3) // end element will not get included
// console.log(myNewArr);
// console.log("original " , sliceArr);

//////////////////////////////////////////////////////////////////////////

spliceArr = [1, 2, 3, 4, 5]
let splicedArr = spliceArr.splice(0, 3)
// console.log(splicedArr);
// console.log(spliceArr);


///////////////////////////////////////////////////////////////////////////////////
  

//Concat
let buriramUnited = ["joena", "wassana", "moshi", "phuna"]


let stalwart = ["caramel", "dew", "saifa", "stop"]


// buriramUnited.push(stalwart)
// console.log(buriramUnited);

// let allTeams = buriramUnited.concat(stalwart)
// console.log(allTeams);


// spread operator (...) // more easy way
let allTeams = [...buriramUnited, ...stalwart] // you can add more than 2 here
// console.log(allTeams);

// flat 

let anotherArray = [1, 2, 3, [4, 5, 6, [7, 8, [9, 10], 11, 12], 13, 14], 15, 16, 17]

let realAnotherAraay = anotherArray.flat(Infinity)
// console.log(realAnotherAraay);



////////////////////////////////////////////////////////////////////////////


// index of()
indArray = ["m", "a", "y", "a", "n", "k"]
let indVal = indArray.indexOf("n") // returns the index number here
// console.log(indVal)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]

let mergedArray = arr1.concat(arr2).concat(arr3)
/* console.log(mergedArray) */
