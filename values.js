Object.valuesRashad = function(obj) {
    var object = [];
    for (var element in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, element)) {
            object.push(obj[element]);
        }
    }
    return object;
}
const object2 = {
    a: 'Rashad',
    b: 38,
    c: true
};

console.log(Object.valuesRashad(object2));
// expected output: Array ["somestring", 42, false]