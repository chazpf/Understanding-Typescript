"use strict";
const e1 = {
    name: 'Crouton',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { // a type guard
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Chaz', ' Formichella');
result.split(' ');
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) { // also a type guard
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}
// printEmployeeInformation(e1);
// printEmployeeInformation({name: 'Chaz', startDate: new Date()});
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Truck driving...');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}
// moveAnimal({type: 'horse', runningSpeed: 10})
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there!';
}
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with capital!',
    etc: 'And so on....'
};
const fetchedUserData = {
    id: 'u1',
    name: 'Chaz',
    job: { title: 'CEO', description: 'My own company' }
};
// console.log(fetchedUserData?.job?.title);
const userInput = 0;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=intersectionsGuardsDiscriminatedCastingIndexOverloadsOptionalNullish.js.map