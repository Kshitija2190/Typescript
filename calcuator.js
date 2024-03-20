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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var color = Color.Green;
function printDetails(id) {
    console.log(id);
}
printDetails(123);
printDetails('Data');
var sample;
sample = true;
console.log(sample);
