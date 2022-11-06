const arrayToList = (array) => {
    const list = { value: null, rest: null };
    list.value = array[0];
    array.shift() //
    if (array.length > 0) {
        list.rest = arrayToList(array);
    } else {
        list.rest = null;
    }
    return list;
}

const listToArray = (list) => {
    const array = [];
    let li = list;
    while (li) {
        array.push(li.value);
        li = li.rest;
    }
    return array;
}
const prepend = (v, r) => {
    const list = {};
    list.value = v;
    list.rest = r;
    return list;
}

const nth = (list, num) => {
    let position = 0;
    for (let i = list; i; i = i.rest) {
        if (position === num) {
            return i.value;
        } else position++;
    }
}
console.log(arrayToList([30, 40]));
console.log(arrayToList([50, 20, 40]));

console.log(listToArray(arrayToList([05, 15, 20])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([25, 30, 50]), 1));