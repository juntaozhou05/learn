interface Person {
  firstName: string;
  lastName: string;
}
class Student {
  fullName!: string;
  constructor(public firstName: string, _lastName: string) {
    this.fullName = firstName + _lastName;
  }
}
function greeter(person: Person) {
  return `Hello . ${person.firstName}${person.lastName}`;
}

let user = { firstName: "first", lastName: "last" };
console.log(greeter(user));

let student = new Student("Jane", "m");
console.log(student);
