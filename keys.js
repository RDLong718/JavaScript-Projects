Object.keysRashad = (function() {

    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
            'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ]


    return function(obj) {

        var newArray = [],
            prop, i;

        for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
                newArray.push(prop);
            }
        }

        if (hasDontEnumBug) {
            for (i = 0; i < dontEnums.length; i++) {
                if (hasOwnProperty.call(obj, dontEnums[i])) {
                    newArray.push(dontEnums[i]);
                }
            }
        }
        return newArray;
    };
}());
const object1 = {
    a: 'Rashad',
    b: 52,
    c: true
};

console.log(Object.keysRashad(object1));
// expected output: Array ["a", "b", "c"]