// let a = 5, b = 4;
//     console.log(a)
//     console.log(b)
//     let sum = a + b
//     console.log(sum)



    // const
    // const n = 10
    // console.log(n)
    // let a = n
    // console.log(a)
    // n = 120 // error
// task 1
    // let r = 5
    // const PI = 3.14

    // let S = PI * r * r
    // console.log(S)
    // ler P = 
    

    // типи данних

// let a = 10
// let b = 34.245
// typeof b
// typeof a
// console.log(typeof a)
// console.log(typeof b)

// string

// let login = "user1"

// console.log(typeof login)



// boolean (true,false)

// let b = true
// console.log(typeof b)


// underfined

// let a
// console.log(typeof a)


// Оператор, Операція, Операнд

// let a = 3, b = 1
// let res = a - b

//в залежності від кількості операндів оператори поділяються на 1 :
// унарні ( +, -, ++, --)
// бінарні ( +, -, /, *, =, ==, !=, >, <, %)
// тернарний 

// let a = 5
// let b = -a

// console.log(a)
// console.log(b)


// ++ інкремент (збільшує на одиницю)
// -- декремент (зменшує на одиницю)

// мають 2 форми:
// префіксна форма
// постфіксна

// let a = 3
// a++
// console.log(a)

// let a = 4
// console.log(a)


// ділення по модулю (оператор обчислення залишку від цілочисельного ділення)

// let a = 5
// let b = a % 2
// console.log(b)


// let num = 34
// let a , b

// a = Math.trunc(num / 10)
// b = num % 10

// console.log(a)
// console.log(b)


// let num = 456

// let a, b, c

// a = Math.trunc(num / 100)
// console.log(a)

// b = Math.trunc(num / 10) % 10
// console.log(b)



// c = num % 10
// console.log(c)

// let num = 1234
// a = Math.trunc(num / 1000) % 100

// console.log(a)

// b = Math.trunc(num / 100) % 10
// console.log(b)

// c = Math.trunc(num / 10) % 10
// console.log(c)

// d = num % 10
// console.log(d)


// let s = 150
// const min = 60

// let clock = s / min
// d = Math.trunc(clock)
// console.log("min:", d)

// let sek = s % min
// console.log("sek:", sek)


// alert("Hello")




// let firstName = prompt("Введіть своє імя")

// alert(firstName)


// let num1 = +prompt('Enter number1:')
// let num2 = +prompt('Enter number2:')

// let sum = num1 + num2

// alert(sum)
// let s = 150
// const min = 60
// let clock = s / min
//  d = Math.trunc(clock)
// //  console.log("min:", d)

//  let sek = s % min
// //  console.log("sek:", sek)

//  d = +prompt('Enter min:')

//  sek = +prompt('Enter sek:')

// alert(sum)


// let s = 150
// const min = 60

// let clock = s / min
//  d = Math.trunc(clock)
// alert("min:", +d)

//  let sek = s % min
//  alert("sek:", +sek)


// let s = +prompt("Enter number: ")
// const secInMin = 60
// let min = Math.trunc(s / secInMin)
// let sec = s % secInMin
// // alert("Min: " + min + ", Sec: " + sec);
// alert(`Min: ${min}, Sec: ${sec}`)


// ТЕРНАРНИЙ ОПЕРАТОР
// загальний синтаксис тернального оператора:
// умова ? дія1 : дія2

// let a = 5
// let b = 4

// a > b ? console.log(a) : console.log(b)


// let a = +prompt("Enter first number: ")
// let b = +prompt("Enter last number: ")
// let max = a > b ? a : b
// alert(max)


let a = 121, b = 200, c = 23, d = 68

let one = a > b ? a : b
let two = c > d ? c : d
let sum = one > two ? one : two

alert(sum)