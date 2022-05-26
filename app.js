let n1 = Math.floor(Math.random()*12+1)
let n2 = Math.floor(Math.random()*12+1)
let correct = document.querySelector(".tick1")
let incorrect = document.querySelector(".cross1")
const btn = document.getElementById("btn")

document.getElementById("info").value = n1
document.getElementById("info1").value = n2

let mult = n1*n2;
   
btn.addEventListener("click", function (){
    var user=document.getElementById("ans").value;
    if( user == mult){
            correct.classList.toggle("hidden");
            console.log("lol");
        }else{
            incorrect.classList.toggle("hidden")
            console.log("fail");
        }
       
        setTimeout(() => {  
            correct.classList.add("hidden")
            incorrect.classList.add("hidden")
            var user = document.getElementById("ans").value = "";
            let n1 = Math.floor(Math.random()*12+1)
            let n2 = Math.floor(Math.random()*12+1)
            document.getElementById("info").value = n1
            document.getElementById("info1").value = n2
            mult = n1*n2; }, 500);
    
})