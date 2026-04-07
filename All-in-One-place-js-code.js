// 1........find duplicate
// const arrNum = [1, 2, 3, 4, 5,2,4]
// const duplicates = arrNum.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
// console.log(duplicates)
// 2....... max or min 
// const arrNum = [1, 2, 3, 4, 5,2,49,3]
// const maxFun =(arr)=>{
//     return arr.reduce(function(pre, curr){
//         return pre > curr ?pre : curr

//     })
// }
// console.log(maxFun(arrNum))
// 3..find largest...
// const arrNumm = [1, 2, 3, 4, 5,2,49,32]
// const largestFun = (arr)=>{
//     firstLargest =Math.max(...arr)
//     index = arr.indexOf(firstLargest)
//     arr.splice(index,1)
//     secondLargest =Math.max(...arr)
//     return(secondLargest)

//     // return(firstLargest)

// }
// console.log(largestFun(arrNumm))
// const arrNum = [1, 2, 3, 4, 5,2,49,3]
// const secondMaxFun =(arr)=>{
//     const max = arr.reduce(function(pre, curr){
//         return pre > curr ?pre : curr

//     });
//     const secondMax = arr.reduce((pre, curr)=>{
//         if(curr === max) return pre;
//         return pre > curr ?pre : curr
//     })
//     return secondMax
// }
// console.log(secondMaxFun(arrNum))
// 4...find messing Number...
// const arrN = [1, 2, 3, 4, 5,6,8,9,11]
// const missingNum =[] 
// const missingValues = (arr)=>{
//     const minValue = Math.min(...arr)
// const maxxValue = Math.max(...arr)
// for (let i = minValue; i < maxxValue;i++){
//     if(arr.indexOf(i)<0){
//         missingNum.push(i)
//     }
// }
// console.log(missingNum)
// return(missingNum)
    
// }
// console.log(missingValues(arrN))
// find even aor odd 
// const arr =[2,3,4,5,6,7,8,9,10];

// const even = arr.filter((item)=>{
//     return item %2 !=0

// })
// console.log(even)
// find sum of all no 
// const arr =[2,3,4,5,6,7,8,9,10];

// const addOfNo = (arr)=>{
//     return arr.reduce((a,b)=>{
//         return a + b
//     })

// }
// console.log(addOfNo(arr))
// find fobinasi series 
// swip two variable 
// let a = 4;
// let b = 5;
// let c = a;
// a = b
// b= c
// console.log(`value of a is ${a} and b is ${b}`)
// with out 3rd variable 
// let a = 14;
// let b = 45;
// [a,b] =[b,a]
// console.log(`value of a is ${a} and b is ${b}`)
// palindeon in javascript
// function isPalindrome (str){
//     const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const reversedStr = cleanStr.split('').reverse().join('');
//     return cleanStr === reversedStr;
// }
// console.log(isPalindrom("A man, a plan, a canal, Panama"));
// console.log(isPalindrom("recercar"));
// console.log(isPalindrom("hello"));
// find vowels
// function findVowelForLoop(str){
//     const vowels = "aeiouAEIOU";
//     let count =0;
//     for(let i =0; i<str.length;i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(findVowelForLoop("helloa world"));
// function isPrimeOptimization(num){
//     if (num <=1) return false;
//     if(num === 2 )return true;
//     if(num % 2 === 0) return false;

//     for (let i = 3; i<=Math.sqrt(num);i+= 2){
//         if(num % i=== 0 )return false;
//     }
//     return true;
// }
// console.log(isPrimeOptimization(1))
// console.log(typeof undefined);
// console.log(typeof null);
``
// const score = "55f"
// let newValue = Number(score)
// console.log(typeof newValue);
// console.log(newValue)
// let  isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// let num = 30;
// let newValue = String(num)
// console.log(typeof newValue)
// console.log(newValue)

// let value = 3
// let negValue = -value
// console.log(negValue)
// console.log(2 + 2)
// console.log(2 - 2)
// console.log("2" + 2)
// console.log("2" - 2)
// console.log(2 + "2")
// console.log("2" + 2 +3)
// console.log(2 + 2 +"3")
// console.log(2 - 2 +"3")
// console.log(2 - 2 -"3")
// console.log(+true);
// console.log(+"");
// console.log(-true);
// const newFun = function(){
//     console.log("fdj")
// }
// console.log(typeof newFun)
// const name ="add";
// const email = 12;
// console.log(`hello my name is ${name.toUpperCase()} and my email is ${email}`)
// const game = new String('cricket')
// console.log(game[0]);
// console.log(game.length)
// console.log(game.toUpperCase()); 
// console.log(game.charAt(2))
// console.log(game.indexOf('t'))
// const newStr = game.substring(0,5)
// console.log(newStr)
// const newStr = game.slice(0,5)
// console.log(newStr)

