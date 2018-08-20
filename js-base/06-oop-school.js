'use strict';

class BaseUser {
    constructor(name, age, numPasses = 0) {
        this.name = name;
        this.age = age;
        this.numPasses = numPasses;
    }

    get Name(){
        return this.name;
    }

    get Age(){
        return this.age;
    }

    get NumPasses(){
        return this.numPasses;
    }

    canGoToClasses(){  //Узнать может ли актор на этом такте пойти на занятие.
        return Math.round(Math.random());
    }
}

class Teacher extends BaseUser{
    specialization = '';
    numberScientificPapers = 0;

    constructor(name, age, numPasses = 0) {
        super(name, age, numPasses);
    }

    get Specialization(){
        return this.specialization;
    }

    get NumberScientificPapers(){
        return this.numberScientificPapers;
    }
}

class Student extends BaseUser{
    marks = [];
    specialMarks = [];

    constructor(name, age, numPasses = 0) {
        super(name, age, numPasses);
    }

}

class Administrator extends BaseUser{

    constructor(name, age, numPasses = 0) {
        super(name, age, numPasses);
    }

}