/* class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    changeUserName() {
        return `New User name is ${this.username = "Hitesh Chaudhary"}`
    }
}

const user1 = new user("hitesh", "hit@gmail.com", "1233456")
 user1.changeUserName()
 console.log(user1)  */


///      ////////////////////////////////////////////////////////////////////

/* class Student {
    constructor(username) {
        this.username = username
    }

    logMe() {
        return `The name of the username is ${this.username}`
    }
}
const student1 = new Student("mayank")

console.log(student1.logMe())

console.log(student1)

class Teacher extends Student {
    constructor(Student) {
      super(Student.username)
    }

    addCourse() {
        return `A new course has been added by ${this.username}`
    }
}

const teacher1 = new Teacher(student1)

console.log(teacher1.addCourse())

console.log(teacher1) */




// static keyword

/* 
class User {
    constructor(username, email) {
        this.username = username
        this.email = email
    }
   static logMe() {
        return `wassup ${this.username}`
    }
}
const user1 = new User("mayank", "m@something.com")

console.log(user1.logMe()) */

// static even works with their instances so you cant access logme even in their instances




