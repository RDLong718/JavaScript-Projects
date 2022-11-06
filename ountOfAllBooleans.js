function countOfAllBooleans(arr) {
    let count = 0;
    for (let element of arr)
        if (element === true || element === false) count++;

    return count;

}


console.log(countOfAllBooleans([false, true, false, "hello"]));