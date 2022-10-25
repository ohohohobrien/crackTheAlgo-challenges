# Write code to remove duplicates from an unsorted linked list

def remove_dupes(linked_List):
    slow_runner = linked_List
    if slow_runner == None:
        return None

    while slow_runner != None:
        prev = slow_runner
        current = slow_runner["next"]
        while current != None:
            if current["value"] == slow_runner["value"]:
                # if tail of linked list
                print("Removed duplicate value of: " + str(current["value"]))
                if current["next"] == None:
                    prev["next"] = None
                    break
                # if not tail of linked list
                prev["next"] = current["next"]
                current = current["next"]
                continue
            prev = current
            current = current["next"]
        slow_runner = slow_runner["next"]

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
