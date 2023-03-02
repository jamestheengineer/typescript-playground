"use strict";
// Basic types
let id = 5;
let company = 'Whoa whoa';
let isPublished = true;
let x = 'Hello';
x = 6;
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [true, 1, 'string'];
// Tuple
let person = [1, 'John', false];
let employee;
employee = [
    [1, 'Joe'],
    [2, 'Sarah'],
    [3, 'Johnboy'],
];
// Unions
let pid = 22;
pid = 'three';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type asssertion
let cid = 1;
let customerId = cid;
let customerId2 = cid;
// Function
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
