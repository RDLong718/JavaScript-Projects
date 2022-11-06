Array.prototype.includesRashad = function(searchElement) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === searchElement) {
            return true;
        }
    }
    return false;
}

const array1 = [1, 2, 3];
console.log(array1.includesRashad(3));