// interface ICalculator {
//     add(number1 : number, number2: number): number;
//     subtraction(number1 : number, number2: number): number;
// }

// class Calculator implements ICalculator {
//         add(num1 , num2){
//             return num1 + num2;
//         }
//         subtraction(num1 , num2){
//             return num1 - num2;
//         }
// }

// interface IEmployee {
//     name : string;
//     age: string;
// }

// function showDetails(employee : IEmployee) : IEmployee {
    
//     return employee;
// }
// showDetails({name:'John',age:'Smith'});

enum Color { Red, Yellow , Green};
let color = Color.Green;

function printDetails(id: number | string){
    console.log(id);
}
printDetails(123);
printDetails('Data');

let sample: string|boolean;
sample = true
console.log(sample);