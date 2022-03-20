function isPrime(number) {
    if (typeof number === 'number') { //check if its a number 
        let factors = 0;
        for (let divisor = 1; divisor <= number; divisor++){
            if (number % divisor === 0) {
                factors++;
            }
        }
        if (factors === 2) {
            return true;
        } else {
            return false;
        }
    } else {
        return `${number} is not a number type`;
    }
}

console.log(isPrime(2));            //true
console.log(isPrime(17));           //true
console.log(isPrime(5));            //true
console.log(isPrime(0));            //false
console.log(isPrime(29));           //true
console.log(isPrime('mary'));       //not a number type
console.log(isPrime('mangoes'));    //not a number type 
console.log(isPrime(true));         //not a number type 
console.log(isPrime(null));         //not a number type 