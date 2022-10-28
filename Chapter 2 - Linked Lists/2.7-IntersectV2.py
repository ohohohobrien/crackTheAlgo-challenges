# Implement a function to check if two linked lists intersect, if intersect, return the reference to the intersecting node

def intersect(linked_list_1, linked_list_2):
    
    current_1, current_2 = linked_list_1, linked_list_2

    while current_1 != current_2:
        
        if current_1 == None:
            current_1 = linked_list_2
        if current_2 == None:
            current_2 = linked_list_1

        current_1 = current_1["next"]
        current_2 = current_2["next"]

    return current_1

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
print("Intersecting node: " + str(intersect(linked_list, linked_list_false)) + f" | Expected: None")