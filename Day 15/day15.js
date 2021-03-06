// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs
    }
    getfullInfo() {
        return `${this.name} is ${this.age} year(s) old ${this.color} in color`;
    }
    set removeLegs(leg) {
        this.legs -= leg
    }
    get getName() {
        return this.name;
    }
}


// Create a Dog and Cat child class from the Animal Class.
let dog = new Animal("jack", 4, "brown", 4);
let cat = new Animal("brie", 2, "white", 4);

console.log(dog.getfullInfo());
console.log(cat);


// Exercises Level 2
// Override the method you create in Animal class
class Pet extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender
    }

    get getGender() {
        return this.gender
    }
    getfullInfo() {
        return `${this.name} is ${this.age} year(s) old ${this.gender} ${this.color} in color`;
    }

}

let rabbit = new Pet("ross", 3, "snow-white", 4, "male")
console.log(rabbit.getfullInfo());

// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class.
class Statistics {
    constructor(arr) {
        this.arr = arr;
    }

    get length() {
        return this.arr.length;
    }

    count() {
        return this.length;
    }

    sum() {
        let sum = 0;
        this.arr.forEach((num) => {
            sum += num
        })
        return sum;
    }

    mean() {
        let sum = 0;
        this.arr.forEach((num) => {
            sum += num
        })
        return Math.ceil(sum / this.length)
    }

    min() {
        let minNum = this.arr[0]
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] < minNum) {
                minNum = this.arr[i]
            }
        }
        return minNum;
    }

    max() {
        let maxNum = this.arr[0]
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] > maxNum) {
                maxNum = this.arr[i]
            }
        }
        return maxNum
    }

    range() {
        return this.max() - this.min();
    }

    median() {
        let sorted = this.arr.sort()
        let index = sorted.length / 2
        index = Math.floor(index);
        return sorted[index];
    }

    mode() {
        return `working on it...`
    }

    variance() {
        let mean = this.mean()
        let variance = this.arr.map((num) => {
            return Math.pow(num - mean, 2) / this.length;
        })
        let newVariance = 0;
        variance.forEach(num => newVariance += num / this.length)
        return Math.ceil(newVariance / this.length);
    }

    standardDeviation() {
        return `working on it...`
    }

    frequencyDistribution() {
        return `working on it...`
    }


    describe() {
        return `
        Count: ${this.count()}\n
        Sum: ${this.sum()}\n 
        Min: ${this.min()}\n
        Max: ${this.max()}\n
        Range: ${this.range()}\n
        Mean: ${this.mean()}\n
        Median: ${this.median()}\n
        Mode: ${this.mode()}\n
        Variance: ${this.variance()}\n
        Standard Deviation: ${this.standardDeviation()}\n
        Frequency Distribution: ${this.frequencyDistribution()}`
    }
}

let numbers = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
console.log(numbers.describe())

// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [];
        this.expenses = [];
    }

    totalIncome() {
        let totalIncom = 0;
        this.incomes.forEach(income => totalIncom += income)
        return totalIncom
    }
    totalExpenses() {
        let totalExpenses = 0;
        this.expenses.forEach(expense => totalExpenses += expense)
        return totalExpenses;
    }

    accountInfo() {
        return `
        Full-Name: ${this.firstName} ${this.lastName}
        total-Income: ${this.totalIncome()}
        total-Expenses: ${this.totalExpenses()}
        `
    }

    set addIncome(amount) {
        this.incomes.push(amount)
    }

    set addExpenses(cost) {
        this.expenses.push(cost)
    }
}

let myAccount = new PersonAccount("Abdulmajeed", "Abdulrasaq")
