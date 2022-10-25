# Implement a method to perform basic string compression using the counts of repeated characters.
# For example: aabcccccaaa => a2b1c5a3
# If the string would not become smaller, you should return the original string
# Assuume the string has only uppercase letters (a - z)

test_string_1 = "aabcccccaaa"
test_string_1_expected = "a2b1c5a3"

test_string_2 = "aaaaaaaeafaf"
test_string_2_expected = "a7e1a1f1a1"

test_string_3 = "acbdefg"
test_string_3_expected = "acbdefg"

def string_compressor(string):
    compressed_string = ""
    prev_string = None
    counter = 1

    for i in range(len(string)):

        # for first string[i] in string, set up required
        if prev_string == None:
            counter = 1
            prev_string = string[i]
            continue

        if string[i] == prev_string:
            counter += 1
        else:
            compressed_string += prev_string + str(counter)
            counter = 1
            prev_string = string[i]
            continue
        
        # for final string[i] iteration, should print
        if i == (len(string) - 1):
            compressed_string += prev_string + str(counter)

    if len(compressed_string) < len(string):
        return compressed_string
    else:
        return string
    
print("TEST 1")
print(f"Compress the string: {test_string_1} | Expected: {test_string_1_expected}")
print(string_compressor(test_string_1))
print(str(string_compressor(test_string_1) == test_string_1_expected))

print("TEST 2")
print(f"Compress the string: {test_string_2} | Expected: {test_string_2_expected}")
print(string_compressor(test_string_2))
print(str(string_compressor(test_string_2) == test_string_2_expected))

print("TEST 3")
print(f"Compress the string: {test_string_3} | Expected: {test_string_3_expected}")
print(string_compressor(test_string_3))
print(str(string_compressor(test_string_3) == test_string_3_expected))