// function square(x){
//     return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

const getFirstName = (fullName) => {
    const firstName = fullName.split(' ')[0];
    return firstName;
}

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Brandon Kirk'));
console.log(getFirstNameShort('Nicole Neiswanger'));
