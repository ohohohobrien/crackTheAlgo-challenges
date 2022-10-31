// Implement an algorithm to determine if a string has all unique characters
// Challenge: cannot use an additional data structure
var test_string_1 = "abcdefghijklmnop"; // unique
var test_string_2 = "abcdeffghijklmanop"; // not unique
var test_string_3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // unique
function isUnique(string) {
    var char_map = {};
    var length = string.length;
    for (var i = 0; i < length; i++) {
        if (string[i] in char_map) {
            return false;
        }
        else {
            char_map[string[i]] = 1;
        }
    }
    return true;
}
console.log("Test string 1: Expected: true | Result: ".concat(isUnique(test_string_1).toString()));
console.log("Test string 2: Expected: false | Result: ".concat(isUnique(test_string_2).toString()));
console.log("Test string 3: Expected: true | Result: ".concat(isUnique(test_string_3).toString()));
