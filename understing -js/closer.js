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

function outer() {
  let name = "papa";
  function inner() {
    console.log("inner", name);
  }
  return inner;
}

const fun = outer();
fun();
