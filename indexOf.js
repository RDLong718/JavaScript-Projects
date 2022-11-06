Array.prototype.indexOfRashad = function(searchElement) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === searchElement) return i;

    }
    return -1;
}

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOfRashad('bison'));