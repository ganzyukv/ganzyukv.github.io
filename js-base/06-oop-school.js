'use strict';

class BaseUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.numPasses = 0;
    }

    get Name() {
        return this.name;
    }

    get Age() {
        return this.age;
    }

    get NumPasses() {
        return this.numPasses;
    }

    canGoToClasses() {  //Узнать может ли актор на этом такте пойти на занятие.
        return Math.round(Math.random());
    }
}

class Teacher extends BaseUser {
    constructor(name, age, specialization, numberScientificPapers) {
        super(name, age);
        this.specialization = specialization;
        this.numberScientificPapers = numberScientificPapers;
    }

    get Specialization() {
        return this.specialization;
    }

    set Specialization(value) {
        this.specialization = value;
    }

    get NumberScientificPapers() {
        return this.numberScientificPapers;
    }

    set NumberScientificPapers(value) {
        this.numberScientificPapers = value;
    }
}

class Student extends BaseUser {
    constructor(name, age) {
        super(name, age);
        this.specialMarks = [];
    }

    get SpecialMarks() {
        return this.specialMarks;
    }

    set SpecialMarks(value) {
        this.specialMarks.push(value);
    }
}

class Administrator extends BaseUser {
    constructor(name, age) {
        super(name, age);
    }

    makeGroup(teacher) {
        this.group = new GroupStorage(teacher, Administrator.Students);
        return this;
    }

    lesson() {
        if (!this.canGoToClasses() || !this.group.teacher.canGoToClasses()) {
            this.group.students.forEach(function (element) {
                element.numPasses++;
            });
        } else {
            let specialization = this.group.teacher.Specialization;
            let NumberScientificPapers = this.group.teacher.NumberScientificPapers;
            this.group.students.forEach(function (element) {
                if(element.canGoToClasses()) {
                    let mark = Math.round(Math.random() * 5) + NumberScientificPapers;
                    element.specialMarks.push({specialization: specialization, mark: mark});
                }else{
                    element.numPasses++;
                }
            });
        }

    }

    course(countLesson) {
        for (let i = 1; i <= countLesson; i++) {
            this.lesson();
        }
    }

    static get Students() {
        return [
            new Student('Igor', 20),
            new Student('Petya', 22),
            new Student('Kolya', 21),
            new Student('Alex', 25)
        ];
    }
}

class GroupStorage {
    constructor(teacher, students = []) {
        this.teacher = teacher;
        this.students = students;
    }
}

let admin = new Administrator('Vasja', 25);
let teacher = new Teacher('Ivan', 45, 'mathematics', 5);

admin.makeGroup(teacher).course(15);
console.log(admin.group);
