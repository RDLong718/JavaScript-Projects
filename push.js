Array.prototype.pushRashad = function(...args) {


    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }


    return this.length;
};

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.pushRashad('cows');
console.log(count);

console.log(animals);


animals.pushRashad('chickens', 'cats', 'dogs');
console.log(animals);