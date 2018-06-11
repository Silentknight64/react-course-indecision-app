// // arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(55, 1));

// // this keyword - no longer bound

// const user = {
//     name: 'Brandon',
//     cities: ['Salt Lake City', 'Tooele', 'Portsmouth'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// };

// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};

console.log(multiplier.multiply());