// ----------------------------------------------------------------
// const promise = new promise(function(resolve, reject) {

//     setTimeout(function(){
//      let error = true
//      if(!error){
// resolve({username: 'hitesh', password:'123'})
//      }else{
//         reject('Error: something went wrong')
//      }


//     },1000)
// })
// ----------------------------------------------------------------
// fetch("url")
//     .then(response => {
//         if(!response.ok){
//             throw new Error('Network response was not ok ' + response.statueText);
//         }
//         return response.json();
//     })
//     .then(data =>{

//     })
//     .catch(error=>{
//         console.error('There was an error:',error);
//     })

// ------------------------------------------------
// class User{
//     constructor (userName, email, password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`;
//     }
// }
// const chai = new User("chai", "chai@gmail.com","1234")
// console.log(chai.encryptPassword());
// class User{
//         constructor (userName, email, password){
//             this.userName = userName;
          
//         }
//         logMe(){
//             return `${this.userName}`;
//         }
//     }
// class Login extends User {
//     constructor(userName, email, password){
//         super(userName)
//         this.email = email;
//         this.password = password;


//     }
//     addCourse(){
//         console.log(`Adding ${this.userName}`)
//     }
// }
// const chai =  new Login ("chai","chai@gmail.com","123")
// chai.addCourse()
// --------------------------------------------
// 1
// const str = "i love you";
// const saveStr = str.split(" ")
// .map(function (word){
//    return word.split("").reverse().join("")
// })
// console.log(saveStr.join(" "));

// 2 Duplicates
// const arr = [1,3,2,4,5,6,7,7,7,7]
// // const newArr = arr.filter((ele,index,array)=>array.indexOf(ele) === index)
// console.log(newArr)
// 3 remove duplicate
// const array = [1, 2, 2, 3, 4, 4, 5];
// const duplicateArr = array.filter((ele,index) =>array.indexOf(ele) === index);
// console.log(duplicateArr)
// 4. remove largest 
// const array = [10, 5, 8, 21, 3];

// const uniqueArr = [...new Set(array)]

// const uniqueArray = array.filter((item, index)=>array.indexOf(item) === index);

// const largest = Math.max.apply(null, array);
// const largest = array.reduce((max, item)=>(item > max ? item : max),)
// const array = [10, 5, 8, 1, 3];
// const largest = array.reduce((max, item) => (item > max ? item : max), array[1]);
// console.log(largest); // 21
// const array = [10, 5, 8, 21, 3];
// const sorted = array.sort((a, b) => b - a);
// console.log(sorted[2]); // 10

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1,5];
// const isSubset = arr2.every(item =>arr1.includes(item));
// console.log(isSubset);

// const sum = arr1.reduce((acc, curr)=> acc + curr, 0);
// console.log(sum)
// const merged = arr1.concat(arr2).sort((a,b)=>a -b)
// console.log(merged);




 
// console.log('A')
// setTimeout(() => {
//     console.log('B')
// }, 1000)
// setTimeout(() => {
//     console.log('C')
// }, 0)
// Promise.resolve().then(() => console.log('D'))
// console.log('E')
// process.nextTick(() => {
//     console.log('F')
// })
// setImmediate(() => {
//     console.log('G')
// })
// setTimeout(() => {
//     console.log('H')
// }, 0)
// console.log('I')




// ----------------------------------------------------------------

// // promise 
// const promiseOne = new Promise(function(resolve, reject) {
//     setImmediate(function() {
// console.log('task completed');
// resolve()
//     },1000)

// })
// promiseOne.then(function(){
//     console.log('promise consumed')
// })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task compleated 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             username: "Chai",email:"chai@gmail.com",
//         })
    
//     },2000);
// });
//     promiseThree.then(function(user){
//         console.log(user);
//     })
// const promiseFour= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(! error){
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('Error: Something went wrong')
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
// console.log(user);
// return user.username;
// }).then((username)=>{
//     console.log(error,)

// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolve or rejected")

// })

// ----------------------------------------------------------------

// let student = 40;
// student += 2;
// student -=3
// student ++;
// student --;
// console.error(student)
// let radius = 4;

// const pi = 3.14;
// let area = pi * radius * radius;

// // pi = 20;
// let perimeter = 2 * pi * radius
// console.error(perimeter)
// let age = 18;

// if(age <=17){
//     console.log("you are eligible for drink");
    
// }
// else{
//     console.log("you are not eligible for drink");
// }
// function Hi(){
//     console.log("hello")

// }
// Hi()
// function good(){
//     return true;
// }
// const habbit = good();
// console.log(habbit)
// function add(a,b){
//     let sum = a+b
//     return sum;
// }
// const newAdd = add(2,4);
// console.log(newAdd)
// let counter = 0;
// while(counter <10000){

//     console.log(`${counter+1}`);
//     counter = counter + 1;
// }
// console.log
// for(let i=0; i<100; i++){
//     console.log(`${i+1}`)
// }
// function processUserInput()
// let student={
//     name: 'Student1',
//     rollNumber: 20,
//     class: '10th'

// }
// console.log(typeof student.name)
// console.log(typeof student['class'])
// console.log(typeof student)
// delete student.name;
// console.log(student)
// student.year = "2015"
// console.log(student)
// let student =['ram','shyam','sita','gita']

// student.map(function(student,index){
//     console.log(student,index)

// })
// const arr1 =['ram','shyam','sita','gita']
// const arr2 =[1,2,3,4,4,5,5,6,7,8,9,10]
// const arr3 =[...arr1,...arr2,44]
//   new Set(arr3);

// console.log(arr3)

// function sum(...numbers){
//     return numbers.reduce((acc, curr)=> acc+ curr,)
// }
// console.log(sum(1,2,3))
// function stap1(callback){
//     setTimeout(()=>{
//         console.log('stap1');
//         callback();
//     },1000)
// }
// function stap2(callback){
//     setTimeout(()=>{
//         console.log('stap2');
//         callback();
//     },1000)
// }
// function stap3(callback){
//     setTimeout(()=>{
//         console.log('stap3');
//         callback();
//     },1000)
// }
// function stap4(callback){
//     setTimeout(()=>{
//         console.log('stap4');
//         callback();
//     },1000)
// }
// stap1(()=>{
//     stap2(()=>{
//         stap3(()=>{
//             stap4(()=>{
//         console.log('all stapes compleated')
//             });
//         });

//     });
// })
// function stap1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('stap1');
//             resolve();
//         }, 1000);
//     });
// }

// function stap2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('stap2');
//             resolve();
//         }, 1000);
//     });
// }

// function stap3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('stap3');
//             resolve();
//         }, 1000);
//     });
// }

// function stap4() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('stap4');
//             resolve();
//         }, 1000);
//     });
// }

// stap1()
//     .then(stap2)
//     .then(stap3)
//     .then(stap4)
//     .then(() => {
//         console.log('all stapes completed');
//     });
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json()) 
// .then(data=>console.log(data))
// async function fetchData() {
//     try {
//       let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//       let data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
// const mySys = Symbol("key1")
// const JsUser ={
//     name: "asd",
//     "fullname": "aditya ranjan",
//     age: 20,
//     email: "asd@gmail.com",
//     [mySys]:"myket2"

// }
// console.log(JsUser.name)
// console.log(typeof JsUser.fullname)
// console.log(JsUser["fullname"])
// console.log(JsUser[mySys])

// const arr = [1, 2, 3, 4, 5, 6, 7,]
// function getUser(getArr){
//   return getArr[1]

//   }
//   console.log(getUser(arr))
// const addTwo = (a,b)=>{
//     return userName: "ad";
// }
// console.log(addTwo(1,3))
// const month = 6;
// switch (month) {
//     case 1:
//         console.log("jan")
//         break;

//         case 2:
//             console.log("fab")
//             break;
//         case 3:
//             console.log("mar")
//             break;
//         case 4:
//             console.log("april")
//             break;
//         case 5:
//             console.log("may")
//             break;
//             default: 
//             console.log("not matching match")
//             break;

// }

// const map = new Map();
// map.set ("In", "india")
// map.set("pk" ,"pakistan")
// map.set("us" ,"USA")
// map.set("pk" ,"pakistan")
// // console.log(map)
// for (const [key, value] of map){
//     console.log(key, "=" + value)

