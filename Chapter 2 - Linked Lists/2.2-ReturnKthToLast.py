# Implement an algorithm to find the kth to last elemnent of a single linked list
# Show the value of it

def kth_to_last(linked_list, n):
    
    if linked_list == None:
        return linked_list
    
    counter = 0
    l_map = {}

    current = linked_list

    while current != None:
        l_map[counter] = current["value"]
        current = current["next"]
        counter += 1
    
    if n > counter:
        return None

    print(l_map)
    return l_map[counter - 1 - n]


unsorted_linked_list = {
    "value": 6, 
    "next" : {
        "value" : 8, 
        "next" : {
                "value" : 5, 
                "next" : {
                    "value" : 9, 
                    "next" : {
                        "value" : 8,
                        "next" : None
                    }
                }
            }
        }
    }

print(str(kth_to_last(unsorted_linked_list, 3)))