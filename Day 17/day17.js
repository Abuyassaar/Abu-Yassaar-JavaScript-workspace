// Exercises: Level 1
// Store you first name, last name, age, country, city in your browser localStorage.
let profile = {
    firstName: "Abdulmajeed",
    lastName: "Abdulrasaq",
    age: 30,
    country: "Nigeria",
    city: "Ilorin",
}

let txt = JSON.stringify(profile);
localStorage.setItem("user", "txt");


// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
let student = {
    firstName: "Abdulmajeed",
    lastName: "Abdulrasaq",
    age: 30,
    skills: ["html", "css", "javascript"],
    country: "Nigeria"
}

let txts = JSON.stringify(student)
localStorage.setItem("s1", "txts")


// Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
let personAccount = {
    firstName: "Abdulmajeed",
    lastName: "Abdulrasaq",
    income: 30000,
    skills: ["html", "css", "javascript"],
    country: "Nigeria"
}

let text = JSON.stringify(student)
localStorage.setItem("s1", "text")