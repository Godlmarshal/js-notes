
// basic promise

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise consumed");
        resolve()
    }, 4000)
})
promiseOne.then(() => {
    console.log("promise completed")
})

// without saving in a variable using then and catch

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise running")
        resolve()
    }, 2000);
}).then(() => {
    console.log("promise comsumed");
}) 

// passing parameters to then and catch

 const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=> {
    resolve([1, 2, 3, 4])
    }, 2000)
})
promiseThree.then((arr) => {
    console.log(arr)
})

// chaining and reject 
const promiseFour = new Promise((resolve , reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username : "hitesh", password : "123456"})
        } else {
            reject()
        }
        
     }, 1000)
})
 
promiseFour.then((user) => {
   return user.username
}).then((user) => {
    console.log(user)
}).catch(() => {
    console.log("Rejected")
})



//async await and try catch
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ username: "hitesh", password: "12345678910" });
      } else {
        reject("error");
      }
    }, 1000);
})

async function consumePromiseFive (user)  {
   const reponse = await promiseFive
   console.log(reponse)
    
}
consumePromiseFive()


const promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "12345678910" });
    } else {
      reject("error");
    }
  }, 1000);
    
});

async function consumePromiseSix(user) {
  try {
    const reponse = await promiseSix;
    console.log(reponse);
  } catch (error) {
    console.log(error)
  }
}
consumePromiseSix();


// Fetch

async function getUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
   const data =  await response.json()
    console.log(data)
}
getUsers()



fetch(`https://api.github.com/users/hiteshchoudhary`)
    .then((response) => {
    return response.json()
    }).then((data) => {
    console.log(data)
    }).catch((error) => {
    console.log(error)
}).finally(()=> console.log("The promise is either resolved or rejected"))

