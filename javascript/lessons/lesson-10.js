//object - anything that is non primitive type 

const subject = {
    name: 'math', 
    teacher: "Ms. Mwihaki",
    doneMidTermCat: true,
    marks: [69, 98, 78, 81, 59],
    getMeanScore: function () {  //function associated with an object is a method 
    
        let total = 0;

        for (let i = 0; i < this.marks.length; i++){
            
            total += this.marks[i];

        }
        let avg = total / this.marks.length
        console.log(avg)
    }
}


// in objects to access a certain value we use bracket notation or dot notation 
//dot notation 

// console.log(total);

//bracket notation 

// console.log(subject['name']);

// const grades = [80, 77, 88, 95, 68];

// let total = 0;
// for(var i = 0; i < grades.length; i++) {
//     total += grades[i];
// }
// var avg = total / grades.length;

// console.log(avg )

subject.getMeanScore();