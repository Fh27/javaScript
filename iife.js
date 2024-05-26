let a=4;
let b=10

(()=> console.log(a+b) )() //iife -immediately invoked function expression
const arrfun =()=>{
    return a+b;
}
console.log(arrfun())