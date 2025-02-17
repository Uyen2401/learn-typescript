function sayHello() {
  console.log('Hi Easy Frontend');
}
// =>TypeScript hiểu: function sayHello(): void

function sum(a: number, b: number) {
  return a + b;
}
// => TypeScript hiểu: function sum(a: number, b: number): number

// function sum1(a: number, b: number): number {
//   return a + b.toString();
// }
//Error: Type 'string' is not assignable to type 'number'
//b.toString() trả về một chuỗi (string), trong khi function yêu cầu trả về số (number).

function getLength1(numberList?: number[]) {
  // Nếu numberList không được truyền, TypeScript hiểu nó có thể là undefined.
  return Array.isArray(numberList) ? numberList.length : 0;
}

function getLength2(numberList: number[] = []) {
  // Nếu không truyền numberList, mặc định nó là một mảng rỗng [].
  return numberList.length;
}

// function getLength3(numberList?: number[] = []) {
//   return numberList.length;
// }
//Error: Parameter cannot have question mark and initializer.
//Khi đã có giá trị mặc định, ? không cần thiết nữa.

function checkType(x: string | number) {
  if (typeof x === 'string') {
    console.log("It's a string");
  } else if (typeof x === 'number') {
    console.log("It's a number");
  } else {
    x; // `x` có kiểu `never`
  }
}

//x chỉ có thể là string | number, nên đoạn else là không thể xảy ra. TypeScript hiểu x lúc này có kiểu never.


// Sử dụng Object để truyền tham số
function createStudent(student: { id: number; name: string; age: number }) {
  const { id, name, age } = student;
  console.log(id, name, age);
}

createStudent({ id: 1, name: 'Bob', age: 18 });


// Dùng Interface để tăng tính tái sử dụng
interface Student { 
    id: number; 
    name: string; 
    age: number; 
  }
  
  function createStudent1({ id, name, age }: Student) { 
    console.log(id, name, age);
  }
  
  createStudent1({ id: 1, name: 'Bob', age: 18 } as Student);
