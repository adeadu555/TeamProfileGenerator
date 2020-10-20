// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    printName() {
        return this.name;  
    }
    printId() {
        return this.id;
    }
    printEmail() {
        return this.email;
    }
    printGithub() {
        return this.github;
    }
    printRole() {
        return "Employee"
    }
}

module.exports = Employee