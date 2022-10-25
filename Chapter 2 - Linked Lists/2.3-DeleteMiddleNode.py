# Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necesssarily the exact middle)...
# ... of a single linked list given access to only that node
# EXAMPLE
# Input: the node c from the linked list a->b->c->d->e->f
# Result: nothing is returned, but the next linked list looks likea->b->d->e->f

def remove_middle(node):
    node["value"] = node["next"]["value"]
    node["next"] = node["next"]["next"]

linked_list = {
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

print(linked_list)

node = linked_list["next"]["next"] # node with value 5

remove_middle(node)

print("New list:")
print(linked_list)