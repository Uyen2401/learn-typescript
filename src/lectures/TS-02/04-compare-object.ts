const studentA = { id: 1, name: 'Alice' };
const studentB = studentA;
studentA === studentB; // true;
// studentA === { id: 1, name: 'Alice' }; // false: This condition will always return 'false' since JavaScript compares objects by reference, not value.ts(2839)

// usually, we just compare the id of two objects

const studentC = { id: 1, name: 'Alice' };
studentA.id === studentC.id; // true


let student; // undefined
// fetch data
student = {
id: 1,
name: 'Alice',
}
// check truthy
if (student) {}
// Truthy values: Non-empty objects, non-empty arrays, non-zero numbers, "string", true, etc.
// Falsy values: null, undefined, 0, NaN, "", false.

// Optional Chaining (?.) -> Prevents errors when accessing nested properties on undefined or null objects.
if (student?.id) {} // =>If student is null or undefined > returns undefined instead of throwing an error.