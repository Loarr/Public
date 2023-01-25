/* 
Node JS server side
Java compiled vs JavaScript scripting
Add dynamic behaviour, mobile app for multiple devices
typically learn this first but use TypeScript, JS will always run in TS but not the other way around
var allows variable to be redefined so don't use - let allows variable to be reassigned - const makes variable fixed
variables should always start with a letter and never contain spaces
logical operators && - and || - or ! - not (single & and | are bitwise comparisons)
`` used for template string syntax -- ${var} to insert value
array ["",""] - list in python - each element has an index
object {key:var, key:var,} dictionary 
can create an array of objects 
parameters vs arguments - parameters are when function defined, arguments are what you pass to a function
function functionName(parameter, parameter2){content; return object} 
loops -- for (start condition; terminating condition; increment){do stuff}
         while(start)
*/

console.log("Hello World!")

let age = 10
age = 20
console.log(age)

let division = (12/5)
console.log(division)

let mod = (20%20)
console.log(mod)

console.log(age, division, mod)

let string1 = "mixed ability"
let string2 = "Warning!"

console.log(string2 + ' You are in a ' + string1 + ' group.')
console.log(`${string2} You are in a ${string1} group.`)

let mixedArray = ["mark", 32]
console.log(mixedArray)

let person = {name:"Mark", age:32, gay:false}
let person2 = {name:"Matthew", age:12, gay:true}
let people = [person, person2]
console.log(people[1])

function adder(a,b){
    return a + b
}

// let x = parseInt(prompt("Insert a number", 10))
// let y = parseInt(prompt("Insert a second number", 20))

// console.log(adder(x,y))

let star = ''
for (let i = 0; i < 5; i++){
    star += '*'
    console.log(star)
}

let numbers = []
for(let i = 0; i<10; i++){
    numbers[i] = (i*10);
}
console.log(numbers)
for(let i = 0; i <= numbers.length; i++){
    console.log(numbers[i])
}