function sum() {
    console.log ()
}



//arguments objects - contain values passed when a function is called 

function sum() {
    if (arguments.length >= 2)  {
        let sum = 0
        for (let argument of arguments) {
            if (typeof argument === 'number') {
                sum += argument
            } else {
                return `ERROR. ${argument} is not a number.`;
            }
        }
        return sum
    } else {
        return 'ERROR! At least 2 operands expected';
    }
}

// get an error and mention which argument is not a number




console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 'six'));

// program to check if a number is prime or not


function isPrime(number) {
    if (number > 1) {
        for (let i = 2; i % 1 === 0; i++)
            console.log(`${number} is not a prime`)
    } else {
        console.log(`${number} is a prime`)
    }
}

isPrime(7);



