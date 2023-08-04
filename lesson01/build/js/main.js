"use strict";
// Literal types
let myName;
let userName;
userName = "Dave";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Helllo");
logMsg(add(4, 2));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 8));
// optional parameters
const addAll = (a, b, c) => {
    //type guard
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 2, b, c = 2) => {
    //type guard
    return a + b + c;
};
logMsg(addAll(2, 3));
logMsg(addAll(2, 3, 29));
logMsg(sumAll(2, 3, 29));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(2, 1, 2));
//Never type
const createError = (error) => {
    throw new Error(error);
};
const infiniteLoopFunction = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// cunstom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("this should never happen");
};
