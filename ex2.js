var numbers = [1,2,3,4,5];

var sum = 0;

// with seperate function which is passed in forEach loop

// function adder(number){
//     sum += number;
// }

// numbers.forEach(adder);


//  without seperate function 
numbers.forEach(function(number){
    sum += number;
})

console.log(sum);