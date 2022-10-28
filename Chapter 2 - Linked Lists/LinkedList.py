class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
    
    def add_node(self, value):
        new_node = Node(value)
        self.next = new_node

class Linked_List:
    def __init__(self, value):
        self.value = value
        self.next = None
    
    def add_node(self, value):
        current = self
        while current.next != None:
            current = current.next
        current.next = Node(value)