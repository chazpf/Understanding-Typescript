// const person: {
//     name: string;
//     age: number;
// } = ...
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Chaz',
//     age: 34,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'Author'],
// };

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'Chaz',
    age: 34,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'chef'];

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}
