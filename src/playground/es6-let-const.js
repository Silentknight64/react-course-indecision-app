var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Marie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Brandon Kirk';

if (fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}