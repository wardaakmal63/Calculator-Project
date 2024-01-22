#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon(`lets start CALCULATION!`); //start
    await sleep();
    rainbowTitle.stop(); // stop after 2 sec
    console.log(chalk.blue(`
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
    |_____________________|`));
}
await welcome();
async function askQuestion() {
    const answers = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: chalk.red("Which operation do you want to perform?\n"),
            choices: ["Adittion", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2:",
        },
    ]);
    if (answers.operator == "Adittion") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Subttraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}
;
//askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: chalk.red("Do you want to continue? Press y or n:"),
        });
    } while (again.restart == `y` || again.restart == `Y` || again.restart == `yes` || again.restart == `YES`);
}
;
startAgain();
