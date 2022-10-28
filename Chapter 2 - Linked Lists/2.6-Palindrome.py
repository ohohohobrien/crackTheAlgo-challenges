# Implement a function to check if a linked list is a palindrome

def palindromeCheck(linked_list):
    
    # Iterate through - reverse list and create list of values
    current = linked_list
    prev = None
    next = None
    list_of_values = []

    while current != None:
        list_of_values.append(current["value"])
        next = current["next"]
        current["next"] = prev
        prev = current
        current = next

    # Go through reversed linked list against list of values
    current = prev
    counter = 0

    while current != None:
        if list_of_values[counter] != current["value"]:
            return False
        current = current["next"]
        counter += 1
    
    return True


linked_list = {
    "value": 3, 
    "next" : {
        "value" : 2, 
        "next" : {
                "value" : 1, 
                "next" : {
                    "value" : 0, 
                    "next" : {
                        "value" : 1,
                        "next" : {
                            "value" : 2, 
                            "next" : {
                                "value" : 3, 
                                "next" : None
                            }
                        }
                    }
                }
            }
        }
    }

linked_list_2 = {
    "value": 3, 
    "next" : {
        "value" : 7, 
        "next" : {
                "value" : 1, 
                "next" : {
                    "value" : 0, 
                    "next" : {
                        "value" : 1,
                        "next" : {
                            "value" : 2, 
                            "next" : {
                                "value" : 3, 
                                "next" : None
                            }
                        }
                    }
                }
            }
        }
    }


print("Palindrome: " + str(palindromeCheck(linked_list)) + " | Expected: True")
print("Palindrome: " + str(palindromeCheck(linked_list_2)) + " | Expected: False")