/* Classes & inheritance */
'use strict';

class Person {
   constructor(first, last, age, job) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.job = job;
   }

   static countPerson() {
      console.log('There is a person class');
   }

   showDetails() {
      console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
   }
}

class Employee extends Person {
   constructor(first, last, age, job, employeeNum) {
      super(first, last, age, job);
      this.employeeNum = employeeNum;
   }

   showEmpNum() {
      console.log(`${this.firstName} Employee number ${this.employeeNum}`);
   }
}

let k = new Employee('k', 'v', 20, 'Software Dev', '#1234');

k.showDetails();
Person.countPerson();
k.showEmpNum();
