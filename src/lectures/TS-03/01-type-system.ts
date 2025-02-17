let count = 5;
// count = 'five' //Type 'string' is not assignable to type 'number'.ts(2322)

let number: any = 5; // adding any to resolve
number = 'five'; // correct

let age: 1;
let chanelName = 'Easy Frontend';
let isActive: false;
let studentId: null;

const student = {
  id: 1,
  name: 'Easy Frontend',
};

student.name = 'Typescript is easy! :P';

// Type Assertion

function getLength(value: string | number) {
  return (value as string).length || value.toString().length;
}

console.log(getLength('Hello')); // Output: 5
console.log(getLength(12345)); // Output: 5

//Báo lỗi nếu type asertion sai.
// const num = "123" as number;


//Literal Types
//1. as const với Object
const studentA = {
  id: 1,
  name: 'Easy Frontend',
} as const;


// Không thể thay đổi giá trị
studentA.name = 'Typescript is easy, really?!'; 
// Error: Cannot assign to 'name' because it is a read-only property.
// => Không thể thay đổi student.name vì nó đã trở thành readonly.

//2. as const với Array

const colors = ['red', 'green', 'blue'] as const;

colors.push('yellow'); // Error: Property 'push' does not exist on type 'readonly ["red", "green", "blue"]'.
colors[0] = 'black';   // Error: Cannot assign to '0' because it is a read-only property.

//Type Assertion

