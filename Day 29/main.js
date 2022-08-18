const font_family = ['Raleway Dots', 'aldrich', 'Montserrat', 'Nunito', 'Oswald', 'lato', 'Raleway', 'Roboto', 'ubuntu']

const container = document.querySelector('.container')

console.log(container)

const challenge = '30 days Of JavaScript Challenge 2020 asabeneh yetayeh'.split("")

// const challenge = ['30', 'days', 'Of', 'JavaScript', 'Challenge', '2020', 'asabeneh', 'yetayeh']

console.log(challenge)

const randomGenerator = () => {
const str = [1,2,3,4,5,6,7,8,9,0,'a','b', 'c','d','e', 'f'] 
let hex = ''
for (let i = 0; i < 6; i++) {    
let index = Math.floor(Math.random() * str.length)
hex += str[index]
}
return '#' + hex
}


container.innerHTML = challenge.map((value) => 
value===' '? `<span>&nbsp;</span>` :
`<span>${value}</span>
`).join('')

const span = document.querySelectorAll('span')
console.log(span)

span.forEach( letter => 
 {setInterval(()=>{

    letter.style.color = randomGenerator()
}, 4000)} )


let count = 0

setInterval( () => {
container.style.background = randomGenerator();
container.style.fontFamily = font_family[count]
count >= (font_family.length) - 1 ? count = 0 : 
count++

}, 4000 )