// }
// const myObj = {
//     js: "javascript",
//     java: "java",
//     py: "python"
// }
// for (const key in myObj){
//     // console.log(myObj[key] )
//     console.log(`${key} shortcut is for ${myObj[key]}`)
// }
// const books = [
//     {
//       title: "To Kill a Mockingbird",
//       genre: "Fiction",
//       edition: "1st Edition",
//       publishYear: 1960
//     },
//     {
//       title: "1984",
//       genre: "Dystopian",
//       edition: "3rd Edition",
//       publishYear: 1949
//     },
//     {
//       title: "The Great Gatsby",
//       genre: "Classic",
//       edition: "2nd Edition",
//       publishYear: 1925
//     },
//     {
//       title: "The Catcher in the Rye",
//       genre: "Fiction",
//       edition: "1st Edition",
//       publishYear: 1951
//     },
//     {
//       title: "The Lord of the Rings",
//       genre: "Fantasy",
//       edition: "4th Edition",
//       publishYear: 1954
//     }
//   ];
//   let userBook = books.filter((bk)=>bk.genre === 'Fiction')
//   userBook = books.filter((bk)=>{
//     return bk.publishYear >= 1950 && bk.genre ==="Fiction"
// })

//   console.log(userBook)

// const myNumber = [1,2,3,4,5,6,7,8]
// const newNums = myNumber.map((num)=>
//      num + 12)
// .map((num)=> num  * 2)
// .filter((num)=> num >= 35)
// console.log(newNums)

// const newValues = myNumber.reduce((accumulater, currval)=>
//  accumulater + currval
// ,2)
// console.log(newValues)


// const books = [
//     {
//       title: "To Kill a Mockingbird",
//       genre: "Fiction",
//       edition: "1st Edition",
//       publishYear: 1960
//     },
//     {
//       title: "1984",
//       genre: "Dystopian",
//       edition: "3rd Edition",
//       publishYear: 1949
//     },
//     {
//       title: "The Great Gatsby",
//       genre: "Classic",
//       edition: "2nd Edition",
//       publishYear: 1925
//     },
//     {
//       title: "The Catcher in the Rye",
//       genre: "Fiction",
//       edition: "1st Edition",
//       publishYear: 1951
//     },
//     {
//       title: "The Lord of the Rings",
//       genre: "Fantasy",
//       edition: "4th Edition",
//       publishYear: 1954
//     }
//   ];
//   const newBook =  books.reduce((acc, item)=>acc + item.publishYear, 0

// )
// console.log(newBook)
  


// ----------------------------------------------------------------
// function outer (){
//   let pName ="papa"

//   function inner (){
//     console.log(" inner",pName);

//   }
//   function innertwo (){

//     console.log("inner two",pName)
//   }
//   inner()
//   innertwo()
//   }
//   outer()
//   console.log("too outer",pName)
// function outer(){
//   let name = "papa"
//   function inner(){
//     console.log("inner",name)
//   }
//   inner()
// }
// outer()
// console.log("outer two",name)

// function outer() {
//     let name = "papa";
//     function inner() {
//       console.log("inner", name);
//     }
//     return inner;
//   }
  
//   const fun = outer();
  // fun();
  
// ----------------------------------------------------------------
// const name = "ram";
// var age = 88;
// let city = "riga";
// console.table([`hellow my name is ${age}, ${city.toUpperCase()},name`])
// console.log(`hellow my name is ${age}, ${city.toUpperCase()},${name.split('')}`)

// string
// const gameName = new String('hitesh');
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('e'))

// const str1 = "Hello";
// const str2 = " World";
// console.log(str1.concat(str2)); // Output: "Hello World"
// const str = "    jksdakj";
// console.log(str);
// console.log(str.trim())
// console.log(str.split(""));

// math
// const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(Math);
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.floor(6.9))
// console.log(Math.random())
// console.log(  Math.floor(Math.random()*10) + 1);

//arrays
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 3];
// console.log(arr[1]);
// console.log(arr.push)
// arr.push(3)
// arr.pop()
// arr.unshift(9)
// arr.shift()
// console.log(arr.includes(9));
// console.log(arr.indexOf(3));
// console.log("A-SLICE",arr)
// const myArr1 = arr.slice(1,3)
// console.log("oreginal arr slice",myArr1)
// const array = [0,1, 2, 3, 4, 5, 6, 7, 8,3];
// const myArr2 = array.splice(1,3)
// console.log("B-SPLICE",array)
// console.log("oreginal splice",myArr2)
// const marvel = ["spider","cat","dog"];
// const my = ["fox","cat",]

