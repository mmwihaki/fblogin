// functions 
function nameOfFunction() {
    
}

//function definition 


function introduce(name, department, gender) {
    if (gender === 'male') {
        console.log(`this is ${name}, he works at the ${department} department`);
    } else {
        console.log(`this is ${name}, she works at the ${department} department`);
    }
}


//calling the function. You can call a function n number of times. 

// introduce('Mary', 'Health', 'female');
// introduce('Tom', 'Finance', 'male');
// introduce('Jenny', 'HR', 'female');
// introduce('Ty', 'IT', 'male');

//we can have n number of parameters. the order of parameters matters. 


function getMax(a, b) {
    if (a > b) {
        console.log(`The maximum number is ${a}`);
    } else if (a === b) {
        console.log('The numbers are equal.')
    } else {
        console.log(`The maximum number is ${b}`);
    }
}

getMax(3, 7);
getMax(9, 2);
getMax(6, 'Mary');
