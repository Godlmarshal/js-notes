const myArr = [1, 25, 55, "nhfhb", 5, "hwbsbd"," funeufcn"]
let sum = 0; 
function sumOfNums() {
    
    myArr.forEach((e) => {
        if (typeof e === "number") {
           sum = sum + e
        }
    })
 return sum
}
console.log(sumOfNums())