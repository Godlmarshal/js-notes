// for loop
// syntax =>

/* for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
} */

// example => print numbers from 1 to 10

for (let i = 1; i <= 10; i++){
    // console.log(i);                   // it will print 1 to 10
}


// nested for loops and print tables 1 to 10

for (i = 1; i <= 10; i++){
    console.log(i);
    for (j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
