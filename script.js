// // 1. তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে ক্যাশব্যাক 500 টাকা। 
// //    আর তার কম কেনাকাটা করলে ক্যাশব্যাক 0 টাকা। এখন এই জিনিসটা এক লাইনে লিখ। 
// //    ভেরিয়েবলের নাম হবে cashback, আর মান সেট করবি টার্নারি অপারেটর ইউজ করে।

// let sales = 3400
// let cashback = sales < 3000 ? 0 : 500

// console.log(cashback)

// let age = 26
// console.log(age < 18 ? "Teenager" : "Adult")

// let isLoggedIn = false
// console.log(!isLoggedIn ? "Welcome Back" : "Please Log in")

// let tankFull = false
// console.log(tankFull ? "Ready for a long drive." : "Fill the tank")

// let jinish = ['pc', 'khata', 'kolom', 'bag', 'chabi']
// console.log(jinish)

// jinish.push("earphone")
// console.log(jinish)

// jinish.pop()
// console.log(jinish)

// jinish.shift()
// console.log(jinish)

// jinish.unshift("guitar")
// console.log(jinish)

// const exist = jinish.includes("chabi")
// console.log(exist ? "okay" : jinish.push("chabi"))
// console.log(jinish)

// তুই একটা প্রোগ্রাম বানাতে চাস, যেটাতে 'আম' নামক একটা ফল লিস্টে আছে 
// কি না, সেটা চেক করবে। যদি থাকে, তবে আউটপুটে বলবে, 'আম আছে', 
// আর না থাকলে বলবে, 'আম নেই, গাছে উঠ'। 
// ফলের অ্যারেতে 'আপেল', 'কলা', 'আম' ও 'লিচু' আছে।

// let fruits = ['আপেল', 'কলা', 'আম', 'লিচু']
// console.log(fruits.includes('জাম্বুরা') ? "আছে" : "নেই, গাছে উঠে পেড়ে আন")
// console.log(fruits.indexOf('আম'))
// fruits.push('জাম্বুরা')
// console.log(fruits)

// for (const fruit of fruits) {
//     console.log(fruit)
// }

// let num = 0;
// while (num < 5) {
// console.log("Bamboo Eating High School");
// num++;
// }

// let i = 1
// // while (i <= 10){
// //     console.log('আমি প্রতিদিন মিনিমাম ৩ ঘণ্টা প্রোগ্রামিং প্র্যাক্টিস করবো।')
// //     i++
// // }

// while (i <= 20) {
//     console.log(i)
//     i++
// }

// let i = 1
// while (i = 10) {
//     console.log(`3 * ${i} = ${3 * i}`)
//     i++
// }

// let num = 111
// while (num >= 110) {
//     console.log(num / 2)
//     num--
// }

// let sum = 0
// let num = 1
// while ( num <= 10) {
//     sum = sum + num
//     num++
// }
// console.log(`Sum = ${sum}`)

// let num = 20
// let sum = 0
// while (num <= 40) {
//     sum = sum + num
//     num++
// }
// console.log(sum)

// let sum = 0
// for (let num = 25 ; num <= 75 ; num++) {
//     console.log(`${sum} + ${num} = ${sum + num}`)
//     sum = sum + num
// }

// for (let num = 20 ; num <= 50 ; num++){
//     if (num % 7 == 0) {
//         console.log(num)
//     }
// }

// for (let num = 400 ; num <= 800 ; num++){
//     if (num % 5 == 0 && num % 7 == 0) {
//         console.log(num)
//     }
// }

// let sum = 0
// for (let num = 1 ; num <= 50 ; num ++){
//     if (num % 3 == 0 && num % 4 == 0) {
//     console.log(num)
//     console.log(`${num} + ${sum} = ${sum + num}`)
//     sum = sum + num
//     }
// }

// for (let i = 1 ; i <= 30 ; i++){
//     if (i > 15){
//         break
//     }
//     console.log(i)
// }

