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

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }

  return animal.fly();
}

// Functions
function greeter(fn: (a: string) => void) {
  fn('Hello, World');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  fn('Hello, World');
}

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

let myFunc = <DescribableFunction>(
  ((myNum: number) => (myNum > 8 ? true : false))
);
myFunc.description = 'This is a describable function type. Cool.';

function doSomething2(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6));
}

doSomething2(myFunc);

// Generics to match input and output types
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// Constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
function f(x?: number) {
  if (x) console.log(x.toFixed(3)); // 1 argument
}
f(); // OK
f(10); // OK

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); nope, not allowed

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);

// Objects
type Shape = {
  sides: string;
  color: string;
};

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // ...
}

interface SomeType {
  readonly prop: string;
}

function doSomething3(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  // obj.prop = "hello";
}

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

// Type system (kinda like generics)
interface Box<Type> {
  contents: Type;
}

let box: Box<string>;

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}

// Typing Types let you do more than just interface things
type BoxType<Type> = {
  contents: Type;
};

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

function doStuff(values: readonly string[]) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  // values.push("hello!");
}
// You can have N number of elements in a tuple using "rest eleements"
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

// Generics
function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity<string>('myString');

// Generic types
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// Constraints on types
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

// Generics and protoypes
class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = 'Mikle';
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

// Classes
class Point {
  x: number;
  y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;

// Best to add a constructor to classes
class GoodGreeter {
  name: string;

  constructor() {
    this.name = 'hello';
  }
}

class OKGreeter {
  // Not initialized, but no error
  name!: string;
}

class Greeter {
  readonly name: string = 'world';

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    // this.name = "not ok";
  }
}
const g = new Greeter();
// g.name = "also not ok";

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log('ping!');
  }
}

// No bueno
//class Ball implements Pingable {
//  pong() {
//    console.log('pong!');
//  }
//}

// Basic inheritence
class Animal2 {
  move() {
    console.log('Moving along!');
  }
}

class Dog extends Animal2 {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
