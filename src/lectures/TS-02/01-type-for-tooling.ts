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
  age: 1
};

function findStudentById(studentList: Student[], studentId: string) {
  if (studentList.length === 0) return undefined;

  studentList.find(x => x.gender)
}