// for (let i = 1 ; i <= 40 ; i++) {
//     if ( i % 7 == 0) {
//         continue
//     }
//     console.log(i)
// }

// for (let i = 1 ; i <= 20 ; i++) {
//     if ( i == 12) {
//         continue
//     }
//     console.log(i)
// }

// for (let i = 91 ; i <= 120 ; i++) {
//     if ( i % 10 == 0) {
//         break
//     }
//     console.log(i)
// }

// let family = {
//     father : {
//         name : "Shamiran Kanti Paul",
//         age : 54,
//         occupation : "Journalism",
//         sayHello : function(){
//             console.log(`Hello. I am ${this.name}`)
//         }
//     },
//     mother : {
//         name : "Lucky Paul",
//         age : 46,
//         occupation : "Beautician",
//         sayHello : function(){
//             console.log(`Hello. I am ${this.name}`)
//         }
//     },
// }

// console.log(family.mother.age + family.father.age)
// family.father.sayHello()
// family.mother.sayHello()

// let college = {
//     name : 'NDC',
//     established : 1949,
//     groups : ['science', 'arts', 'commerce']
// }

// console.log(college.groups[1])
// let keyObj = Object.keys(college)
// let valueObj = Object.values(college)

// console.log(keyObj)
// console.log(valueObj)
// console.log(Object.keys(college).includes('name'))
// console.log(college.hasOwnProperty('email'))  // Shortcut of includes

// college.hasOwnProperty('email') ?
// console.log('E-mail ache.') :
// console.log('E-mail nai.')

// const phone = {
//     brand : 'Samsung',
//     model : 'Galaxy S21',
//     price : 85000
// }
// //          for of loop ARRAY (এরে) বানিয়ে সেটার উপর কাজ করে

// let propertyKeys = Object.keys(phone)     // Array return করবে
// let propertyValues = Object.values(phone) // Array return করবে

// for (let property of propertyKeys) {
//     console.log(property)}
//     for (let property of propertyValues) {
//         console.log(property)
//     } 
// //          for in loop অবজেক্টের উপর কাজ করে

// for (let key in phone) {
//         let value = phone[key] // প্রত্যেকটা প্রোপার্টির ভ্যালু আলাদা করবে
//         console.log(key, value)
//     }

// const building = {
//     address : {
//         street : 'main road',
//         city : 'Dhaka'
//     },
//     floors : 10,
//     type : 'Commercial'
// }
// for (let key in building) {
//     console.log(key, building[key])
// }

// const books = {
//     book1 : 'Harry Potter',
//     book2 : 'The Hobbit',
//     book3 : 'Game of Thrones'
// }
// for (let key in books){
//     console.log('Book name: ' + books[key])
// }

// console.log(books.hasOwnProperty('book3'))

// const numbers = {
//     a : 10,
//     b : 20,
//     c : 30,
//     d : 40
// }
//          For of loop
// let values = Object.values(numbers)
// // console.log(values)
// let sum = 0
// for (let value of values) {
//     sum = sum + value
// }
// console.log(sum)
//          For in loop
// let sum = 0
// for (let key in numbers) {
//     sum = sum + numbers[key]
// }
// console.log('The answer is :', sum)

// freeze - কোন কিছু এড বা চেঞ্জ করতে পারবোনা
// seal - existing property modify করতে পারবো, কিন্তু কোন নতুন property add বা existing property delete করতে পারবোনা

// let headphone = {
//     brand : 'Sony',
//     price : 3000,
//     color : 'Red'
// }
// console.log(Object.entries(headphone))
// // Object.freeze(headphone)
// // Object.seal(headphone)
// headphone.brand = 'Canon'
// headphone.origin = 'Japan'
// console.log(headphone)

//                         Function

// function multiply(a, b) {
//     console.log(a * b)
//     return a * b
// }
// multiply(20 , 1455)

