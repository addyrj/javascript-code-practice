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



