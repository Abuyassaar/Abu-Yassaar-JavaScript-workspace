// create an empty set
const emptySet = new Set();

// Create a set containing 0 to 10 using loop
const newSet = new Set(){
    for (let i = 0; i <=10; i++)
    console.log(i)
}

// Remove an element from a set
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
companies.delete('Google')

// Clear a set
companies.clear()

// Create a set of 5 string elements from array
const courses = [
    'Law',
    'Medicine',
    'Accounting',
    'Pharmacy',
    'Agric',
  ]

// Create a map of countries and number of characters of a country
let countries = ["Nigeria", "U.S.A", "Germany", "England", "Italy"]
let countriesLength = new Set();
for (let i = 0; i < countries.length; i++){
        countriesLength.add(countries[i])
        countriesLength.add(countries[i].length);
}
console.log(countriesLength);

//   find a union b
let a = [1, 2, 3, 4, 5]
let b = [3,4,5,6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set (c)

//   find a intersection b
let a = [1, 2, 3, 4, 5]
let b = [3,4,5,6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has (num))


let C = new Set (c)

//   find a with b
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

// How many languages are there in the countries object file.
console.log(map.size)

// *** Use the countries data to find the 10 most spoken languages
