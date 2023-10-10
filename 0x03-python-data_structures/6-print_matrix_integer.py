#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    for row in matrix:
        for i, num in enumerate(row):
            if i == len(row) - 1:
                # Print the last element of the row without a trailing space
                print("{:d}".format(num), end="")
            else:
                # Print the element with a trailing space
                print("{:d}".format(num), end=" ")
        print()  # Move to the next line after printing each row
