/// for of
 
let arr = [1,2,3,4]

/* for (const i  of arr) {
    console.log(i);
} */

const greetings = "hello world"

/* for (const greet of greetings) {
    console.log(greet);
    if (greet == " ") {
        break
    }
} */


// map

const map1 = new Map()

map1.set('India', 'New Delhi')
map1.set("USA", "Washington D.C");
map1.set("South Africa", "Johannesburg");
map1.set("yo yo", "new delhi")
map1.set("india", "new delhi");



console.log(map1);
// console.log(map1.get('USA'));

map1.set('India', 'haryana')

// console.log(map1.get('India'));

// console.log(map1.size);
map1.delete('USA')
//  console.log(map1.size);


