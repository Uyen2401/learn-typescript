type ReadOnlyPerson = {
  readonly name: string;
  readonly age: number;
};

let readonlyUser: ReadOnlyPerson = { name: 'vanasa', age: 18 };
// readonlyUser.name = "John"; // Error: Cannot assign to 'name' because it is a read-only property.

//Using Record<K,V>
type UserRole = Record<string, string>;
let roles: UserRole = {
  admin: 'Vanasa',
  user: 'Wendy',
};

//Union type

//Index Signatures (Dynamic Keys)
type Data = {
  [key: string]: string | number;
};
let obj: Data = { id: 1, name: 'uyen' };

let value: string | number;
value = 'Hello'; //  Valid
value = 42; // Valid
// value = true; // Error: Type 'boolean' is not assignable to type 'string | number'.

type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;

interface Teacher {
  id: number | string;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

//Intersection type

//1.With Object

interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

// interface way
// interface Employee extends Identity, Contact {}
// interface Customer extends BusinessPartner, Contact {}

interface A {
  id: number;
}

interface B {
  name: string;
}

interface D extends A, B { // D has all properties from A and B, plus its own property.
  email: string;
} 
// 2.With Function

type Logger = (message: string) => void;
type ErrorHandler = (error: string) => void;

type LoggerWithError = Logger & ErrorHandler;

const log: LoggerWithError = (msg: string) => console.log(msg);

log('Something happened!'); // Works for both logging and error handling

//Intersection type

type objectNum = { id: string };
type AgmtNum = { id: number };

type C = objectNum & AgmtNum;

// const example: C = { id: "123" }; // Error: Type 'string' is not assignable to type 'never'.
// const example2: C = { id: 123 };  // Error: Type 'number' is not assignable to type 'never'.

