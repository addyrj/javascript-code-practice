const promise = new promise(function(resolve, reject) {

    setTimeout(function(){
     let error = true
     if(!error){
resolve({username: 'hitesh', password:'123'})
     }else{
        reject('Error: something went wrong')
     }


    },1000)
})