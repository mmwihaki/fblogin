//conditional branching, logical operators 

let age = 13;
gender = 'female';

/*
if (age > 18) {
    console.log('over 18');
} else if (age === 18) {
    console.log('eighteen!')
} else {
    console.log('under 18!')
} */

/*
if (age >= 18 && gender === 'female') {
    console.log('woman');
} else if (age >= 18 && gender === 'male') {
    console.log('man');
} else if (age < 18 && gender === 'female') {
    console.log('girl');
} else {
    console.log('boy')
}
*/

let color = 'GReen';

if (color === 'green' || color === 'GREEN' || color === 'Green') {
    console.log('GO!')
} else if (color === 'yellow' || color === 'Yellow' || color === 'YELLOW') {
    console.log('GET READY!')
} else if( color === 'red' || color === 'Red' || color === 'RED') {
    console.log('STOP')
} else {
    console.log('ERROR! INVALID INPUT')
}
