console.log("\n----------------BREAK & CONTINUE-----------")

let numbers = [1, 4, 78, 12, 45, 3, 234, 0, 4, 2, 523]

// We want to:
// 1. Go through all the numbers we receive
// 2. Print ONLY the even numbers
// 3. In case we see a 0, we stop

// Same thing as below...
// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i]
//     // DO SOMENTHING WITH ELEMENT
// }

for(number of numbers) {
    if (number === 0) {
        break; // IF you are in a loop, break exits, it stops the loop right here
    } else if ((number % 2) === 0) { // Modulo to check if it is even --> So if the remainder is equal to  0
        console.log(number)
    }
    // If you breaked, this line is not executed
}

console.log("\nAnother solution...")
for(number of numbers) {

    if ((number % 2) !== 0) { // Modulo to check if it is odd --> So if the remainde is different (not equal) from zero
        // I could have written: !((number % 2) === 0) ___ this is exactly the same condition, not ( euqal )
        continue // Stops the current iteration of the loop right here, goes to the next one
    }

    if (number === 0) {
        break
    }

    // If we reach this instruction it means that
    // 1. We did not continue
    // 2. We did not break
    // And so we have an even number to print
    console.log(number)
}
