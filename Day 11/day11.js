const constants = [2.72, 3.14, 9.81, 37, 100]

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants


// Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries


// Destructure the rectangle object by its properties or keys.
let {
    width: w,
    heigh: h,
    area: a,
    perimeter: p
} = rectangle

// Iterate through the users array and get all the keys of the object using destructuring
for (const {name, scores, skills, age} of users){
    console.log(name, scores, skills, age)
  }


// Find the persons who have less than two skills
for (const {
    name,
    scores,
    skills,
    age
} of users) {
if (skills.length < 2) {
    console.log(name, scores, skills, age)
}
}

// Destructure the countries object print name, capital, population and languages of all countries
let countries = [{
    name: "nigeria",
    capital: "fct",
    population: "7billion",
    languages: ["hausa", "igbo", "yoruba"]
},
{
    name: "germany",
    capital: "munich",
    population: "5billion",
    languages: ["german"]
}, {
    name: "italy",
    capital: "rome",
    population: "6billion",
    languages: ["italian", "latin"]
},
{
    name: "france",
    capital: "paris",
    population: "6billion",
    languages: ["french"]
}
]

let [name, capital, population, languages] = countries;


// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

for (const [names, skills, jsScore, reactScore] of student)
console.log(names, skills, jsScore, reactScore)

// or 

let [name, skills, scores, javaScriptScores, reactScores] = student;



// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'],
        [98, 85, 90, 95]
    ],
    ['John', ['HTM', 'CSS', 'JS', 'React'],
        [85, 80, 85, 80]
    ]
]

const convertArrayToObject = (arr) => {
    let { name, skills, scores } = arr;
    
}

/*Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets */
    const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }