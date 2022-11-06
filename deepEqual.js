const deepEqual = (value1, value2) => {
    if (value1 === value2) {
        return true;
    } else if (typeof value1 === typeof value2 && value1 !== null && value2 !== null) {

        if (Object.keys(value1).length !== Object.keys(value2).length) {
            return false;
        }
        for (const key in value1) {
            if (value2.hasOwnProperty(key)) {

                if (deepEqual(value1[key], value2[key]) == false)
                    return false;
            } else
                return false;
        }
        return true;
    } else
        return false;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, { here: 1, object: 2 }));

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));