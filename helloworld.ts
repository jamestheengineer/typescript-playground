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
