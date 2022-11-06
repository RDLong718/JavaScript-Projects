Array.prototype.someRashad = function(func, arguement) {
    var object = Object(this);
    var length = object.length;

    for (var i = 0; i < length; i++) {
        if (i in object && func.call(arguement, object[i], i, object)) {
            return true;
        }
    }
    return false;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const odd = (element) => element % 2 !== 0;
console.log(arr.someRashad(odd));