Array.prototype.everyRashad = function(callbackfn, arg) {
    var thisArg, count;

    var obj = Object(this);
    var length = obj.length;
    thisArg = arg;
    count = 0;

    while (count < length) {
        var element;
        if (count in obj) {
            var test;
            element = obj[count];
            if (thisArg) test = callbackfn(thisArg, element, count, obj);
            else test = callbackfn(element.count, obj);
            if (!test) {
                return false;
            }

        }
        count++;

    }
    return true;
}
const isAbove = (num) => num < 500;
const nums = [2355, 1455, 55555, 4, 66, 7888];
console.log(nums.everyRashad(isAbove));