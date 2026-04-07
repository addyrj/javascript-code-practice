
 
console.log('A')
setTimeout(() => {
    console.log('B')
}, 1000)
setTimeout(() => {
    console.log('C')
}, 0)
Promise.resolve().then(() => console.log('D'))
console.log('E')
process.nextTick(() => {
    console.log('F')
})
setImmediate(() => {
    console.log('G')
})
setTimeout(() => {
    console.log('H')
}, 0)
console.log('I')
