// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let text2 = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let salaries = text2.match(/\d+/g);
let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome)


// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
let text = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction"
let sortingPoint = text2.match(/\d+/g);
sortingPoint = sortingPoint.map((elements) => {
    return Number(elements)
})
const distBtwTwoPart = (arr) => {
    let distBtw = arr[arr.length - 1] - arr[0]
    return distBtw
}
console.log(distBtwTwoPart(sortingPoint));



// Write a pattern which identify if a string is a valid JavaScript variable
const pattern = /[F/f]irst[Nn]ame|[F/f]irst_[Nn]ame/
const isValidVariable = (str) => {
    console.log(pattern.test(str));
}
isValidVariable('first_name')
is_valid_variable('first-name')
is_valid_variable('1first_name')
is_valid_variable('firstname')


// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?