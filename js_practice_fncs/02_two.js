function palChecker(str) {
    let reversedstr = str.split("").reverse().join("")
    
   return reversedstr === str
}
console.log(palChecker("mayank"))
console.log(palChecker("pool"))
console.log(palChecker("poop"))
console.log(palChecker("level"))





