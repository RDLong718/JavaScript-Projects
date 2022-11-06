Array.prototype.lastIndexOfRashad = function(element) {
    var index = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {
            index = i;
        }

    }
    return index;

}
const animal = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animal.lastIndexOfRashad('Dodo'));
// expected output: 3

console.log(animal.lastIndexOfRashad('Tiger'));
// expected output: 1