let message: string = 'Hello World';
console.log(message);

interface Point {
  x: number;
  y: number;
  z: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}, ${p.z}`);
}

const point = { x: 12, y: 45, z: 50 };
logPoint(point);

let v: any = true;
v = 'string'; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
console.log(v);

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Maddison', new Date());

function getFavoriteNumber(): number {
  return 26;
}

// No type annotations here, but TypeScript can spot the bug
const names = ['Alice', 'Bob', 'Eve'];

// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
  console.log('The value of first is ' + obj.first);
  console.log('The value of last is ' + obj.last);
}
// Both OK
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });

function printId(id: number | string) {
  console.log('Your ID is: ' + id);
}
// OK
printId(101);
// OK
printId('202');
// Error
// printId({ myID: 22342 });

// Type assertions. Removed for traspiled code
// const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

function printText(s: string, alignment: 'left' | 'right' | 'center') {
  console.log(s, alignment);
}
printText('Hello, world', 'left');

//Error
// printText("G'day, mate", 'centre');

// With strictNullChecks to true, you need to check for null or undefined
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase());
  }
}

function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

// both of these result in 'true'
Boolean('hello'); // type: boolean, value: true
!!'world'; // type: true,    value: true
