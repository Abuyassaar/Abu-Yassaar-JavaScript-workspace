let year = prompt('Enter your birth year')
if (year >= 18) {
  console.log('You are old enough to drive.')
} else {
    console.log('You are left with 3 years to drive.')
}


let myAge = 35
let yourAge = prompt('Enter your age')
if (myAge > yourAge) {
    console.log('You are ' + (myAge - yourAge) + ' years older than me.')
} else {
    console.log('I am ' + (yourAge - myAge) + ' years older than you.')
}


let a = 4
let b = 3
a > b
  ? console.log(a + ' is greater than ' + b)
  : console.log(a + ' is less than ' + b)


  let number = prompt('Enter a number')
if (number == 2) {
    console.log(number + ' is an even number')
} else if (number == 9) {
    console.log(number + ' is an odd number')
}


let grade = prompt('Enter score')
if (grade <50){
    console.log('F')
} else if (grade < 60 ){
    console.log('D')
} else if (grade < 70){
    console.log('C')
} else if (grade < 80){
    console.log('B')
} else if (grade >= 80 ){
    console.log('A')
}


let season = prompt('Enter season')
switch (season) {
  case 'September':
    console.log('Autumn.')
    break
case 'October':
    console.log('Autumn.')
    break
case 'November':
    console.log('Autumn.')
    break
case 'December':
    console.log('Winter.')
        break
case 'January':
    console.log('Winter.')
    break
  case 'February':
    console.log('Winter.')
        break
case 'March':
    console.log('Spring')
        break
          case 'April':
    console.log('Spring')
        break
          case 'May':
    console.log('Spring')
        break
          case 'June':
    console.log('Summer')
        break
        case 'July':
    console.log('Summer')
        break
        case 'August':
    console.log('Summer')
        break
    default:
    console.log('The input not a month')
}


let userDay = prompt('What day is today ?')
let day = userDay.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Monday is a working day.')
    break
  case 'tuesday':
    console.log('Tuesday  is a working day.')
    break
  case 'wednesday':
    console.log('Wednesday  is a working day.')
    break
  case 'thursday':
    console.log('Thursday  is a working day.')
    break
  case 'friday':
    console.log('Friday  is a working day.')
    break
  case 'saturday':
    console.log('Saturday is a weekend.')
    break
  case 'sunday':
    console.log('Sunday is a weekend.')
    break
  default:
    console.log('Not a week day.')
}


let monthInput = prompt('Enter month')
let month = monthInput.toLowerCase()
switch (month) {
  case 'september':
    console.log('September has 30 days.')
    break
case 'october':
    console.log('October has 31 days.')
    break
case 'november':
    console.log('November has 30 days.')
    break
case 'december':
    console.log('December has 31 days.')
        break
case 'january':
    console.log('Jamuary has 31 days.')
    break
  case 'february':
    console.log('February has 28 days.')
        break
case 'march':
    console.log('March has 31 days.')
        break
          case 'april':
    console.log('April has 30 days.')
        break
          case 'may':
    console.log('May has 31 days.')
        break
          case 'june':
    console.log('June has 30 days.')
        break
        case 'july':
    console.log('July has 31 days.')
        break
        case 'august':
    console.log('August has 31 days.')
        break
    default:
    console.log('The input not a month')
}