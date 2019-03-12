var Student = /** @class */ (function () {
    function Student(firstName, _lastName) {
        this.firstName = firstName;
        this.fullName = firstName + _lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello . " + person.firstName + person.lastName;
}
var user = { firstName: "first", lastName: "last" };
console.log(greeter(user));
var student = new Student("Jane", "m");
console.log(student);
