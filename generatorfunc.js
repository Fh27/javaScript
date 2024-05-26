function* increment(){
    yield 1
    yield 2
}

// const gen=increment()
for(const v of increment()){
    console.log(v)
}

function* adder(st,end){
    for (let index = st; index <= end; index++) {
     yield index;
        
    }
}

const btn11=adder(1,10)
const mybtn=document.getElementById("btn")

mybtn.addEventListener("click",()=>{

    mybtn.innerText=btn11.next().value

})