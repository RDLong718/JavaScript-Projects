Array.prototype.mapRashad = function(callback, arg) {
    var thisArg, newArray, count;
    if (this == null) {
        throw new TypeError('This is null');
    }
    var object = Object(this);

    var len = object.length;

    if (arguments.length > 1) {
        thisArg = arguments[1];
    }
    newArray = new Array(len);
    count = 0;
    while (count < len) {
        var element, mappedElement;
        if (count in object) {
            element = object[count];
            mappedElement = callback.call(thisArg, element, object);
            newArray[count] = mappedElement;

        }
        count++;
    }
    return newArray;

}
const array = [1, 2, 3, 4];
const map1 = array.mapRashad(element => element * 2);

console.log(map1);