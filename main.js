import inquirer from "inquirer";
let op = await inquirer.prompt([
    {
        type: "input",
        name: "operator",
        message: "Enter any operator please: (+),(-),(*),(/)"
    }
]);
if(op.operator=="+"){
    let nums = await inquirer.prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter first number"
        },
        {
            type: "input",
            name: "num2",
            message: "Enter Second number"
        }
    ])
    if(isNaN(nums.num1)||isNaN(nums.num2)){
        console.log("Enter a valid number");
    }
    else{
    let int_num = parseInt(nums.num1)
    let int_num2 = parseInt(nums.num2)
    let result = int_num+int_num2;
    console.log(result);
    }
}
else if(op.operator=="-"){
    let nums = await inquirer.prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter first number"
        },
        {
            type: "input",
            name: "num2",
            message: "Enter Second number"
        }
    ])
    if(isNaN(nums.num1)||isNaN(nums.num2)){
        console.log("Enter a valid number");
    }
    else{
    let int_num = parseInt(nums.num1)
    let int_num2 = parseInt(nums.num2)
    let result = int_num - int_num2;
    console.log(result);
    }
}
else if(op.operator=="*"){
    let nums = await inquirer.prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter first number"
        },
        {
            type: "input",
            name: "num2",
            message: "Enter Second number"
        }
    ])
    if(isNaN(nums.num1)||isNaN(nums.num2)){
        console.log("Enter a valid number");
    }
    else{
    let int_num = parseInt(nums.num1)
    let int_num2 = parseInt(nums.num2)
    let result = int_num * int_num2;
    console.log(result);
    }
}
else if(op.operator=="/"){
    let nums = await inquirer.prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter first number"
        },
        {
            type: "input",
            name: "num2",
            message: "Enter Second number"
        }
    ])
    if(isNaN(nums.num1)||isNaN(nums.num2)){
        console.log("Enter a valid number");
    }
    else{
    let int_num = parseInt(nums.num1)
    let int_num2 = parseInt(nums.num2)
    let result = int_num / int_num2;
    console.log(result);
    }
}