// function boyosh ( shaal, jonmoshal ) {
//     let boyosh = shaal - jonmoshal
//     console.log(`Tui ${boyosh} bochorer bura.`)
// }
// boyosh(2025, 1998)

// function lauErTaka(taka) {
//     let koytaLau = Math.floor(taka / 35)
//     console.log(`Tui ${koytaLau} ta lau kinte parbi.`)
// }
// lauErTaka(385)

// function trueFalse (a) {
//     if (a > 10) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(trueFalse(5))

// function posOrNeg(num){
//     if (num > 0){
//         return num * 2
//     } else {
//         return num * 3
//     }
// }
// console.log(posOrNeg(-25))

// function firstLetter(name){
//     return `${name} starts with ${name.charAt(0)}. `
// }
// console.log(firstLetter("Salauddin"))

// function jogFol(numbers) {
//     let sum = 0
//     for (let num of numbers){
//         sum = sum + num
//     }
//     return sum
// }
// let nums = [72, 28, 55, 19, 98]
// let summer = jogFol(nums)
// console.log(`Sum of ${nums} is : ${summer}.`)

// function evenJogFol(numbers) {
//     let sum = 0
//     for (let num of numbers){
//         if (num % 2 == 0){
//             sum = sum + num
//         }
//     }
//     return sum
// }
// let nums = [72, 28, 55, 19, 98]
// let summer = evenJogFol(nums)
// console.log(`Sum of even numbers is: ${summer}.`)

// function boyosh(age) {
//     if (age < 18){
//         return 18
//     } else if (age > 45) {
//         return 45
//     } else {
//         return age
//     }
// }
// let age = boyosh(20)
// console.log(age)

// function oddNumsSum(array){
//     let sum = 0
//     for (let num of array){
//         if (num % 2 !== 0) {
//             sum = sum + num
//         }
//     }
//     return sum
// }
// let array = [5, 15, 8 ,7]
// let oddSum = oddNumsSum(array)
// console.log(`Tor dewa bijor shongkha gulor jogfol ${oddSum}.`)

// function charDiyeBhag(nums) {
//     let sum = 0
//     for (let num of nums) {
//         if (num % 4 == 0) {
//             sum = sum + num
//         }
//     }
//     return sum
// }
// let arr = [2 , 4 , 5 , 7 , 8 , 32 , 45]
// let bhag = charDiyeBhag(arr)
// console.log(bhag)

//            // Mini Problem Solving //

// //                  // Height //
// function inchToFeet (inch) {
//     const feet = (inch / 12).toFixed(2)
//     return `Your height is ${feet} ft.`
// }
// let dipHeight = inchToFeet(71)
// console.log(dipHeight)

// function inchToFeet2 (inch) {
//     const feet = inch / 12
//     const feetNumber = parseInt(feet)
//     const inchFrac = inch % 12
//     return `Your height is ${feetNumber} ft. ${inchFrac} inch.`
// }
// console.log(inchToFeet2(71))

// //                // Leap Year //
// function leapYearCheck(year) {
//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
//         return `${year} is a leap year.` 
//     } else {
//         return `${year} is not a leap year.`
//     }
// }
// let year = leapYearCheck(2003)
// console.log(year)

//                   // Income Tax //
// function incomeTax(income){
//     if (income <= 50000){
//         return 10
//     } else if (income >= 50001 && income <= 100000){
//         return 20
//     } else if (income >= 100001 && income <= 200000){
//         return 30
//     } else if (income > 200000){
//         return 40
//     }
// }
// let tax = incomeTax(1250000)
// console.log(tax)

//                // Leap Year Counter //
// function leapCounter(array){
//     let count = 0
//     for (let year of years){
//         if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
//             count++
//         }
//     }
//     return `There are ${count} leap years here.`
// }
// let years = [2024, 2000, 2022, 1952 , 1866, 1977]
// console.log(leapCounter(years))

