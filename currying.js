

function f2(a){
    return function(b){
        return function(c){
return a+b+c;
        }
    }
}
console.log(f2(1)(2)(3))

const add=(a)=>(b)=>(c)=>a+b+c
console.log(add(1)(2)(3))



function sendemail(to){
    return function(sub){
        return function(body){
            console.log(`hello ${to} your sub is ${sub} with body ${body}`)
        }
    }
}
const clggg=sendemail("fh@gmail.com")("new postion")("hello i am ")
// console.log(clggg)






const arrfun =(to)=> (sub)=> (body)=> console.log(`hello ${to} your sub is ${sub} with body ${body}`)
arrfun("fh")("subbb")("bodddy")