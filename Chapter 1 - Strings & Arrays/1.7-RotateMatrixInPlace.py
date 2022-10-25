# Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degress
# Rotate it in place

def rotate(matrix):
    left, right = 0, len(matrix) - 1

    while left < right:
        for i in range(right - left):
            top, bottom = left, right

            top_left = matrix[top][left + i]

            # move the bottom left value to the top left
            matrix[top][left + i] = matrix[bottom - i][left]

            # move the bottom right value to the bottom left
            matrix[bottom - i][left] = matrix[bottom][right - i]

            # move the top right value to the bottom right
            matrix[bottom][right - i] = matrix[top + i][right]

            # move the top_left value to the top right
            matrix[top + i][right] = top_left
        
        right -= 1
        left += 1

B = [[1, 2, 3, 4, 5], 
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]]

print("Original matrix:")
for item in B:
    print(item)

rotate(B)

print("Rotated matrix:")
for item in B:
    print(item)