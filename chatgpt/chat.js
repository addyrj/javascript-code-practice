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
// -----------------
// const arr = [1,2,2,3,4,5]
// const duplicates = arr.filter(
//     (item,index)=>arr.indexOf(item) !== index);
// mongodb
User.findByIdAndUpdate(Id, {name:"aditay"},{new:true});

db.orders.find({userId: Object("...")}).sort({createdAt: -1}).limit(10)
db.agreggate([
    {
        $group:{$ dateToString:{formate:"%Y-%M-%d",date:"$createdAt"}},
    }
])