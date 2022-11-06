function isPalindrome(word) {
    //Turn word into an array
    const forwardArray = word.split('');
    //Make another array that is reversed
    const reverseArray = forwardArray.reverse();
    //Create a string from the reverseArray
    const reverseWord = reverseArray.join('');
    // Lastly the if statement
    if (word == reverseWord) {
        return true;
    } else {
        return false;
    }

}
console.log(isPalindrome("racecar"));