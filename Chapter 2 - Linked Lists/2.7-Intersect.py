# Implement a function to check if two linked lists intersect, if intersect, return the reference to the intersecting node

def intersect(linked_list_1, linked_list_2):
    
    # make a list of values for each linked list
    values_list_1 = []
    current = linked_list_1
    while current != None:
        values_list_1.append(current)
        current = current["next"]

    if len(values_list_1) == 0:
        return False

    values_list_2 = []
    current = linked_list_2
    while current != None:
        values_list_2.append(current)
        current = current["next"]

    if len(values_list_2) == 0:
        return False

    # go through lists in reverse order until references don't match
    length_val_list_1 = len(values_list_1)
    length_val_list_2 = len(values_list_2)
    for i in range(length_val_list_1):
        if values_list_1[length_val_list_1 - 1 - i] == values_list_2[length_val_list_2 - 1 - i]:
            prev_reference = values_list_1[length_val_list_1 - 1 - i]   
            continue
        else:
            if i == 0:
                return False
            else:
                return prev_reference

    return values_list_1[0]

intersecting_list = {
    "value": 3, 
    "next" : {
        "value" : 7, 
        "next" : None
        }
    }

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
                                "next" : intersecting_list
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
                        "next" : intersecting_list
                    }
                }
            }
        }
    }

linked_list_false = {
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

print("Intersecting node: " + str(intersect(linked_list, linked_list_2)) + f" | Expected: {intersecting_list}")
print("Intersecting node: " + str(intersect(linked_list, linked_list_false)) + f" | Expected: False")