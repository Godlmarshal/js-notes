/* function firstCoverts(str) {
   return str.charAt(0).toUpperCase() + str.substring(1)
}
console.log(firstCoverts("father"))
console.log(firstCoverts("mother"))
console.log(firstCoverts("son"))
console.log(firstCoverts("daughter"))
console.log(firstCoverts("uncle")); */



// sentences

function sentenceCap(str) {
 const capitalized = str.split(" ").map((e) => {
     return e.charAt(0).toUpperCase() + e.substring(1)
 })
   return capitalized.join(" ")
}
console.log(sentenceCap("jhume jo pathaan"))