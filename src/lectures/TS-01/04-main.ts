export function isPositive(n: number) {
  return n > 0;
}

try {
  Promise.reject(new Error('super'));
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

let count = 123;
let studentName = 'Alice';
let isActive= true;
const numberList = [1, 2, 3];