// // let newArr = [...marvel,...my]
// let newArr = marvel.concat(my)
// console.log(newArr)

//object

// const obj = {
//   name: "test",
//   age: 13,
//   email: "test@example.com",
// }
// console.log(obj.email)

// const course = {
//   courseName :'java',
//   price:10,
//   aurthor: 'ady'
// }

// const {price :p} = course
// // console.log(p)
// var age = 99;
// let a = "test";
// const city = 'test'
// if(true) {
//   let a = "ram";

//   var age = 13;
//   const city = "riga";
//   console.log("inner: ", a);
// }
// console.log(age)
// console.log(city)
// console.log(a)
// iffee
// (function tea() {
//   console.log("db is connected");
// })();
// // tea();
// ( (age)=>{
//   console.log(`bd is connected${age}`);
// })(45)
//if else

// let balance = 1000;
// if (balance < 900){
//   console.log("less than 900")
// } else if (balance < 600){
//   console.log("leess than 600")
// } else if (balance < 400){
//   console.log("balance < 900")
// }else {
//   console.log("it is above 1000")
// }
// const name = "ram";
// switch (name) {

// }
// turnary operater
// condition ? true : false;
// const name  = 19
// name >= 18 ? console.log("less than 20 ") : console.log("greater than 30");
// let score  = 11;
// do{
//   console.log(`score is ${score}`);
//   score++
// } while (score <= 10)
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for(const num in arr) {
//   console.log(num)
// }
// filter 
// const arr = [{name: "king", age: 200, },
// {name: "ram", age: 23},
// {name: "shyam", age: 90}];

// const newReduce = arr.reduce((acc,item)=>acc+ item.age,0)
// console.log(newReduce)

// // let newArr = arr.filter((na) => na.name === "ram")
// let newArr = arr.filter((ag) => {
//   return ag.age === 23 && ag.name === "ram"})

// console.log(newArr)
// filter 

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,99];
// // const myNums = arr1.filter((num) => num > 4);
// const myNumss = arr1.filter((num) => {
// return num > 4
// });
// console.log(myNumss)
// maps 


// const myNums = arr1.map((num)=>{
//   return num - 20
// })

// const myNums = arr1.map((num)=> num + 2)
// .map((num)=> num *2)
// .filter((num)=> num >= 20)

// reduce 
// const myNums = arr1.reduce(function(acc, curval){
// return  acc+ curval
// },0)
// const myNums = arr1.reduce((acc, cur) => acc + cur,0)


// console.log(myNums);


// foreach, map, reduce, filter 

// const arr = ["amit", "cancel", "sudhir","jagat","susma"]
// arr.forEach((item,index, arr)=>{
//   console.log(item,index, arr)
// })
// const arr = ["amit", "cancel", "sudhir","jagat","susma"]
// const values = arr.forEach((item,index, arr)=>{
//   // console.log(item)
//   return item
// })
// console.log(values)


// ------------
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
// const arr =[1,2,3,4,5,6,7,]
// const newNum = arr.reduce( (acc, curval)=> acc+ curval, 0)

// console.log(newNum)


// -----------
// 1 ---------------
// const arr = [1,1,3,4,5,2,60,50,2,6,9,9];
// const str = ['a', 'b', 'c', 'd', 'e', 'a','b','z'];

// // const newThing = new Set(str);

// const newThing = new Set(arr);
// console.log(newThing);
// 2---------------

// let data = { name: "anil", age: 90, stream: "science" };
// let info = { city: "noida", mail: "anil.com" };
// let city = { address: "delhi" };
// let arr = [1,2,3,4,5,];

// info = { ...info, ...data, city, ...arr };
// console.log(info);
// 3 -------------------
// console.log(Promise.resolve(4));
// function getName() {
//   // const name = "anil"; 
//   console.log(name);
//   console.log(price)
  
//   var name = "anu";
// }
// let price = 13;
// getName();
// for (let i = 0; i <3; i++) {
//   setTimeout(()=>console.log(i),1000)
// ;}
// ----------------------------------------------------------------
// 1.duplecate arr remove 
// const arr = [1,4,2,4,5,6,70,20,11,20,77];
// const newArr = arr.filter((ele, index, arr)=>arr.indexOf(ele)!== index)

