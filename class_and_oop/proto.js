// prototype


/* function testfn(num) {
    return num*5
}

console.log(testfn(5))
console.log(testfn.prototype) */


/* function createUser(username , score) {
     this.username = username
     this.score = score 
}
 
createUser.prototype.increment = function () {
    console.log(++this.score)
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`)
}

const score1 = new createUser("hitesh", 85)

score1.printMe()
score1.increment()
score1.printMe(); */



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

function games(name, genre) {
    this.name = name
    this.genre = genre
}
const game1 = new games("COD", "Battleroyale")
const game2 = new games("Squad Busters", "Strategy")
const game3 = new games("Ludo King", "Casual")

games.prototype.genreChange = function () {
this.genre = "BattleRoyale"
}


/* console.log(game2.genre)

game2.genreChange()

console.log(game2.genre); */




// adding propeties to the boss (object)


const statesAndCapital = {
    punjab: "chandigarh",
    uttarpradesh: "lucknow",
    
    getPunjabCapital: function () {
        console.log(`punjab's capital is ${this.punjab}`)
    }
}


Object.prototype.newState = function () {
    this.Gujrat = "gandhinagar";
}

statesAndCapital.newState()

console.log(statesAndCapital)


