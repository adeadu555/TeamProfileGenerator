// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Shape {
    // Just like constructor functions, classes can accept arguments
    constructor(area, perimeter) {
        this.area = area;
        this.perimeter = perimeter;
    }

    printInfo() {
        console.log(`Area: ${this.area}`);
        console.log(`Perimeter: ${this.perimeter}`);
    }
}

function Shape(area, permieter) {
    this.area = area
    this.permieter = perimeter
    this.printInfo = function () {
        console.log(`Area: ${this.area}`);
        console.log(`Perimeter: ${this.perimeter}`);
    }
}

const shape = new Shape(25, 25);

shape.printInfo();
