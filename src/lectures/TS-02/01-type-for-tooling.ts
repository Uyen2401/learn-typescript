function findEvenNumber(numberList: number[]) {
  if (numberList.length === 0) return undefined;
  // numberList
}

interface Student {
  id: number;
  name: string;
  gender: 'male' | 'female';
  age: number;
}

const bob: Student = {
  id: 17116143,
  name: '',
  gender: 'male',
  age: 1,
};

function findStudentById(studentList: Student[], studentId: string) {
  if (studentList.length === 0) return undefined;

  studentList.find((x) => x.gender);
}

const studentList: Student[] = [
  { id: 1, name: 'Alice', age: 11, gender: 'female' },
  { id: 2, name: 'Bob', age: 12, gender: 'male' },
];
const newList = [...studentList];
// const newList: Student[] = [];
// studentList.forEach((student) => {
//   newList.push(student);
// });
// console.log(newList);
// newList[1].age = 18;
// newList.push(studentList);
// console.log(newList);

newList[0].name = 'Alice 123';
console.log(studentList[0].name); 
console.log(newList[0].name);
// console.log(newList);

// const newList1 = studentList.map((student) => ({
//   ...student,
//   address: '12345',
// }));

// console.log(newList1);
// console.log(studentList);
