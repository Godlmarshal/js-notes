

const users = [
  { username: "user123", age: 25, gender: "male" },
  { username: "coolgirl", age: 30, gender: "female" },
  { username: "skywalker", age: 22, gender: "male" },
  { username: "sunshine", age: 28, gender: "female" },
  { username: "techguy", age: 35, gender: "male" },
  { username: "greenqueen", age: 27, gender: "female" },
  { username: "nightowl", age: 24, gender: "male" },
  { username: "flowerpower", age: 32, gender: "female" },
  { username: "stormbringer", age: 29, gender: "male" },
  { username: "luna", age: 26, gender: "male" },
];

for (i = users.length - 1; i >= 0; i--){
  if (users[i].gender === "male") {
    users.splice(i, 1)
  }
}
// console.log(users)


/* let pracArr = [1, 2, 3, 4, 5]
pracArr.splice(2, 1)
console.log(pracArr) */