// console.log(newArr);

// using set 
// const arrOne = [1,4,2,4,5,6,70,20,11,20,77];
// const newArr = [...new Set(arrOne)];
// console.log(newArr);

// using for loop 

// const arr = [1,4,2,4,5,6,70,20,11,20,77];
// const newArr = []

//   for (let i = 0; i < arr.length; i++){
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i])

//     }
//   }
//   console.log(newArr);
// 2 find maxx  no of the arr

// const arr = [1,4,2,4,5,6,70,20,11,20,77,0];
//  const maxFunction =  arr.reduce((pre,curr)=>{
//   return pre>curr?pre:curr

//   // return pre<curr?pre:curr
// }
//  )
//  console.log(maxFunction);

// using maxx method 

// const arr = [1,4,2,4,5,6,70,20,11,20,77,0,-9,90];
//  const maxFunction = Math.max(...arr)

//  console.log(maxFunction);
// using for loop 

// const arr = [1,4,2,4,5,6,70,20,11,20,77,0,-9,990];
// let newArray = [];

// for(let i = 0; i< arr.length; i++){
//   if (arr[i] > newArray){
//     newArray = arr[i];

//   }

// }
// console.log(newArray);

// 3 find secons largest no in givent arr 

// const arr = [1,4,2,4,5,6,70,20,11,20,77,0,-9,990];
//  let largestValue = (arr)=>{
//   firstLargest = Math.max(...arr);
//   index = arr.indexOf(firstLargest);
//   arr.splice(index,1)
//   secondLargest = Math.max(...arr);
//   return (secondLargest)
//  }

//  console.log(largestValue(arr));
// 4 fins and filter method
// const empArr = [{name: "king", age: 20, },
// {name: "ram", age: 23},
// {name: "shyam", age: 90}];
// const filteredItem = empArr.filter((item)=>{
//   return item.age > 10
// })
// console.log(filteredItem)

// 5 find messing no ..
// const arr = [0,11,1,3,4,5,6,8]
// const missingArr = [];
// const missingValue = (arr)=>{
//   const minValue = Math.min(...arr)
//   const maxxValue = Math.max(...arr)
//   for (let i=minValue; i<maxxValue; i++){
//     if(arr.indexOf(i)<0){
//       missingArr.push(i)
//     }

//   }
//   return (missingArr)

// }
// console.log(missingValue(arr))
// 6 find even and odd no 
// const arr = [0,11,1,3,4,5,6,8]
// const oddNo = arr.filter((item)=>{
// return item %2===0;
// })
// console.log(`even no`,oddNo)


// 7 add the array of element 
// const arr = [0,11,1,3,4,5,6,8]
// const sumOfNumbers = (arr)=>{
//   return arr.reduce((pre, cur)=>{
//     return  pre + cur
//   })
// }
// console.log(sumOfNumbers(arr))

// using for loop... 
// const arr = [0,11,1,3,4,5,6,8]
// let sum = 0;
// const sumOfNumbers = (arr)=>{
//   for (let i=0; i<arr.length; i++){
// sum += arr[i];

//   }
//   return sum;
// }
// console.log(sumOfNumbers(arr))
// reverse string 
// const str = "hhhhjhffg ghg"
// const newStr = str.split("").reverse().join("")
// console.log(newStr)
// // const revStr = (str)=>{
// //   var strToArr = str.split("")
// //   var arrayReverse=strToArr.reverse();
// //   var strReverse = arrayReverse.join("")
  

// //   return strReverse
// // }
// console.log(revStr("hhjh v"))
// find palnidrom in javascript 
// const str = "rarar"
// const palendrom = ()=>{
//   const len = str.length;
//   for(let i=0; i<len/2; i++){

    
//     if(str[i] !== str[len -1 -i]){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palendrom(str));

// two array is equel or not 
// var arr1 =[1,2,3,4,5,6,7];
// var arr2 = [1,2,3,4,5,7,6,0];
// const isArrSame = arr1.length == arr2.length && 
// arr1.every((curEle)=>{
//   if(arr2.indexOf(curEle) >-1){
//     return (curEle =[arr2.indexOf(curEle)])
//   }
// })
// console.log(isArrSame)





    
  
































