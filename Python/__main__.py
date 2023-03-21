# function to add two variables
def add(a, b):
    return a + b

print("Using the add function to add 1 and 2: " + str(add(1, 2))) # 3

# function to subtract two variables
def subtract(a, b):
    return a - b

print("Using the subtract function to subtract 2 from 1: " + str(subtract(1, 2))) # -1

# function to multiply two variables
def multiply(a, b):
    return a * b

print("Using the multiply function to multiply 2 and 3: " + str(multiply(2, 3))) # 6

# function to divide two variables
def divide(a, b):
    return a / b

print("Using the divide function to divide 6 by 2: " + str(divide(6, 2))) # 3
print("Using the divide function to divide 6 by 4: " + str(divide(6, 4))) # 1.5
print("Using the divide function to divide 6 by 0: " + str(divide(6, 0))) # ZeroDivisionError: division by zero

# function to calculate the remainder of two variables
def remainder(a, b):
    return a % b

print("Using the remainder function to calculate the remainder of 6 divided by 4: " + str(remainder(6, 4))) # 2
print("Using the remainder function to calculate the remainder of 6 divided by 0: " + str(remainder(6, 0))) # ZeroDivisionError: integer division or modulo by zero

# function to calculate the power of two variables
def power(a, b):
    return a ** b

print("Using the power function to calculate 2 to the power of 3: " + str(power(2, 3))) # 8

# function to calculate the square root of a variable
def square_root(a):
    return a ** 0.5

print("Using the square_root function to calculate the square root of 9: " + str(square_root(9))) # 3
print("Using the square_root function to calculate the square root of -9: " + str(square_root(-9))) # ValueError: math domain error

# function to calculate the absolute value of a variable
def absolute_value(a):
    return abs(a)

print("Using the absolute_value function to calculate the absolute value of -9: " + str(absolute_value(-9))) # 9

# function to calculate the hypothenuse of a triangle
def hypothenuse(a, b):
    return (a ** 2 + b ** 2) ** 0.5

print("Using the hypothenuse function to calculate the hypothenuse of a triangle with sides 3 and 4: " + str(hypothenuse(3, 4))) # 5
