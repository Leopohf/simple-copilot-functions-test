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
    cout << "Sum of " << a << " and " << b << " is " << add(a, b) << endl;

    // Subtract two numbers
    cout << "Difference of " << a << " and " << b << " is " << subtract(a, b) << endl;

    return 0;
}