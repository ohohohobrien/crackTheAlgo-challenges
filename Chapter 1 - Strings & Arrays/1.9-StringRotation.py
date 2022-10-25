# Assume you have a method isSubstring which checks if one word is a substring of another.
# Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring 
# (e.g., "waterbottle" is a rotation of "erbottlewat".)

def isSubstring(s1, s2):

    # find the start of the string
    first_char = s1[0]
    start_index = None

    for i in range(len(s2)):
        if s2[i] == first_char:
            start_index = i
    
    if start_index == None:
        return False

    # re-order s2 to be the same as s1
    s2 = s2[start_index : ] + s2[0 : start_index]
    
    if s1 == s2:
        return True

    return False

s1 = "waterbottle"
s2 = "rbottlewate"

print(isSubstring(s1, s2))

s3 = "potter"
s4 = "terpot"

print(isSubstring(s3, s4))

s5 = "potter"
s6 = "teprot"

print(isSubstring(s5, s6))