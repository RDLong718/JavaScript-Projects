function intersection(arr1, arr2) {
    let intersect = arr1.filter(x => arr2.includes(x));
    return intersect;

}