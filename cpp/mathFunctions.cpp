#include <iostream>

using namespace std;

// Function to add two numbers
int add(int a, int b) {
    return a + b;
}

// Function to subtract two numbers
int subtract(int a, int b) {
    return a - b;
}

// Function to multiply two numbers
int multiply(int a, int b) {
    return a * b;
}

// Function to divide two numbers
int divide(int a, int b) {
    return a / b;
}

// Function to find remainder of two numbers
int remainder(int a, int b) {
    return a % b;
}

// Function to find power of a number
int power(int a, int b) {
    int result = 1;
    for (int i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

// Function to find square root of a number
int squareRoot(int a) {
    int result = 1;
    while (result * result <= a) {
        result++;
    }
    return result - 1;
}

// Function to absolute value of a number
int absolute(int a) {
    if (a < 0) {
        return -a;
    }
    return a;
}

// Function to calculate hypotenuse of a right angled triangle
int hypotenuse(int a, int b) {
    return squareRoot(a * a + b * b);
}

// Main function
int main() {
    // decalre two numbers in the same line
    int a, b;

    // capture first number
    cout << "Enter first number: ";
    cin >> a;

    // capture second number
    cout << "Enter second number: ";
    cin >> b;

    // Add two numbers
    cout << "Sum of " << a << " and " << b << " is " << add(a, b) << endl; // a+b = a - (-b)

    // Subtract two numbers
    cout << "Difference of " << a << " and " << b << " is " << subtract(a, b) << endl; // a-b = a + (-b)

    // Multiply two numbers
    cout << "Product of " << a << " and " << b << " is " << multiply(a, b) << endl; // a*b = a + a + a + ... + a (b times)

    // Divide two numbers
    cout << "Quotient of " << a << " and " << b << " is " << divide(a, b) << endl; // a/b = a - (a%b)

    // Find remainder of two numbers
    cout << "Remainder of " << a << " and " << b << " is " << remainder(a, b) << endl; // a%b = a - (a/b)*b

    // Find power of a number
    cout << "Power of " << a << " to " << b << " is " << power(a, b) << endl; // a^b = a*a*a*...*a (b times)

    // Find square root of a number
    cout << "Square root of " << a << " is " << squareRoot(a) << endl; // sqrt(a) = a - (a%1)*1

    // Find absolute value of a number
    cout << "Absolute value of " << a << " is " << absolute(a) << endl; // |a| = a - (-a)

    // Find hypotenuse of a right angled triangle
    cout << "Hypotenuse of a right angled triangle with sides " << a << " and " << b << " is " << hypotenuse(a, b) << endl; // sqrt(a^2 + b^2)

    return 0;
}