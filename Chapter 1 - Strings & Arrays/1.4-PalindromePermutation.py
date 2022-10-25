# Check if a string is a permutation of a palindrome
# A palindrome is a word or phrase that is the same forwards and backwards
# The palindrome does not need to be limited to just dictionary words
# Example:
#   Input: Tact Coa
#   Output: True (permutations: "taco cat", "atco cta", etc.)
#                                <------>    <------> same both ways

test_input = "taco cat"
test_input_2 = "tacoz cat"
test_input_3 = "t"
test_input_4 = "totototototototos"

def palindrome_checker(string):

    # if string has length of 1 or less, not a palindrome
    if len(string) <= 1:
        return False

    # create hash map of characters
    p_map = {}
    for char in string:
        if char == " ":
            continue
        if char in p_map:
            p_map[char] += 1
        else:
            p_map[char] = 1

    # check that characters in map are valid for a palindrome
    # only 1 odd value allowed

    odd_number = False

    for value in p_map.values():
        if value % 2 != 0:
            if odd_number:
                return False
            else:
                odd_number = True

    return True

print("Expected: True | " + str(palindrome_checker(test_input)))
print("Expected: False | " + str(palindrome_checker(test_input_2)))
print("Expected: False | " + str(palindrome_checker(test_input_3)))
print("Expected: True | " + str(palindrome_checker(test_input_4)))