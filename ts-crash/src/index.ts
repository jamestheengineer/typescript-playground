// Basic types
let id: number = 5;
let company: string = 'Whoa whoa';
let isPublished: boolean = true;
let x: any = 'Hello';
x = 6;
let age: number;
age = 30;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [true, 1, 'string'];

// Tuple
let person: [number, string, boolean] = [1, 'John', false];
let employee: [number, string][];

employee = [
  [1, 'Joe'],
  [2, 'Sarah'],
  [3, 'Johnboy'],
];

// Unions
let pid: string | number = 22;
pid = 'three';

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

// Type asssertion
let cid: any = 1;
let customerId = <number>cid;
let customerId2 = cid as number;

// Function
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};

// Can't do this with interfaces
type Point = number | string;
const p1: Point = 1;

// user1.id = 1

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
