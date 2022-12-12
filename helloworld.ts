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
