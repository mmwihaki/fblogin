// Arrays - combination of values or elements

// const fruits = []

const fruits = ['mangoes', 'bananas', 'oranges', 'apples']

// console.log(fruits[0]);
// console.log(fruits[3]);
// console.log(fruits[10]);

// console.log(fruits);

for (let fruit of fruits) {
    // console.log(fruit);
}


let name = 'mary mwihaki';
//console.log(name[0]);

for (let character of name) {
    // console.log(character);
}


// checking the number of elements within an array 

console.log(fruits.length);


// push() - adds elements from the end (appends on the back)

fruits.push('pineapple');

console.log(fruits);

fruits.push('tree tomato', 'papaya');

console.log(fruits);

// .pop() - removes the last element

fruits.pop(); 
console.log(fruits);