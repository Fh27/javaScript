function f1(a,b){
    return a+b
    }
    function f2(...args){
        return args.reduce(num=> num*num,1)
    }
// const sample=f2(1,2,3)
// console.log(sample)
function composite(f1,f2){
    return function(a,b) {
        return f2(f1(a,b))
    }
}

function compositeall (...fns){
    return function(...values){
       return fns.reduce((a,b)=> b(a),values)
    }
}
const f2f2= compositeall(f1,f2)
console.log(f2f2(2,3))
const c2f = (f1,f2)=> (a,b)=> f2(f1(a,b))
const taskk=c2f(f1,f2)
const sq=composite(f1,f2)
// console.log(sq(2,3))
// console.log(taskk(2,3))



