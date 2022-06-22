const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
for(const country of countries){
  country.indexOf(2)
//   console.log(countries)
}
console.log(countries)

for (const contr of countries) {
    console.log(contr[0])
  }

  
  let newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

let newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].length)
}
console.log(newArr)