/*

iterations
    1. while loop 
    2. do while 
    3. for loop 
    4. for of - mainly for itterable objects 

*/

// print 1 - 3


/*
let number = 1;

while (number <= 10) {
    console.log(number);
    number += 1;

}
*/


/*
do {
    console.log(number);
    number += 1;
} while (number > 10)

console.log('Loop Ended.')

*/

// Initailization, Condition, Update

// Do while

// for (initialization; condition; update;)
// we can have initialization outside the loop, just before the loop

for (let number = 10; number >= 1; number--){
    console.log(number);
}

console.log('loop ended');

// for loop 

// const fruits = []

const fruits = ['mangoes', 'bananas', 'oranges', 'apples']


for (let fruit of fruits) {
    console.log(fruit);
}