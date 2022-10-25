# rotate an MxM matrix 90 degrees clockwise
# rotate it in place

def rotate(matrix):
    left = 0
    right = len(matrix) - 1

    while(left < right):
        top = left
        bottom = right

        for i in range(right - left):
            
            # assign top left to temporary value
            temp = matrix[top][left + i]

            # assign top left from bottom left
            matrix[top][left + i] = matrix[bottom - i][left]

            # assign bottom left from bottom right
            matrix[bottom - i][left] = matrix[bottom][right - i]

            # assign bottom right from top right
            matrix[bottom][right - i] = matrix[top + i][right]

            # assign top left from bottom left
            matrix[top + i][right] = temp

        left += 1
        right -= 1

A = [[1, 2, 3, 4, 5], 
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]]

print("Rotate matrix:")
for item in A:
    print(item)
print("~~~~~~")

rotate(A)

print("Rotated matrix:")
for item in A:
    print(item)
print("~~~~~~")