# Write an algorithm such that is an element in an MxN matrix is 0, its entire row and column are set to 0.

# Brute force

def zero_matrix(matrix):
    zero_pos_list = []

    x_len = len(matrix[0])
    y_len = len(matrix)

    # find all zero positions
    for i in range(y_len):
        for k in range(x_len):
            if matrix[i][k] == 0:
                zero_pos_list.append([i, k]) 
    
    for cord in zero_pos_list:
        for i in range(x_len):
            matrix[cord[0]][i] = 0
        for k in range(y_len):
            matrix[k][cord[1]] = 0

B = [[1, 2, 3, 0], 
    [6, 7, 8, 9],
    [11, 12, 13, 14],
    [16, 17, 18, 19],
    [21, 22, 23, 24]]

print("Orignal matrix:")
for item in B:
    print(item)

zero_matrix(B)

print("Matrix after Zero Check:")
for item in B:
    print(item)

C = [[0, 2, 3, 8, 3, 3], 
    [6, 7, 8, 9, 2, 9],
    [1, 9, 3, 4, 5, 8],
    [1, 1, 8, 0, 1 ,1],
    [1, 7, 1, 1, 1 ,1],
    [1, 7, 1, 1, 1 ,1],
    [2, 2, 3, 4, 9, 0]]

print("Orignal matrix:")
for item in C:
    print(item)

zero_matrix(C)

print("Matrix after Zero Check:")
for item in C:
    print(item)