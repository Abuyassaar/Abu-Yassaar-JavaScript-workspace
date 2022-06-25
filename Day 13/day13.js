// Level 1
// Display the countries array as a table
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)


// Display the countries object as a table
let countries = [{
        named: "nigeria",
        capital: "fct",
        population: "7billion",
        languages: ["hausa", "igbo", "yoruba"]
    },
    {
        named: "germany",
        capital: "munich",
        population: "5billion",
        languages: ["german"]
    }, {
        named: "italy",
        capital: "rome",
        population: "6billion",
        languages: ["italian", "latin"]
    },
    {
        named: "france",
        capital: "paris",
        population: "6billion",
        languages: ["french"]
    }
]
console.table(countries)

// Use console.group() to group logs
console.group('Names')
console.log(named)
console.groupEnd()

console.group('Capital')
console.log(capital)
console.groupEnd()

console.group('Population')
console.log(population)
console.log(countries)
console.groupEnd()

// Level 2
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "incorrect")

// Write a warning message using console.warn()
console.warn("i'm warning you")


// Write an error message using console.error()
console.error('This is an error')


// Level 3
// Check the speed difference among the following loops: while, for, for of, forEach
const food = ["beans", "rice", "plantain", "egg"]

//while
console.time("while loop")
let i = 0
while (i < food.length) {
    console.log(food[i])
    i++
}
console.timeEnd("while loop")


//for
console.time('Regular for loop')
for (let i = 0; i < food.length; i++) {
    console.log(food[i])
}
console.timeEnd('Regular for loop')


//for of
console.time("for of")
for (const meal of food) {
    console.log(meal)
}
console.timeEnd("for of")


//forEach
console.time("forEach")
food.forEach(meal => console.log(meal))
console.timeEnd("forEach")