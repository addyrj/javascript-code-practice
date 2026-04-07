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








