// conversion of datatpes

// let age  = "66ab"
// console.log(typeof age)
// console.log(typeof (age))
// // let valueInNumber  = Number(age)
// let valueInNumber  = Number(age)

// console.log(typeof valueInNumber);
// console.log(valueInNumber)
// let num = 99
// let stringNumber = String(num)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("2" + 9 + 2);
// console.log(2 + 9 + "2");

// premetive(memory, accessed by value)  = string, number, boolear, null, undefind, symbole,
// non-premetive, referance (referance, they can access by referance)= Array, object, function

// stack (Premetive)=memory, 
// Heap (Non-Premetive), referance(we change in oreginal value)
// let youtube = "youtubename1";
// let another = youtube
//  another =  "different"
// console.log(youtube )
// console.log(another);

// Heap (Non-Premetive), referance
// let  userOne = {
//   name: "ram",
//   email: "user@example.com",

// }
// let userName = userOne
// userName.name  = "chandu"
// console.log(userOne.name)
// console.log(userName.name)
// let name = 'jay'
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.__proto__);
// console.log(name.charAt (2));
// console.log(name.indexOf('a'))

// substring, slice, splice.... 
// let name = "aditya"
// let newSubstring = name.substring(0,3)
// // console.log(newSubstring);
// // let newSlice = name.slice(-2,4)
// // console.log(newSlice)
// let string  = ' ramji '
// console.log(string.trim())

// const url = "http://aditya.com/ranjan%20ranjan"
// console.log(url.replace('%20', '_'))

// console.log(url.includes('ranjan'))
// console.log(name.split(""));

// numbers
// const score  = 300
// console.log(score)

//array
// const array =[1,2,3,4,5 ,6,7,8,9,10]
// // array.push(20)
// array.pop()
// console.log(array)
// objects
// const course = {
//   coursename : "js in hindi",
//   price : "900",
//   teacher : "hitesh"
// }
// const {coursename : n} = course
// console.log(course.coursename)
// console.log("2",n)
// function 

//  function addTwoNumbers  (number1, number2) {
// let result  = number1 + number2
// console.log(result)
// return result
//  }
//  addTwoNumbers(2,1)
// const user = {
//   username: "aditya",
//   price:"900",
//   welcomeMessage: function(){
//     console.log(`${this.username}, welcome to website`);
//   }
// }
// user.welcomeMessage()
// user.username = 'rana'
// user.welcomeMessage()

// const chai  = function (num1, num2){
//      return num1 + num2
// }
// const chaiOne  = (num1,num2)=>num1 + num2
// const chaiOnee  = (num1,num2)=>(num1 + num2)

// iffe 
// function iffe (){
//   console.log(`db connected`)

// }
// (function iffe (){
//   console.log(`db connected`)

// })()
// ( ()=>{
//   console.log(`db connected`)

// })();
// ( (name)=>{
//   console.log(`db connected ${name}`)

// })('aditya');

// map 
// const myMap = [1,2,3,4,5,6,7,8,9]
// const newNum = myMap.map((num)=>{return num + 10})

// console.log(newNum)
// reduce 
// const arr =[1,2,3,4,5,6,7,]
// const newNum = arr.reduce(function (acc, curval){
//   return acc+ curval
// },0)
// console.log(newNum)
const arr =[1,2,3,4,5,6,7,]
const newNum = arr.reduce( (acc, curval)=> acc+ curval, 0)

console.log(newNum)








