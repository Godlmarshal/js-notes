/** @format */

const myArr = [1, 2, 3, 4, 5, 9, 7, 8, 9, 10];

// const newArr = myArr.map((num) => num * 10)

// console.log(newArr);

// const newArr = myArr.filter((num) => num < 4)

// console.log(newArr);

const myNumbers = [1, 2, 3, 4, 5, 9, 7, 8, 9, 10];

// chaining =>
/* 
const newNums = myNumbers
    .map((num) => num + 1)
    .map((num) => num * 10)
    .filter((num) => num >= 40  )

    console.log(newNums);
 */

///////////////// reduce => sum of arrays

const numbers = [10, 22, 55, 68, 782];
const sumOfNums = numbers.reduce((acc, curval) => acc + curval, 0);

// console.log(sumOfNums);

/* const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publish: 1992,
    edition: 2008,
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1999,
    edition: 2007,
  },
  {
    title: "Book Four",
    genre: "Non-Fiction",
    publish: 1989,
    edition: 2010,
  },
  {
    title: "Book Five",
    genre: "Science",
    publish: 2009,
    edition: 2014,
  },
  {
    title: "Book Six",
    genre: "Fiction",
    publish: 1987,
    edition: 2010,
  },
  {
    title: "Book Seven",
    genre: "History",
    publish: 1986,
    edition: 1996,
  },
  {
    title: "Book Eight",
    genre: "Science",
    publish: 2011,
    edition: 2016,
  },
  {
    title: "Book Nine",
    genre: "Non-Fiction",
    publish: 1981,
    edition: 1989,
  },
];


let printBooks = books.filter((bk) => (bk.genre == "Fiction"))

printBooks = books.filter((bk) => {
  return bk.publish < 2000 && bk.genre == "History"
})
console.log(printBooks) */




const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* const newArray = [] */

/* myArray.forEach((elem) => {
  let mlNumber = elem * 10
  if (mlNumber <= 50) {
    newArray.push(mlNumber);
  }
})

console.log(newArray) */



/* let newArray = myArray
  .map((e) => e + 10)
  .map((e) => e * 10)
  .filter((e) => e < 150)
  
  console.log(newArray) */