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
