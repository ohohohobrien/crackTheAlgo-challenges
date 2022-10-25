# Write code to remove duplicates from an unsorted linked list
# Challenge: How would you solve this problem if a temporary buffer is not allowed?

def remove_dupes(linked_List):
    
    # memoise the values and remove if in memoised list
    l_map = {}

    # check linked list not None
    if linked_List == None:
        return

    current = linked_List["next"]
    prev = linked_List
    l_map[prev["value"]] = prev["value"]

    while current != None:
        if current["value"] in l_map:
            prev["next"] = current["next"]
            current = prev["next"]
            continue
        else:
            l_map[current["value"]] = 1
        prev = current
        current = current["next"]
    

unsorted_linked_list = {
    "value": 8, 
    "next" : {
        "value" : 8, 
        "next" : {
                "value" : 82, 
                "next" : {
                    "value" : 82, 
                    "next" : {
                        "value" : 82,
                        "next" : None
                    }
                }
            }
        }
    }

print("Remove dupes from linked list:")
current = unsorted_linked_list
while current != None:
    print(current["value"])
    current = current["next"]
remove_dupes(unsorted_linked_list)
print("Linked list after dupes removal:")
current = unsorted_linked_list
while current != None:
    print(current["value"])
    current = current["next"]
