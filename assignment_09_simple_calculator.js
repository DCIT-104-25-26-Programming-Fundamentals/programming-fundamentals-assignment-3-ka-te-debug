// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// FUNCTION 1: Addition
function addition(a, b) {
    return a + b;
}

// FUNCTION 2: Subtraction
function subtraction(a, b) {
    return a - b;
}

// FUNCTION 3: Multiplication
function multiplication(a, b) {
    return a * b;
}

// FUNCTION 4: Division
function division(a, b) {
    if (b === 0) {
        return 'Error: Cannot divide by zero.';
    }
    return (a / b).toFixed(2);
}

// FUNCTION 5: Modulus
function modulus(a, b) {
    if (b === 0) {
        return 'Error: Cannot divide by zero.';
    }
    return a % b;
}

// FUNCTION 6: Exponentiation
function exponentiation(a, b) {
    return (a ** b).toFixed(2);
}

// FUNCTION 7: Display Menu
function displayMenu() {
    console.log('\n=======================');
    console.log('   SIMPLE CALCULATOR');
    console.log('=======================');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Modulus');
    console.log('6. Exponentiation');
    console.log('7. Quit');
}

// MAIN FUNCTION
function main() {
    let choice;
    
    do {
        displayMenu();
        choice = readlineSync.questionInt('Select an operation (1-7): ');
        
        if (choice >= 1 && choice <= 6) {
            let num1 = readlineSync.questionFloat('Enter first number: ');
            let num2 = readlineSync.questionFloat('Enter second number: ');
            let result;
            let operator;
            
            switch (choice) {
                case 1:
                    result = addition(num1, num2);
                    operator = '+';
                    break;
                case 2:
                    result = subtraction(num1, num2);
                    operator = '-';
                    break;
                case 3:
                    result = multiplication(num1, num2);
                    operator = '*';
                    break;
                case 4:
                    result = division(num1, num2);
                    operator = '/';
                    break;
                case 5:
                    result = modulus(num1, num2);
                    operator = '%';
                    break;
                case 6:
                    result = exponentiation(num1, num2);
                    operator = '**';
                    break;
            }
            
            // Only print result format if it's not an error message
            if (typeof result === 'string' && result.startsWith('Error')) {
                console.log(result);
            } else {
                console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
            }
        } else if (choice === 7) {
            console.log('Goodbye!');
        } else {
            console.log('Error: Invalid choice. Please enter 1-7.');
        }
    } while (choice!== 7);
}

main();
