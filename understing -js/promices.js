const promiseOne = new Promise(function(resolve, reject){
setTimeout(function(){
  console.log('synce task');
  resolve()
}, 1000)
})
promiseOne.then(function(){
  console.log('promices consumed');
})