var multiply = function() {
    var i, sum = 1;
    for (i = 0; i < arguments.length; i++) {
        sum *= arguments[i];
    }
    return sum;
};
console.log(multiply(19, 20));