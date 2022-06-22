for (let i = 0; i <=10; i++){
    console.log(i)
}

let i = 0 
    while (i <=10) {
    console.log(i)
        i++
    }

    let i = 0 
    do { 
        console.log(i)
        i++
    }
    while (i <= 5)


    for (let i = 10; i >=0; i--){
        console.log(i)
    }

    let i = 10 
    while (i >=0) {
    console.log(i)
        i--
    }

    let i = 10 
    while (i >=0) {
    console.log(i)
        i--
    }

    let x = ''
    for (let i = 0; i <= 7; i++){
    console.log(x += '#')
}

    for(let i = 0; i <= 10; i++){
        console.log(`${i} * ${i} = ${i * i}`)
      }

      for (let i = 1; i <=100; i += 2){
        console.log(i)
    }

    for (let i = 2; i <=100; i += 1){
        console.log(i)
    }

    for (var i = 2; i <=100; i += 1){
        for (var j = 2; j < i; j++) {
        if (i % j == 0){
            break;
        }
        }
            if (i == j) {
                console.log(i)
            }
        }


let numbers = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
for (let num of numbers) {
  sum += num  
    }
console.log(sum)

let app = ['MongoDB', 'Express', 'React', 'Node']
for (const a of app) {
  console.log(a[0])
}