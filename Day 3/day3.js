let firstName = 'Abdulmajeed'
let lastName = 'Abdulrasaq'
let country = 'Nigeria'
let city = 'Ilorin'
let age = 30
let isMarried = true
let year = 2020
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year)

typeof '10' === 10

parselnt =('9.8' === 10)

console.log(10 > 5)
console.log(20 >= 10)
console.log('javascript'.length > 'java'.length)

console.log(10 < 5)
console.log(20 <= 10)
console.log('javascript'.length < 'java'.length)


console.log(4 > 3)
console. log(4 >= 3)
console. log(4 < 3)
console. log(4 <= 3)
console. log(4 == 4)
console. log(4 === 4)
console. log(4 != 4)
console. log(4 !== 4)
console. log(4 != '4')
console. log(4 == '4')
console. log(4 === '4')
console. log('phyton'.length > 'jargon'.length)

console. log(4 > 3 && 10 < 12)
console. log(4 > 3 && 10 > 12)
console. log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(false)

const now = new Date ()
let years = now.getFullYear()
let months = now.getMonth()
let dates = now.getDate()
let days = now.getDay()
let hour = now.getHours()
let minute = now.getMinutes()
let allSeconds = Date.now()
console.log(years, months, dates, days, hour, minute, allSeconds)

let base = prompt('Enter base')
let height = prompt ('Enter height')
const areaOfTriangle = 0.5 * 20 * 10
console.log(areaOfTriangle)

let sideA = parseInt(prompt('Enter side a'))
let sideB = parseInt(prompt('Enter side b'))
let sideC = parseInt(prompt('Enter side c'))
let perimet = sideA + sideB + sideC
console.log(perimet)

let length = 2
let width = 2
let rectangleArea = length * width 
let perimeter = 2 * (length + width)
let rectanglePerimeter = perimeter
console.log(rectanglePerimeter)

const radius = prompt('Enter radius')
const area = 3.14 * radius * radius
const circumference = 2 * 3.14 * radius
console.log(area, circumference)

let name = 'Abdulmajeed'
if (name.length > 7) {
  console.log('Your name is long.')
} else {
    console.log(console.log('Your name is short.')
)
}

let firstName = 'Abdulmajeed'
let lastName = 'Abdulrasaq'
if (firstName.length > lastName.length) {
  console.log('Your first name, ' + firstName + ' is longer than your family name, ' + lastName)
}

let myAge = 250
let yourAge = 25
if (myAge > yourAge) {
    console.log('I am ' + (myAge - yourAge) + ' years older than you.')
}

let year = prompt('Enter your birth year')
if (year >= 18) {
  console.log('You are ' + year + '. ' + 'You are old enough to drive')
} else {
    console.log(console.log('You are ' + year + '. ' + 'You will be allowed to drive after 3 years.')
)
}

let hours = prompt('Enter hours')
let rate = prompt('Enter rate per hour')
let weeklyEarning = hours * rate
console.log(weeklyEarning)

// let yearsLived = prompt('Enter number of years lived')
// let lifeSeconds = Date.now(yearsLived)
// console.log(lifeSeconds)

let yearsLived = prompt('Enter number of years lived')
let lifeSeconds = yearsLived * 31541000
console.log(lifeSeconds)

const now = new Date ()
const year = now.getFullYear()
const month = now.getMonth ()
const date = now.getDate ()
const hours = now.getHours ()
const minutes = now.getMinutes ()
console.log(`${year}-${month}-${date} ${hours}:${minutes}`)

const now = new Date ()
const year = now.getFullYear()
const month = now.getMonth ()
const date = now.getDate ()
const hours = now.getHours ()
const minutes = now.getMinutes ()
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)

const now = new Date ()
const year = now.getFullYear()
const month = now.getMonth ()
const date = now.getDate ()
const hours = now.getHours ()
const minutes = now.getMinutes ()
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)

const now = new Date ()
const year = now.getFullYear()
const month = now.getMonth ()
const date = now.getDate ()
const hours = now.getHours ()
const minutes = now.getMinutes ()
console.log(`${year}-0${month}-0${date} ${hours}:${minutes}`)