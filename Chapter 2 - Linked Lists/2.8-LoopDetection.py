# Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop

import LinkedList as LL

def detect_loop(linked_list):
    reference_map = {}
    current = linked_list
    while current != None:
        if current in reference_map:
            return current
        else: 
            reference_map[current] = 1
            current = current.next
    return False

# create linked list
linked_list = LL.Linked_List(-1)
for i in range(10):
    linked_list.add_node(i)

current = linked_list

# variables to create circular reference
counter = 0
counter_limit = 3
circular_reference_node = None

# create circular reference
while current.next != None:
    if counter == counter_limit:
        circular_reference_node = current
    current = current.next
    counter += 1
current.next = circular_reference_node

# create linked list with no circular reference
linked_list_2 = LL.Linked_List(-1)
for i in range(10):
    linked_list_2.add_node(i)

# detect circular reference
print("Circular reference at value: " + str(detect_loop(linked_list).value) + " | Expected: 2")
print("Circular reference at node: " + str(detect_loop(linked_list)) + f" | Expected: {str(circular_reference_node)}")

# detect that no circular reference exists
print("Circular reference at value: " + str(detect_loop(linked_list_2)) + " | Expected: False")