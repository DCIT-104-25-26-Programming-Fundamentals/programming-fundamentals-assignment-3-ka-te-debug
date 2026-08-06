// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
function readMatrix(name) {
    let rows = parseInt(readlineSync.question(`Enter number of rows for ${name}: `));
    let cols = parseInt(readlineSync.question(`Enter number of columns for ${name}: `));
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let rowInput = readlineSync.question(`Enter row ${i + 1} for ${name}: `);
        let row = rowInput.split(' ').map(Number);
        if (row.length !== cols) {
            console.log(`Error: Expected ${cols} values, but got ${row.length}. Please re-enter the row.`);
            i--;
            continue;
        }
        matrix.push(row);
    }
    return matrix;
}
    function displayMatrix(matrix, label) {
        console.log(label);
        for (let i = 0; i < matrix.length; i++) {
            let rowstr = '';
            for (let j = 0; j < matrix[i].length; j++) {
                rowstr += matrix[i][j] + ' ';
            }
            console.log(rowstr.trim());
        }
        console.log('');
    }
    function transposeMatrix(matrix) {
        let transposed = [];
            let rows = matrix.length;
            let cols = matrix[0].length;
            for (let j = 0; j < rows; j++) {
                transposed[j] = [];
                for (let i = 0; i < cols; i++) {
                    transposed[j] [i] = matrix[i][j];
                }
            }
            return transposed;
        }
        function addMatrices(matrixA, matrixB) {
            let rows = matrixA.length;
            let cols = matrixA[0].length;
            let sumMatrix = [];
            for (let i = 0; i < rows; i++) {
                sumMatrix[i] = [];
                for (let j = 0; j < cols; j++) {
                    sumMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
                }
            }
            return sumMatrix;
        }
        function multiplyMatrices(matrixA, matrixB) {
            let rowsA = matrixA.length;
            let colsA = matrixA[0].length;
            let rowsB = matrixB.length;
            let colsB = matrixB[0].length;
            let resultMatrix = [];
            for (let i = 0; i < rowsA; i++) {
                resultMatrix[i] = [];
                for (let j = 0; j < colsB; j++) {
                    resultMatrix[i][j] = 0;
                    for (let k = 0; k < colsA; k++) {
                        resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                    }
                }
            }
            return resultMatrix;
        }
        function main() {
            console.log('--- PART A: Transpose ====');
            let matrix = readMatrix('Matrix ');
            displayMatrix(matrix, 'Original Matrix ');
            let transposed = transposeMatrix(matrix);
            displayMatrix(transposed, 'Transposed Matrix ');
            console.log('--- PART B: Add Two Matrices ====');
            let matrixA = readMatrix('Matrix A ');
            let matrixB = readMatrix('Matrix B ');
            if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
                console.log('Error: Matrices must be of the same size for addition.');
            } else {
                let sumMatrix = addMatrices(matrixA, matrixB);
                displayMatrix(matrixA, "Matrix A: ");
                displayMatrix(matrixB, "Matrix B: ");
                displayMatrix(sumMatrix, "Sum Matrix: ");
            }
            console.log('--- PART C: Multiply Two Matrices ====');
            let matrixC = readMatrix('Matrix A ');
            let matrixD = readMatrix('Matrix B ');
            if (matrixC[0].length !== matrixD.length) {
                console.log('Error: Number of columns in Matrix A must equal number of rows in Matrix B for multiplication.');
            } else {
                let productMatrix = multiplyMatrices(matrixC, matrixD);
                displayMatrix(matrixC, "Matrix A: ");
                displayMatrix(matrixD, "Matrix B: ");
                displayMatrix(productMatrix, "Product A x B: ");
            }
        }
        main();
