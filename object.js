/* Objects */

let person = {
    name: 'K',
    age: '21',
    job: 'Software Dev',
    showDetails: function () {
        console.log(`name: ${this.name}, age: ${this.age}, job:${this.job}`)
    }
}

person.showDetails();

let emp1 = Object.create(person);
emp1.name = 'L';
//emp1.showDetails();

// keys of the 
let keys = Object.keys(person);
//console.log('keys: ',keys);

//values of the object
//let values = Object.values(person);
//console.log('values: ',values);

delete person.showDetails;
Object.keys(person).forEach((key) => {
    let value = person[key];
    // console.log(`${key} : ${value}`);
});


//Get length of the object
let objectLength = Object.keys(person).length;
//console.log(`object length: ${objectLength}`);

let name = {
    firstName: 'K',
    lastName: '1234'
};

let job = {
    title: 'Software Developer',
    employer: 'K Software Systems'
};

let employee = Object.assign(name, job);
//let employee = {...name, ...job}

//console.log(employee);

let freezeEmp = Object.freeze(employee);

freezeEmp.job = 'Developer';
freezeEmp.middleName = 'L';

//console.log('freezeEmp, ', freezeEmp);
//console.log('Object frozen freezeEmp, ', Object.isFrozen(freezeEmp))
//console.log('Object frozen person, ', Object.isFrozen(person))


function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () { return this.firstName + " " + this.lastName; };
}

let person1 = new Person('K', '123', 25, 'Dark brown');
console.log(person1.fullName());



const obj = {
    a: 'something',
    b: 42,
    c: {
        a: 1
    }
};

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}


Object.keys(obj).forEach((key) => {
    let value = obj[key];
    console.log(`${key} : ${value}`);

});

