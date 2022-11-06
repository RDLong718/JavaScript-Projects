function removeZerosAndpush(array) {

    for (let index = 0; index < array.length; index++) {

        if (array[index] === 0) {
            array.splice(index, 1);
            array.push('0');

            index--;
        }

    }
}


const array1 = [4, 5, 0, 10, 11, 15, 0, 5];

removeZerosAndpush(array1);


for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}