//              // Average of Odds //
// function oddAvg(array){
//     let odds = []
//     for (let num of array){
//         if (num % 2 !== 0){
//             odds.push(num)
//         }
//     }
//     console.log(odds)
//     if (odds.length === 0) {
//         return 0
//     }
    
//     let sum = 0
//     for (let num of odds){
//         sum = sum + num
//     }
//     let count = odds.length
//     const avg = sum / count
//     return avg
// }
// let nums = [12, 13, 65, 11, 24, 31]
// const avg = oddAvg(nums)
// console.log(`The average of odd numbers is ${avg}.`)

//              // Average of Evens //
// function evenAvg(array) {
//     let evens = []
//     for (let num of array){
//         if (num % 2 === 0){
//             evens.push(num)
//         }
//     }
//     if (evens.length === 0){
//         return `Even numbers not found.`
//     }
//     console.log('Even numbers found.')
//     console.log(evens)

//     let sum = 0
//     for (let num of evens){
//         sum += num
//     }
//     let count = evens.length
//     const avg = sum / count
//     return `The average of even numbers is ${avg}.`
// }

// let array1 = [24, 25, 26, 27, 28]
// let array2 = [23, 25, 27, 29]
// let avg = evenAvg(array2)
// console.log(avg)

// // double the odds //
// function doubleTheOdds (array){
//     let odds = []
//     let doubledOdds = []
//     for (let num of array){
//         num % 2 === 1 ? odds.push(num) : null
//     }
//     if (odds.length === 0){
//         return `Odd numbers not found.`
//     }
//     console.log('Odd numbers found.')
//     console.log(odds);
    
//     for (let num of odds){
//         let double = num * 2
//         doubledOdds.push(double)
//     }
//     return doubledOdds
// }

// let array1 = [24, 25, 26, 27, 28]
// let array2 = [20, 22, 24, 26]
// let dArray = doubleTheOdds(array1)
// console.log('Doubled array is', dArray)

//                 NO DUPLICATES //
// function noDuplicates(array){
//     let unique = []
//     for (let element of array){
//         unique.includes(element) === false ? 
//         unique.push(element) : null
//     }
//     return unique
// }
// let names = ['abul','babul','cabul','dabul','abul','gabul','babul','habul']
// let numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61]
// let unArray = noDuplicates(numbers)
// console.log(`The unique array is ${unArray}`)

// let a = 5
// let b = 7
// console.log(`a = ${a}, b = ${b}`)

// let temp = a
// a = b
// b = temp
// console.log(`a = ${a}, b = ${b}`)

//                // Default Parameter //

// function jogfol(a=0, b=0, c=0){
//     let sum = a + b + c
//     console.log(a, b, c)
//     console.log(sum)
//     return sum
// }
// jogfol()
// jogfol(2, 6, 5)

// function hishab(name = 'anonymous', deposit = 50) {
//     console.log(name, deposit)
// }
// hishab()
// hishab('Dip', 11000)

// function square(a=1){
//     const sqr = a * a
//     console.log(sqr)
//     return sqr
// }
// square()
// square(5)

// function books (book = ['JS Book']) {
//     console.log(book)
// }
// books()
// books(['Tin Goyenda', 'Masud Rana', 'Science Fictions of Jafor Iqbal'])

// function arrayDouble(array = [5,10,15]){
//     console.log(array)
//     let newArray = []
//     for (let element of array){
//         let double = element * 2
//         newArray.push(double)
//     }
//     console.log(newArray)
//     return newArray
// }
// let array = [26, 14, 97, 16, 20, 32]
// arrayDouble(array)

// function simpInt(object = {principal : 1000, rate : 5}){
//     const interest = object.principal * object.rate / 100
//     console.log(`Amount of simple interest is ${interest}.`)
//     return interest
// }
// let obj = {
//     principal : 10000,
//     rate : 7.2
// }
// simpInt()
// simpInt(obj)

//                     // Arrow Function //

