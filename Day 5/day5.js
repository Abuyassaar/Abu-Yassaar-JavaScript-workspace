let emptyArray = []
console.log(emptyArray)

let array = [1, 2, 3, 4, 5]
console.log(array)
console.log(array.length)
console.log(array.indexOf(1))
console.log(array.indexOf(3))
console.log(array.indexOf(5))

let mixedDataTypes = [
    'Abdulmajeed', 
    30, 
    'Abdulrasaq', 
    'Opeyemi',
    { country: 'Nigeira', city: 'Ilorin' },
    { skills: ['HTML', 'CSS', 'JS', 'Research', 'Writing'] }
]
console.log(mixedDataTypes.length)

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

let itcompanies = ['FACEBOOK', 'GOOGLE', 'MICROSOFT', 'APPLE', 'IBM', 'ORACLE', 'AMAZON']
console.log(itcompanies)

let itCompanie = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanie.join(', ') + ' are big IT companies.')

let itCompaniess = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let companiess = prompt('Enter Company name')
if (itCompanies == companiess){
    console.log(companiess)
} else {
    console.log('A ' + companiess + ' company is not found')
}

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(3,7))
console.log(itCompanies.slice(0,4))
console.log(itCompanies.slice(3,4))

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
itCompanies.shift()
console.log(itCompanies)

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
itCompanies.pop()
console.log(itCompanies)

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies.splice())

for (let i = 0; i < companies.length; i = i + 1) {
    if (companies[i].split('o').length -1 >=2){
        console.log(itCompanies[i])
    }
}

companies.splice(3, 1);
console.log(companies)

let text = ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(text)
console.log(text.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.push('Sugar')
console.log(shoppingCart)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.pop()
console.log(shoppingCart)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart[2] = 'Grean Tea'
console.log(shoppingCart)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let median = (20 + 25) / 2
console.log(median)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let average = (19 + 22 + 19 + 24 + 20 + 25 + 26 + 24 + 25 +24) / 10
console.log(average)

let age = [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
let range = 26 - 19
console.log(range)