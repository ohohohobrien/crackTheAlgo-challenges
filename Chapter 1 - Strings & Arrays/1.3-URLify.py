# Replace all spaces in a string with %20

input = "Mr John Smith"
input_2 = "NoSpacesHere"

def urlify(string):
    return string.replace(" ", "%20")

print(urlify(input))

def urlify_manual(string):
    url_string = ""
    for char in string:
        if char == " ":
            url_string += "%20"
        else:
            url_string += char
    return url_string

print(urlify_manual(input))
print(urlify_manual(input_2))