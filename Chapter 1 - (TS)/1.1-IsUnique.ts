// Implement an algorithm to determine if a string has all unique characters
// Challenge: cannot use an additional data structure

const test_string_1 = "abcdefghijklmnop"; // unique
const test_string_2 = "abcdeffghijklmanop"; // not unique
const test_string_3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // unique

// hashmap solution - t = O(n), s = O(n) 
function isUnique(string: string): boolean {
    let char_map: any = {};
    const length = string.length;

    for (let i = 0; i < length; i++) {
        if (string[i] in char_map) {
            return false;
        } else {
            char_map[string[i]] = 1;
        }
    }
    return true;
}

console.log(`Test string 1: Expected: true | Result: ${isUnique(test_string_1).toString()}`);
console.log(`Test string 2: Expected: false | Result: ${isUnique(test_string_2).toString()}`);
console.log(`Test string 3: Expected: true | Result: ${isUnique(test_string_3).toString()}`);