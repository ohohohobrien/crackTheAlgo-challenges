# Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degress

import copy

A = [[1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]]

A_solution = [[7, 4, 1],
             [8, 5, 2],
             [9, 6, 3]]

def rotate90(matrix, rotation = "clockwise"): 

    if rotation != "clockwise" and rotation != "anti clockwise":
        print("Incorrect rotation input, need to choose from 'clockwise' or 'anti clockwise'.")
        return False

    # create a blank matrix
    rotated_matrix = copy.deepcopy(matrix)
    
    matrix_length = len(rotated_matrix)

    for i in range(matrix_length):
        for k in range(matrix_length):
            if rotation == "clockwise":
                rotated_matrix[k][(matrix_length - 1 - i)] = matrix[i][k]
            if rotation == "anti clockwise":
                rotated_matrix[i][k] = matrix[k][(matrix_length - 1 - i)]

    return rotated_matrix

print("Original matrix:")
print(A)
print("Error check:")
print(rotate90(A, "180"))
print("Rotated 90 degrees clockwise:")
print(rotate90(A, "clockwise"))
print("Rotated 90 degrees anticlockwise:")
print(rotate90(A, "anti clockwise"))
print("Rotated 180 degrees:")
print(rotate90(rotate90(A, "clockwise"), "clockwise"))