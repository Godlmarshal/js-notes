/* console.log(age)
var age = 12
console.log(age) */

// so at above we used var and if we access the var before its initialization it is not giving an error instead of that it gives undefined . however, if we let and const it will give an error

function occCounter(str) {
    let occurences = {}
    str.split("").forEach(element => {
        if (occurences.hasOwnProperty(element) === false)   {
            occurences[element] = 1
        } else {
            occurences[element]++;
        }
    });
    return occurences
}
 
console.log(occCounter("banana"))