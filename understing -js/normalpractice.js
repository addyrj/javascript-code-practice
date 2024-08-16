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


