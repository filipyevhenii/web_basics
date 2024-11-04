class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Привіт, мене звуть ${this.name}.`;
    }
}

class Student extends Person {
    study() {
        return `${this.name} навчається.`;
    }
}

class Teacher extends Person {
    teach() {
        return `${this.name} викладає.`;
    }
}

const student = new Student('Євгеній');
const teacher = new Teacher('Роман');

console.log(student.greet());
console.log(student.study());

console.log(teacher.greet());
console.log(teacher.teach());
