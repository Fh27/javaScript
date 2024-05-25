function add(a,b){
    return a+b;
}

function multiply(args){
    return args[0]*args[1]
}
function square(val){
    return val*val
}
function compose(...fns){
    return function(...values){
        return fns.reduce((a,b)=>b(a),values)
    }
}
const composeall=(...fns)=>(...val)=>fns.reduce((a,b)=> b(a),val);
const tsak=composeall(multiply,square)
const task=compose(add,multiply)
// console.log(task(2,3))
console.log(tsak(2,3))