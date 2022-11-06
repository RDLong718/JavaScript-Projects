function fizzBuzz(start, end) {
    const array = [];
    for (i = start; i <= end; i++) {
        if (i % 3 == 0 & i % 5 == 0) {
            array.push("FizzBuzz");
        } else if (i % 3 == 0) {
            array.push("Fizz");
        } else if (i % 5 == 0) {
            array.push("Buzz");
        } else {
            array.push(i);
        }
    }
    return array;
}

console.log(fizzBuzz(1, 15));