# There are three types of edits that can be performed on strings:
#   => Insert a char
#   => Delete a char
#   => Replace a char
#
# Given two strings, write a function to check if they are one edit (or zero edits) away
# 
# Example:
# pale, ple -> true
# pales, pale -> true
# pale, bake -> false

test_1 = ("pale", "ple")
test_2 = ("pales", "pale")
test_3 = ("pale", "bale")
test_4 = ("pale", "bake")
test_5 = ("pasdle", "bake")

def one_away(stringList):
    
    string_1 = stringList[0]
    string_2 = stringList[1]

    # check lengths are within 1 or same
    len_diff = len(string_1) - len(string_2)
    if len_diff < -1 or 1 < len_diff:
        return False

    # create hashmap
    map = {}
    for char in string_1:
        if char in map:
            map[char] += 1
        else:
            map[char] = 1

    # remove values from hashmap for occurence
    for char in string_2:
        if char in map:
            map[char] -= 1

    # check hashmap if more than one occurence of NOT 0
    not_zero = False
    for value in map.values():
        if value != 0:
            if not_zero:
                return False
            else:
                not_zero = True
    
    return True
    
print("Test 1 - Expected: True | " + str(one_away(test_1)))
print("Test 2 - Expected: True | " + str(one_away(test_2)))
print("Test 3 - Expected: True | " + str(one_away(test_3)))
print("Test 4 - Expected: False | " + str(one_away(test_4)))
print("Test 5 - Expected: False | " + str(one_away(test_5)))