

function main1(){
var button =document.getElementById('bye')
// var button =document.getElementById('hello')

button.style.background='red'
button.onclick=()=>{
    console.log(button.innerHTML)
}
}
main1()