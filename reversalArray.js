function reverseArray(array) {
    var len = array.length - 1;
    newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray[index] = array[len];
        len--;

    }
    return newArray;
}

function reverseArrayInPlace(array) {
    return array.map(array.pop, [...array]);
}

console.log(reverseArray(["A", "B", "C", "D", "E"]));
const arrayValue = [1, 2, 3, 4, 5, 6, "taco"];
console.log(reverseArrayInPlace(arrayValue));