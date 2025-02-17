// function isEmpty1(numberList) { // error Parameter 'numberList' implicitly has an 'any' type.
//   return numberList.length === 0;
// }
// console.log(isEmpty1(123));

function isEmpty2(numberList: number[]) {
  return numberList.length === 0;
}
// console.log(isEmpty2(123)); //Argument of type 'number' is not assignable to parameter of type 'number[]'.ts(2345)
console.log(isEmpty2([])); // Valid

interface Student {
  id: number;
  name: string;
  gender: 'male' | 'female';
  age: number;
}

function findStudentById1(studentList: Student[], studentId: number): Student | undefined {
  if (studentList.length === 0) return undefined;

  studentList.find((x) => x.id === studentId);
}

const studentList1: Student[] = [
  { id: 1, name: 'Uyen', gender: 'female', age: 20 },
  { id: 2, name: 'Vanasa', gender: 'male', age: 18 },
];

const wendy = findStudentById1(studentList, 3);
// console.log(wendy.name) // type error "Object is possibly 'undefined'"
if (wendy) {
  console.log(wendy.name);
}

// 2 == '2';  // => return Error: This condition will always return 'false' since the types'number' and 'string' have no overlap. ts(2367)
// 2 === '2'; // => return Error: This condition will always return 'false' since the types'number' and 'string' have no overlap. ts(2367)
