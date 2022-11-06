function isAnagram(s, t) {
    var c = s.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
    var d = t.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
    if (c === d) {
        return true;
    } else return false;

    // Insert code here;
}