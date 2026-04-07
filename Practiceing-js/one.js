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

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1,5];
// const isSubset = arr2.every(item =>arr1.includes(item));
// console.log(isSubset);

// const sum = arr1.reduce((acc, curr)=> acc + curr, 0);
// console.log(sum)
const merged = arr1.concat(arr2).sort((a,b)=>a -b)
console.log(merged);



