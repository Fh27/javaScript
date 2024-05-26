
const mypara=document.getElementById("para")
const mybt=document.getElementById("btn")

function maketestlarge(size){
function change(){
mypara.style.fontSize=`${size}px`
}
return change
}
const make10=maketestlarge(10)
const make20=maketestlarge(70)
mybt.addEventListener("click",make20)
