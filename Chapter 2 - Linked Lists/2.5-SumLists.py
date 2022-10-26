# You have two numbers represented by a linked list, each noode contains a single digit
# The digits are stored in reverse order, such that the 1's digit is at the head of the lsit
# Write a function that adds the two numbers and returns the sum as a linked list

# brute force way first

def sumLists(l1, l2):
    
    # create a list of l1 values
    current = l1
    l1_list = []
    while current != None:
        if len(l1) == 0:
            l1_list.append(current["value"])
        else:
            l1_list = [current["value"]] + l1_list
        current = current["next"]

    # create a list of l2 values
    current = l2
    l2_list = []
    while current != None:
        if len(l2) == 0:
            l2_list.append(current["value"])
        else:
            l2_list = [current["value"]] + l2_list
        current = current["next"]

    # join the lists together
    l1_value = ""
    for item in l1_list:
        l1_value += str(item)
    l1_value = int(l1_value)

    l2_value = ""
    for item in l2_list:
        l2_value += str(item)
    l2_value = int(l2_value)

    # sum the values
    sum_value = l1_value + l2_value

    # create a linked list of the digits
    linked_list = None
    current = {}

    for digit in str(sum_value):
        if linked_list == None:
            current["value"] = int(digit)
            current["next"] = None
            linked_list = current
        else:
            current["next"] = {}
            current["next"]["value"] = int(digit)
            current["next"]["next"] = None
            current = current["next"]

    # return the new list
    return linked_list

l1 = {
    "value": 7,
    "next": {
        "value": 1,
        "next": {
            "value": 6,
            "next": None
        }
    }
}

l2 = {
    "value": 5,
    "next": {
        "value": 9,
        "next": {
            "value": 2,
            "next": None
        }
    }
}

print(sumLists(l1, l2))