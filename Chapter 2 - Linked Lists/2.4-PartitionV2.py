# Partition a linked list around a value x
# All nodes less thanm x come before all nodes greater than or equal to x
# Partitioned values can be in any order, just the rule above must be followed
# EXAMPLE
# Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
# Outut: 3 -> 1 -> 2 -> [10 -> 5 -> 5 -> 8]

def partition(linked_list, partition_value):
    # Find partition value or greater value
    if linked_list == None:
        return False
    
    current = linked_list
    prev = None
    
    # create two linked lists
    top_list = None
    top_list_header = None
    bottom_list = None
    bottom_list_header = None

    while current != None:
        if current["value"] < partition_value:
            if bottom_list == None:
                bottom_list = current
                bottom_list_header = bottom_list
            else:
                bottom_list["next"] = current
                bottom_list = bottom_list["next"]
        else:
            if top_list == None:
                top_list = current
                top_list_header = top_list
            else:
                top_list["next"] = current
                top_list = top_list["next"]
        prev = current
        current = current["next"]
    
    bottom_list["next"] = top_list_header
    top_list["next"] = None
    linked_list = bottom_list_header

linked_list = {
    "value": 3, 
    "next" : {
        "value" : 5, 
        "next" : {
                "value" : 8, 
                "next" : {
                    "value" : 5, 
                    "next" : {
                        "value" : 10,
                        "next" : {
                            "value" : 2, 
                            "next" : {
                                "value" : 1, 
                                "next" : None
                            }
                        }
                    }
                }
            }
        }
    }

partition_value = 5

print(linked_list)
partition(linked_list, partition_value)
print(linked_list)