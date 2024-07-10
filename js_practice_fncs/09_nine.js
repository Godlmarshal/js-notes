// cloning an array without spread

function cloner(myArr) {
    let newArr = []
    myArr.forEach((e) => {
       newArr.push(e)
    })
    return newArr
}

let clonedArr = cloner([2, 5, 8, 3, 5])

console.log(clonedArr)