// const amount = (object ={salary : 50000, tax : 10}) => {
//     const netAmount = object.salary - object.salary * object.tax / 100
//     console.log(`Initial salary is ${netAmount}.`)
//     return netAmount
// }
// amount()
// amount({salary : 72000, tax : 7})

// const firstIndexValue = array => console.log(array[1])
// let array1 = [10,20,30,40,50]
// let array2 = [23,6582,196,25494,2590,854]
// firstIndexValue(array1)
// firstIndexValue(array2)

// const multiplication =  (a, b, c) => a * b * c
// console.log(multiplication(2,3,4))
// console.log(multiplication(654,18,987 * Math.random()))

// const unknown = () => "unknown"
// console.log(unknown())

// const amount = (naam, pocketMoney) => {
//         return `${naam} has ${pocketMoney} taka in his pocket and division by 5 of it is ${pocketMoney / 5}.`
//     }
//     console.log(amount('Dip', 480))
    
// const addFirstnLast = array => {
//     let add = array[0] + array[array.length - 1]
//     console.log(add)
// }
// let array1 = [10,20,30,40,50]
// let array2 = [23,6582,196,25494,2590,854]
// addFirstnLast(array1)
// addFirstnLast(array2)

// const add2number = (a = 10, b = 5) => console.log(a + b)
// add2number()
// add2number(654,589)


//                 // Destructuring => Object //

//    Object destructuring এর মূল উদ্দেশ্য কী?
//    => কোড ছোট ও পড়তে সহজ করা। property আলাদা করতে বারবার details.name লিখতে হয় না।

//    যদি কোন property object-এ না থাকে, destructuring করলে কী হবে?
//    => ভ্যারিয়েবলের মান হবে undefined।


// const details = {
    //     name : 'Dip Paul',
    //     age  : 26,
    //     role : 'Full-Stack Web Developer'
    // }
    // const {name, age, role} = details // Object-এর property গুলো আলাদা ভ্যারিয়েবলে ভেঙে নেওয়া হচ্ছে।
    // console.log(name, age, role)
    // // property name change
    // const {name : naam, age : boyosh, role : bhumika} = details // property গুলোকে alias নামে নতুন ভ্যারিয়েবল বানানো হচ্ছে।
    // console.log(naam, boyosh, bhumika)
    
    //    Property না থাকলে default value কিভাবে সেট করবেন?
    //    => const {country = 'Bangladesh'} = details
    //    Alias + Default value একসাথে কিভাবে দিবেন?
    //    => const {role: bhumika = "Developer"} = details;

//                 // Destructuring => Array //
// const numbers = [10 , 20 , 30 , 40 , 50]
// const [a,b,c,d,e] = numbers // Array-এর প্রতিটি element আলাদা ভ্যারিয়েবলে রাখা হচ্ছে।
// console.log(e)

//           // Destructuring => from Function Return //
// const doubleThem = (a, b) => [a * 2, b * 2]
// const [x, y] = doubleThem(25, 12)
// console.log(doubleThem(26,13));
// console.log(x)
// console.log(y)

//        // Destructuring => in Function Parameter (Object) //
// const introduce = ({name = 'Guest', age = 'N/A'} = {}) => {
//         console.log(`Hi! This is ${name.toUpperCase()} who is ${age} years old.`)
//     }
//     introduce()
//     const user1 = {name : 'Dip', age : 26}
//     introduce(user1)
    
//        // Destructuring => in Function Parameter (Array) //
// const sum = ([a = 0, b = 0] = []) => console.log(a + b)
// let array = [65,219]
// sum(array)
// sum()

// const product = {
//     name : 'Laptop',
//     brand : 'Dell',
//     price : 50000
// }
// const {name, brand, price} = product
// console.log(name, brand, price)

// const colors = ['red', 'blue', 'green', 'yellow']
// const [r, b, g, y] = colors
// console.log(r, b)

// let array = [32 , 654, 987]
// const [first, second, third] = array
// console.log(second)

