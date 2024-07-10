// reverse a number



/* function reverseNum(num) {
    return num.toString().split("").reverse().join("")
}
console.log(reverseNum(63)) */


// method 2

function reverseIt(num) {
    let rev = 0
    while (num > 0) {
        let rem = num % 10
      console.log(rev = rev*10+rem)
        num = parseInt(num / 10)
    }
}
/* reverseIt(2985) */


function numReverser(num) {
    let str = num.toString()
    let numStr = str.split("").reverse().join("")
    let revNum = Number(numStr)
    return revNum
}
console.log(numReverser(29875))