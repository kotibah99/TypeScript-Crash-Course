"use strict";
//Basic type 
let id = 5;
let company = 'kotibah_4_IT';
let isPublish = true;
let x = 'hello';
let age = 5;
//////////////////////*/////////////////
//Array 
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'hello', true];
//Tuple 
let person = [1, true, 'hello'];
//Tuple Array 
let employee;
employee = [
    [1, 'kotibah_4_IT'],
    [2, 'kotibah_4_IT'],
    [3, 'kotibah_4_IT'],
];
//Union 
let pid = 22;
//Enum
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["bottom"] = 1] = "bottom";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
//objects 
const user = {
    id: 2,
    name: 'kotibah'
};
// Type Assertion 
let cid = 1;
//let customerId = <number> cid
let customerId = cid;
//Functions 
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 2));
const user1 = {
    id: 1,
    name: 'kotibah'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes 
class Person {
    constructor() {
        console.log(12);
    }
}
const kotibah = new Person();
