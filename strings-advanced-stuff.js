console.log("\n----------STRINGS ARE ARRAYS--------")

let helloStrivers = "Hello Strivers, I am actually an array" // Array of characters

console.log(helloStrivers)
console.log(`The fourth character of the string`, helloStrivers[3])

// Let's print the string vertically
// console.log(helloStrivers[0])
// console.log(helloStrivers[1])
// console.log(helloStrivers[3])
// etc.

for (let i = 0; i < helloStrivers.length; i++) {
    console.log(helloStrivers[i])
}

// Syntactic sugar, the FOR-OF...it works, it's just an array
for (char of helloStrivers) {
    console.log(char)
}


console.log("\n----------STRINGS MANIPUALTION FUNCTIONS--------")

// Print the string all in UPPERCASE
console.log(helloStrivers.toUpperCase())

// Print the string all in LOWERCASE
console.log(helloStrivers.toLowerCase())

console.log("\n----------FINDING A SUBSTRING--------")

let indexOfStrivers = helloStrivers.indexOf('Strivers')
console.log("The first char of the substring Strivers is", indexOfStrivers)

console.log("\n----------EXTRACTING A SUBSTRING---------")
let strivers = helloStrivers.slice(
    indexOfStrivers,
    indexOfStrivers + 8
)
console.log("We extracted the string", strivers)

console.log("\n----------SPLITTING AND JOINING---------")

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let words = text.split(" ")
console.log(words)

// Let's join them back
let newText = words.join('-')
console.log(newText)

