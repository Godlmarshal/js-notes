function setUserName(username) {
    this.username = username
}

function users(username, email, password) {
    setUserName.call(this, username) // the user1 argument "hitesh" will pass down here to username
    this.email = email
    this.password = password
}

const user1 = new users("hitesh", "any@example.com", "123")
console.log(user1)