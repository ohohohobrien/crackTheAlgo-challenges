# Assume you have a method isSubstring which checks if one word is a substring of another.
# Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring 
# (e.g., "waterbottle" is a rotation of "erbottlewat".)

def isSubstring(s1, s2):

    s3 = s1 + s1

    return s2 in s3


s1 = "waterbottle"
s2 = "rbottlewate"

print(isSubstring(s1, s2))

s3 = "potter"
s4 = "terpot"

print(isSubstring(s3, s4))

s5 = "potter"
s6 = "teprot"

print(isSubstring(s5, s6))