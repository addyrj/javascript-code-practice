
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


const books = [
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      edition: "1st Edition",
      publishYear: 1960
    },
    {
      title: "1984",
      genre: "Dystopian",
      edition: "3rd Edition",
      publishYear: 1949
    },
    {
      title: "The Great Gatsby",
      genre: "Classic",
      edition: "2nd Edition",
      publishYear: 1925
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      edition: "1st Edition",
      publishYear: 1951
    },
    {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      edition: "4th Edition",
      publishYear: 1954
    }
  ];
  const newBook =  books.reduce((acc, item)=>acc + item.publishYear, 0

)
console.log(newBook)
  










