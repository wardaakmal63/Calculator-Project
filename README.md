# Calculator Project

This project is a simple command-line calculator built using Node.js. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- **Interactive CLI:** Uses the `inquirer` package to provide an interactive command-line interface for users to choose operations and input numbers.
- **Colorful Output:** Utilizes `chalk` for colorful text output and `chalk-animation` for animated text effects.
- **Multiple Operations:** Supports addition, subtraction, multiplication, and division.
- **Looping:** After each calculation, users can choose to continue performing more operations.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/wardaakmal63/calculator-project.git
    cd calculator-project
    ```

2. **Install dependencies:**

    Make sure you have Node.js installed. Then, run:

    ```bash
    npm install
    ```

## Usage

To start the calculator, run the following command in your terminal:


###### index.js
```bash
Example Usage
When you start the program, it will display a welcome message with a colorful animation.


lets start CALCULATION!
 _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|

The program will then ask you to choose an operation:


Which operation do you want to perform?
> Addition
  Subtraction
  Multiplication
  Division

Enter the numbers when prompted:


Enter number 1: 10
Enter number 2: 5
The result of the operation will be displayed:


10 + 5 = 15
The program will ask if you want to perform another calculation:


Do you want to continue? Press y or n:
If you choose y, the process repeats. If you choose n, the program exits.
```



###### index.js
#### This is the main entry point of the application. It:

Displays a welcome animation using chalk-animation.<br>
Prompts the user for the arithmetic operation and numbers.<br>
Performs the calculation and displays the result using chalk for colored output.<br>
Asks the user if they want to perform another calculation, looping until they choose to exit.<br>
### Libraries Used
1. **inquirer**: For prompting the user in the command-line interface.<br>
2. **chalk**: For styling the output with colors.<br>
3. **chalk-animation**: For adding animated text effects to the output.<br>




