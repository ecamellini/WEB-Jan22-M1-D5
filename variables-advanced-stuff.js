console.log("\n-------------VARIABLE SCOPE------------")

// Every variable is vibile:
// 1. In the block of code where it is DEFINED, AND
// 2. In all the sub-blocks

let variableInMainBlock = "Hello I am in the main code block!"
if (true) {
    console.log("\nInside the if...")
    let variableInIfBlock = "Hello I'm in the IF block!"
    console.log(variableInMainBlock)
    console.log(variableInIfBlock)
}
// When you exit a code block, like the one above
// ALL VARIABLES DEFINED INSIDE IT ARE DELETED, WE DON'T NEED THEM ANYMORE
// We say that these variables are de-scoped, they are not in scope anymore

console.log("\nAfter the if...")
console.log(variableInMainBlock)
// IF YOU UNCOMMENT THE FOLLOWING LINE, THE PROGRAM ERRORS OUT
// console.log(variableInIfBlock) // This variable here does not exist

console.log("\n-------------CONSTANTS------------")

const thisWillNeverChange = "Hello!!! I am a constant"

console.log(thisWillNeverChange)

// IF YOU UNCOMMENT THE FOLLOWING LINE, THE PROGRAM ERRORS OUT
// thisWillNeverChange = "Another value" // Constants cannot be re-assigned

// When to use them?
// When you want to define a constant, a math constant, const PI = 3.14
// Or, in general, if you know some data won't change, use const
// It's more performant

// Be careful with objects....

const object = { // What is constant here? The reference to the object, the link to the object
    name: "John",
    lastName: "Doe"
}
console.log(object)

// IF YOU UNCOMMENT THE FOLLOWING LINE, THE PROGRAM ERRORS OUT
// object = {} // So you cannot re-assign the constant, to a new object

// BUT, you can modify the object properties, because the constant contains only the link to the object
object.lastName = "Brazorf" // You can also add other values
object.age = 33
console.log(object)

console.log("\n-------------VAR OR LET------------")

var myDearOldVariable = "Hello!"
// NEVER NEVER NEVER NEVER USE VAR
// USE LET
// VAR IS SOMETHING THAT WILL BREAK THE SCOPE OF YOU VARIABLES AND YOU WILL ENCOUNTER BUGS
// It is some legacy feature that should be removed, just like FOR-IN (different from FOR-OF)
// Because...JavaScript