// const multiply = (a, b) => [a * 3, b * 3]
// const [x, y] = multiply(6, 25)
// console.log(x)
// console.log(y)

// const person = ({name = 'Guest', city = 'N/A'} = {}) => {
//     console.log(`This is ${name} who resides in ${city}.`)
// }
// person()

// const person = {name : 'Rahim', city : 'Dhaka'}
// const {name , city, phone = "N/A"}  = person
// console.log(name)
// console.log(city)
// console.log(phone)

// const teacher = {name : 'Maria', profession : 'Teacher'}
// const {name, profession : job} = teacher
// console.log(`I love ${name} ${job}.😂`)

//                  // Rest Operator //

// const product = {
//     name : 'Laptop',
//     price : 50000,
//     brand : 'Dell'
// }
// const {name, ...rest} = product
// console.log(rest)

// const programmer = {
//     name : "Sophia",
//     language : "JavaScript",
//     experience : 5,
//     speciality : "Front-End",
//     tools : "React"
// }
// const {language, speciality, ...details} = programmer
// console.log(details)

// const addNums = (a, ...nums) => {
//     let sum = 0
//     for (let num of nums) {
//         sum += num
//     }
//     let avg = sum / nums.length
//     console.log(`Average of ${nums} is ${avg}`)
//     // return avg
// }
// addNums(2, 3, 4, 5)


//                  // Spread Operator //

// const numbers = [5, 13, 26, 1, 25, 17, 18, 19, 100, 6, 106]
// console.log(...numbers) // spread operator প্রতিটা উপাদানকে আলাদা আলাদা করে দেয়
// const arrayMax = Math.max(...numbers)
// console.log(arrayMax)

// const friends = [4, 5, 87, 9]
// const dosto = [...friends] // [] নিয়ে friends এর উপাদানগুলো আলাদা আলাদা করে dosto নামক নতুন array তে COPY করা হয়েছে
// console.log(dosto)
// // friends.push(100)
// dosto.push(100)
// console.log(dosto)
// console.log(friends)

// const shongkha = [...friends, 1987] // COPY করার সময় নতুন উপাদানও কমা (,) দিয়ে যোগ করা যায়
// console.log(shongkha)

// const array1 = [1, 2, 3, 4, 5]
// const array2 = [6, 7, 8, 9, 10]
// const combinedArray = [...array1, ...array2] // দুইটা array'র উপাদানগুলোকে একসাথে নতুন আরেকটা array-তে নেওয়া হয়েছে
// console.log(combinedArray)

// const person = {
//     name : "Dip",
//     age: 27
// }
// const clonedPerson = {...person} // object কে clone করতে {} ব্যবহার করতে হয়।
// console.log(clonedPerson)

// const updatedPerson = {...person, hobby : "Music"} // কমা(,) দিয়ে নতুন property, value add করা যায়।
// console.log(updatedPerson)

// Exercise:
// 01.
const technologies = ['condition', 'array', 'loop']
const variables = [...technologies]
console.log(variables)

// 02.
const fruits = ['Apple', 'Banana', "Mango"]
const myFruits = [...fruits, "Papaya", "Orange"]
console.log(myFruits)

// 03.
const frontEnd = ["JavaScript"]
const backEnd = ["Node.Js"]
const database = ["MongoDB"]
const একত্রিত = [...frontEnd, ...backEnd, ...database]
console.log(একত্রিত)

// 04.
const website = {name : "MySite", type : "e-commerce", status : "active"}
const updatedWebsite = {...website, theme : 'Dark'}
console.log(updatedWebsite)

// 05.
const young = {name: 'Arif', age : 30, address : 'B-Baria'}
const {address, ...rest} = young // Object destructuring
console.log(rest)

// 06.
const car = {make :'Toyota', model : 'Corolla', year : 2020}
const updatedCar = {...car, year : 2032}
console.log(updatedCar)