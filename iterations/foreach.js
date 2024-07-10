/** @format */

// for each

const myArr = ["java", "js", "python"];

/* myArr.forEach((elem) => {
    console.log(elem);
}) */

// passing functions instead of writing it down inside foreach=>

/* let printMe = (elem) => {
    console.log(elem);
}
myArr.forEach(printMe) */

// passing multiple params to foreach =>
/* myArr.forEach((elem, index, myArr) => {
    console.log(elem, index, myArr);
}) */

const myObj = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "ruby",
    languageFileName: "rb",
  },
];

/* myObj.forEach((elem) => {
    console.log(elem.languageName);
}) */

//************************************** filter ******************************************/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/* const newNums =myNums.filter( (num) => (num >  4) ) */

// console.log(newNums);

// using push with foreach
/* let newARR = []
myNums.forEach((num) => {
    if (num < 4) {
        newARR.push(num)
    }
})
console.log(newARR);
 */

