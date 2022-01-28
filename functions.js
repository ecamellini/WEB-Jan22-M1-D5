// Functions are orders that you give to your program
// CONVENTION: Name them using verbs, using imperatives
const printHeader = function(nameOfChapter) {
    // In this way, we avoid copy-pasting always the same code to write headers...
    // And we can change all headers at once
    // DRY: Don't  repeat yourself -- copy pasting is a bad smell, use functions
    console.log(`\n=========[[[${nameOfChapter}]]]=========`)
    // SAME THING AS DOING THIS: console.log("\n===========" + nameOfChapter + "===========")
}



printHeader("DEFININIG AND CALLING FUNCTIONS")

// There are many ways to do it....
const sayHello = function() { // No parameters
    console.log("Hello!")
}

sayHello()
sayHello()
sayHello()

const sayHelloTo = function(name) {
    // Parameters are just like variables that exist in the scope of the function code block
    // We just don't need to use let
    console.log(`Hello ${name}!`) // The same as doing "Hello" + name
}

sayHelloTo("Eric") // Argument is "Eric", a value
sayHelloTo("Paul") // Argument is "Paul", a value
sayHelloTo("John")

printHeader("RETURN VALUES")

function sum3(a, b, c) {
    let resultOfTheSum = a + b + c
    return resultOfTheSum
}

let result = sum3(2, 3, 6)
console.log(result)

let result2 = sum3(11, 3, 7)
console.log(result2)

// KEY POINT:
// RETURNING A VALUE, AND PRINTING SOMETHING TO THE CONSOLE, ARE TWO DIFFERENT THINGS
// For example, sayHello was not returning any value
let resultOfSayHello = sayHello()
console.log(resultOfSayHello) // this will be undefined

console.log(sum3(11, 2)) // The last parametes is undefined, and we try to sum 11 + 2 + undefined ---> retuls will be NaN

// Let's fix it
const betterSum3 = function(first, second, third) {
    if ((first === undefined) || (second === undefined) || (third === undefined)) {
        console.log("ERROR: Missing one or more parameters.")
        // Here we have no return, so it will return undefined
    } else {
        let r = first + second + third
        return r
    }
}

let resultOfBetterSum = betterSum3(34, 23, 44)
console.log(resultOfBetterSum)
