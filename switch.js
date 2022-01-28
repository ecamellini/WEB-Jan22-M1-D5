
console.log("\n--------------SWITCH CASE------------")

// Mock value -- this should actually come from the user
// Maybe through a selector in the web app
let language = "EN" // IT, FR, ....

let greeting
if (language === "EN") {
    greeting = "Hello!"
} else if (language === "IT") {
    greeting = "Ciao!"
} else if (language === "FR") {
    greeting = "Salut!"
} else if (language === "ES") {
    greeting = "Hola!"
} else if (language === "PT") {
    greeting = "Olá!"
} else if (language === "DE") {
    greeting = "Hallo!"
} else {
    // We could have also just set "Hello!" as default initial value for the variable greeting
    greeting = "Hello!"
}

console.log(greeting)

// The conditions are all the same, we always check the same variable
// What changes is just the value!!!!!
// We have syntactic sugar for these cases 🍰🍰
switch (language) {
    case "EN": greeting = "Hello!"; break
    case "IT": greeting = "Ciao!"; break
    case "FR": greeting = "Salut!"; break
    case "ES": greeting = "Hola!"; break
    case "PT": greeting = "Olá!"; break
    case "DE": greeting = "Hallo!"; break
    default: greeting = "Hello!"; break
}

console.log(greeting)
