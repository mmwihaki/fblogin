function sum() {
    let sum = 0;
    for(let argument of arguments) {
        sum += argument
        if (argument !== 'undefined' && arguments.length > 1) {
            console.log(sum);
        } else {
            console.log('Ooops! I need more than that to compute.')
        }
    }
}


sum(1,2);           // 3
sum(1,2,3);         // 6
sum(1,2,3,4);       // 10
sum(1,2,3,4,5);     // 15
sum();              // ERROR
sum(10);            // ERROR


function sum() {
    if(arguments.length > 1) {
        let sum = 0;
        for(let argument of arguments) {
            sum += argument
        }
        console.log(sum)
    } else{
        console.log('ERROR! Addition operation expects at least 2 operands.')
    }
}