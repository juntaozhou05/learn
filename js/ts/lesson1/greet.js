function greeter(person) {
    return "Hello . " + person.firstName + person.lastName;
}
var user = { firstName: "first", lastName: "last" };
document.body.innerHTML = greeter(user);
