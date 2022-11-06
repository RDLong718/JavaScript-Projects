Array.prototype.forEachRashad = function(callback, arg) {
    var count = 0;
    while (count < this.length) {

        var value;
        if (count in this) {
            value = this[count];
            callback.call(arg, value, count, this);
        }
        count++;
    }

}

const array4 = ['a', 'b', 'c'];

array4.forEachRashad(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"