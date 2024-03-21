#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operator to perform opteration",
        type: "list",
        name: "operator",
        choices: ["add", "sub", "multiply", "divide"]
    }
]);
if (answer.operator === "add") {
    console.log(chalk.yellow("Your required value is "), chalk.green.bold(answer.firstnumber + answer.secondnumber));
}
else if (answer.operator === "sub") {
    console.log(chalk.yellow("Your required value is "), chalk.red.bold(answer.firstnumber - answer.secondnumber));
}
else if (answer.operator === "multiply") {
    console.log(chalk.yellow("Your required value is "), chalk.blue.bold(answer.firstnumber * answer.secondnumber));
}
else if (answer.operator === "divide") {
    console.log(chalk.yellow("Your required value is "), chalk.yellow.bold(answer.firstnumber / answer.secondnumber));
}
else {
    console.log(chalk.red("you type invalid operator"));
}
