# Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop

import LinkedList as LL

def detect_loop(linked_list):

    slow_ptr, fast_ptr = linked_list, linked_list 

    while fast_ptr and fast_ptr.next:
        
        slow_ptr = slow_ptr.next
        fast_ptr = fast_ptr.next.next

        if fast_ptr == slow_ptr:
            return True

    return False

# create linked list
linked_list = LL.Linked_List(-1)
for i in range(10):
    linked_list.add_node(i)

current = linked_list

# variables to create circular reference
counter = 0
counter_limit = 4
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
print("Circular reference detected: " + str(detect_loop(linked_list)) + f" | Expected: True")

# detect that no circular reference exists
print("Circular reference detected: " + str(detect_loop(linked_list_2)) + " | Expected: False")