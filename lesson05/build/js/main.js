"use strict";
// type One = string
// type Two = string | number
// type Three = 'hello'
// convert to more or less specific
let a = "hello";
let b = a; // less specific type
let c = a; // more specific
// these brackets cannot be used in tsx files
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem here but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
console.log('myVal', myVal);
console.log(nextVal);
10;
// The DOM
// non null assertion
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
