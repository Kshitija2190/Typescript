// var emp = 'John';
// function helloUser() {
//     return 'Hello' + emp;
// }
// function welcome(){
//     return 'Welcome to Typescript';
// }
// let val:number = 10;
// let names:string = undefined;
// let flag:boolean = true;
// let data:void = null;
// let digital:any;
// let arr:string[] = ['1','2','3'];
// let dummy:[string,number] = ['abc',876];
// console.log(val);
// console.log(names);
// console.log(flag);
// console.log(data);
// console.log(arr);
// digital = 123;
// console.log(digital);
// console.log(dummy);
// console.log(helloUser());
// console.log(welcome());
// class Employee {
//     empno: number;
//     empname:string;
//     sal:number;
//     constructor(empno,empname,sal){
//         this.empno = empno;
//         this.empname=empname;
//         this.sal = sal
//     }
//     showDetails(){
//         console.log('Emp details are ' +empno);
//         console.log('Emp details are ' + empname);
//         console.log('Emp details are ' +sal);
//     }
// }
var a = null;
console.log(a);
console.log(typeof (a));
var b = undefined;
console.log(b);
console.log(typeof (b));
function f(input) {
    var x = 100;
    console.log(typeof x);
    var abc = 100;
    var y;
    if (input) {
        // "x" exists here
        abc = 200;
        y = x + 1;
        console.log(x);
        // return y;  
    }
    // Error: "y" doesn't exist here  
    console.log(y);
    return y;
}
f(true);
var Bike = { Company1: 'Honda',
    Company2: 'Hero',
    Company3: 'Royal Enfield'
};
delete Bike.Company1;
console.log(Bike);
console.log('Company2' in Bike); // 
var person = { name: 'Ram', age: '34' };
var manager = Object.assign(person);
console.log(manager);
