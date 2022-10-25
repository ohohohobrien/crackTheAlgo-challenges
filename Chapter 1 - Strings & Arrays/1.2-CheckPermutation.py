# Given two strings, write a method to decide if one is a permutation of the other

string_1 = "abcd"
string_2 = "dbac"
string_3 = "cdef"
string_4 = "de"
string_5 = "aaaa"

# solution 1 - Brute Force - O(n^2)
def checkPermutation(string_1, string_2):
    if len(string_1) != len(string_2): 
        return False

    for i in range(len(string_1)):
        char_in_string = False
        for k in range(len(string_2)):
            if string_1[i] == string_2[k]:
                char_in_string = True
                break
        if char_in_string == False:
            return False

    return True

print("Solution 1:")
print("~~~~~~~~~~~~~")
print(f"{string_1} is a permutation of {string_2} == {checkPermutation(string_1, string_2)} | EXPECTED: TRUE")
print(f"{string_1} is a permutation of {string_3} == {checkPermutation(string_1, string_3)} | EXPECTED: FALSE")
print(f"{string_1} is a permutation of {string_4} == {checkPermutation(string_1, string_4)} | EXPECTED: FALSE")
print(f"{string_5} is a permutation of {string_1} == {checkPermutation(string_5, string_1)} | EXPECTED: FALSE")
print("~~~~~~~~~~~~~")

# solution 2 - More Optimised Method - O(n) [use a hashmap]

def checkPermutation_v2(string_1, string_2):
    if len(string_1) != len(string_2): 
        return False
    
    map = {}
    for char in string_1:
        map[char] = 1

    map_2 = {}

    for char in string_2:
        # check if repeat characters
        if char in map_2:
            return False
        map_2[char] = 1

        if char in map:
            continue
        else:
            return False
    
    return True
    
print("Solution 2:")
print("~~~~~~~~~~~~~")
print(f"{string_1} is a permutation of {string_2} == {checkPermutation_v2(string_1, string_2)} | EXPECTED: TRUE")
print(f"{string_1} is a permutation of {string_3} == {checkPermutation_v2(string_1, string_3)} | EXPECTED: FALSE")
print(f"{string_1} is a permutation of {string_4} == {checkPermutation_v2(string_1, string_4)} | EXPECTED: FALSE")
print(f"{string_1} is a permutation of {string_5} == {checkPermutation_v2(string_1, string_5)} | EXPECTED: FALSE")
print("~~~~~~~~~~~~~")

# more optimised and allows for repeat chars O(n)
def checkPermutation_v3(string_1, string_2):
    if len(string_1) != len(string_2): 
        return False
    
    map = {}
    
    for char in string_1:
        if char in map:
            map[char] += 1
        else:
            map[char] = 1

    for char in string_2:

        if char in map:
            if map[char] <= 0:
                return False
            else:
                map[char] -= 1
        else:
            return False
    
    return True

print("Solution 3:")
print("~~~~~~~~~~~~~")
print(f"{string_1} is a permutation of {string_2} == {checkPermutation_v3(string_1, string_2)} | EXPECTED: TRUE")
print(f"{string_1} is a permutation of {string_3} == {checkPermutation_v3(string_1, string_3)} | EXPECTED: FALSE")
print(f"{string_1} is a permutation of {string_4} == {checkPermutation_v3(string_1, string_4)} | EXPECTED: FALSE")
print(f"{string_1} is a permutation of {string_5} == {checkPermutation_v3(string_1, string_5)} | EXPECTED: FALSE")
print(f"{string_5} is a permutation of {string_1} == {checkPermutation_v3(string_5, string_1)} | EXPECTED: FALSE")
print("~~~~~~~~~~~~~")