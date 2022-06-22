let challenge = '30 Days of JavaScript'
console.log(challenge)

let challenge = '30 Days of JavaScript'
console.log(challenge.length)

let challenge = '30 Days of JavaScript'
console.log(challenge.toUpperCase)

let challenge = '30 Days of JavaScript'
console.log(challenge.toLowerCase())

let challenge = '30 Days of JavaScript'
console.log(challenge.substr(2,21))

let challenge = '30 Days of JavaScript'
console.log(challenge.substring(0,2))

let challenge = '30 Days of JavaScript'
console.log(challenge.split(' '))

let challenge = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(challenge.split(','))

let challenge = '30 Days of JavaScript'
console.log(challenge.replace('JavaScript', 'Phyton'))

let challenge = '30 Days of JavaScript'
console.log(challenge.charAt(15))

let challenge = '30 Days of JavaScript'
console.log(challenge.charCodeAt('J'))

let challenge = '30 Days of JavaScript'
console.log(challenge.indexOf('a'))

let challenge = '30 Days of JavaScript'
console.log(challenge.lastIndexOf('a'))

let challenge = 'You cannot end a sentence with because because because is a conjunction'
console.log(challenge.indexOf('because'))

let challenge = 'You cannot end a sentence with because because because is a conjunction'
console.log(challenge.lastIndexOf('because'))

let challenge = 'You cannot end a sentence with because because because is a conjunction'
console.log(challenge.search('because'))

let challenge = ' 30 Days of JavaScript'
console.log(challenge.trim())

let challenge = '30 Days of JavaScript'
console.log(challenge.startsWith(30))

let challenge = '30 Days of JavaScript'
console.log(challenge.endsWith('Script'))

let challenge = '30 Days of JavaScript'
console.log(challenge.match('a'))

let challenge = '30 Days of'
console.log(challenge.concat(' JavaScript'))

let challenge = '30 Days of'
console.log(challenge.repeat(2))

console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

console.log(typeof 10)

let num = ['10']
let numbers = [10]
num = numbers
console.log(num == numbers)

let num = ['10']
let numbers = num
console.log(num == numbers)

let parseFloat = ('9.8')
let ten = 10
console.log(parseFloat == ten)

let parseFloat = ('9.8')
let ten = parseFloat
console.log(parseFloat == ten)

let name = 'phyton', 'jargon'
console.log(name.match('on'))

let name = 'I hope this course is not full of jargon'
console.log(name.match('jargon'))

let name = 'I hope this course is not full of jargon'
console.log(name.search('jargon'))

Math.floor(Math.random() * 101);

Math.floor(Math.random() * 51) + 50;

Math.floor(Math.random() * 256);


console.log('JavaScript'[3])

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

let slice = 'You cannot end a sentence with because because because is a conjunction'
console.log(slice.substr(30, 25))

let txt = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(txt.length)

let txt = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(txt.match(\love\gi))

let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.match(\because\gi))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let clean = /[a-z0-9]/gi;
let result = sentence.match(clean);
console.log(result)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let clean = /[^a-z^0-9]/gi;
let result = sentence.match(clean);
console.log(clean)

console.log(sentence.replace(/[]/g, ''))

let a = 5000
let b = 10000
let c = 15000

console.log(a + b + c)