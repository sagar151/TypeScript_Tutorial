"use strict";
// number
let age = 20;
console.log(age);
// string
let emp_name = "Sagar Gajera";
console.log(emp_name);
// array
let emp_id = [23, 44, 56];
console.log(emp_id);
// emp_id[0]=''   // Error: Type 'string' is not assignable to type 'number'.
// boolean
let isValidId = false;
console.log(isValidId);
// tuples
let user = [1, 'Sagar']; // Note: It only use full with 2 element just like key value pair best practice is to use only 2 element
// user.push(1) //Worded but need to fix this on TypeScript side
console.log(user);
// enums
// enum  Size { small=0, medium=1, large=2} // number value
var Size;
(function (Size) {
    Size["small"] = "s";
    Size["medium"] = "m";
    Size["large"] = "l";
})(Size || (Size = {})); // string value
let mySize = Size.medium; // to use enum
console.log(mySize);
// function
function calculateTax1(income) { console.log(income); } // when we not need to return anything then give type void
calculateTax1(23000);
function calculateTax2(income) {
    if (income < 2000)
        return income * 0.29; // only when If Error: Function lacks ending return statement and return type does not include 'undefined'.
    else
        return income * 0.45;
}
console.log(calculateTax2(23000));
function calculateTax3(income, taxYear) {
    if (taxYear < 2024)
        return income * 0.29;
    else
        return income * 0.45;
}
console.log(calculateTax3(23000, 2023));
// Objects
let employee = {
    id: 1
};
employee.name = 'Sagar';
