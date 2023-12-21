import inquirer from "inquirer";

let op = await inquirer.prompt([
    {
        type: "input",
        name: "operator",
        message: "Enter any operator please: (+),(-),(*),(/)"
    }
]);
console.log(op);