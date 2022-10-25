# Implement an algorithm to determine if a string has all unique characters
# Challenge: cannot use an additional data structure

test_string_1 = "abcdefghijklmnop" # unique
test_string_2 = "abcdeffghijklmanop" # not unique
test_string_3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" # unique

# Solution 1 - Create a hashmap data structure
def isUnique(string):
    string_map = {}
    for char in string:
        if (char in string_map):
            return False
        else:
            string_map[char] = 1
    return True

print("Solution 1:")
print("Test 1: Expected result = True")
print(isUnique(test_string_1))

print("Test 2: Expected result = False")
print(isUnique(test_string_2))        

print("Test 3: Expected result = True")
print(isUnique(test_string_3))

# Solution 2 - No new data structure
def isUniqueChallenge(string):
    for i in range(len(string)):
        for k in range(i, len(string)):
            k = k + 1
            if k >= len(string):
                break
            if string[i] == string[k]:
                return False
    return True

print("Solution 2:")
print("Test 1: Expected result = True")
print(isUniqueChallenge(test_string_1))

print("Test 2: Expected result = False")
print(isUniqueChallenge(test_string_2))        

print("Test 3: Expected result = True")
print(isUniqueChallenge(test_string_3))