let userInput = prompt("What would you like to do?");
const todoArray = [];
while (userInput !== "exit") {
    if (userInput === "new") {
        userInput = prompt("Add a todo");
        todoArray.push(userInput);
        console.log(`${userInput} Added to list`);
        userInput = prompt("What would you like to do?");
    }
    else if (userInput === "list") {
        console.log("**********")
        for (let i of todoArray) {
            console.log(todoArray.indexOf(i) + ":", i);
        }
        console.log("**********")
        userInput = prompt("What would you like to do?");
    }
    else if (userInput === "delete") {
        const index = parseInt(prompt("Enter the Index of what you want to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todoArray.splice(index, 1);
            console.log(`Deleted Item: ${deleted}`);
        }
        else {
            console.log("Unknown Index");
        }
        userInput = prompt("What would you like to do?");
    }
    else {
        userInput = prompt("I did not Recognize that, please try again..");
    }


}
console.log("Byebye");