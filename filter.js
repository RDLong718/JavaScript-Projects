Array.prototype.filterRashad = function(func, arguments) {
    var len = this.length;
    var newArray = new Array(len);
    var thisArg = this;
    var count = 0;
    var i = -1;

    while (++i !== len) {
        if (i in this)
            if (func.call(arguments, thisArg[i], i, thisArg))
                newArray[count++] = thisArg[i];
    }
    newArray.length = count;
    return newArray;

}
const numbers = [3, 878, 99, 43, 224, 677, 53, 21];

function overNum(num) {
    if (num > 500) return num;
}

const result = numbers.filterRashad(overNum);

console.log(result);