// for (let number = 0; number < 20; number++){
//     if (number % 2 === 0) {
//         console.log(number + " is even!")
//     } else {
//         console.log(number + " is odd!")
//     }
// }

// for (let number = 0; number < 10; number++){
//     // let results = number * 9
//     // console.log(number + " * 9 = " + results)
//     console.log(`${number} * 9 = ${number * 9}`)
// }


const myTopChoice = ["Horizon New Dawn", "Mortal Kombat", "Modern Warfare", "God of War", "Days Gone"]

for (let index = 0; index < myTopChoice.length; index++){
    if (index === 0) {
        console.log(`My ${index + 1}st choice is ${myTopChoice[index]}`);
    } else if (index === 1) {
        console.log(`My ${index + 1}nd choice is ${myTopChoice[index]}`);
    } else if (index === 2) {
        console.log(`My ${index + 1}rd choice is ${myTopChoice[index]}`);
    } else {
        console.log(`My ${index + 1}th choice is ${myTopChoice[index]}`);
    }

}


// console.log(`My ${index + 1} choice is ${myTopChoice[index]}`);
