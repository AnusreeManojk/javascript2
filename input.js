// let username;
// document.getElementById("myButton").onclick=function(){
//     username=document.getElementById("myText").ariaValueMax;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML="Hello"+username
// }

// type conversion
// 
// let x
// let y
// let z

// x=Number("3.14")
// y=String(3.14)
// z=Boolean("pizza")
// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)

// let x=3.14
// x=Math.round(x)
// x=Math.floor(x)
// x=Math.ceil(x)
// x=Math.pow(x)
// console.log(x)

// let x=3.14
// let y=5
// let z= 9
// let maximum
// let minimum
// maximum=Math.max(x,y,z)
// minimum=Math.min(x,y,z)
// console.log(minimum)
// console.log(maximum)

// let a
// let b
// let c
// a=window.prompt("Enter side A")
// a=Number(a);

// b=window.prompt("Enter side B")
// b=Number(b);
// c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
// console.log("Side C:",c)
// document.getElementById("submitButton").onclick = function () {
//     a = document.getElementById("aTextBox").value
//     a = Number(a);

//     b = document.getElementById("bTextBox").value
//     b = Number(b);
//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
//     // console.log("Side C:", c)

//     document.getElementById("cLabel").innerHTML="Side C:"+c
// }
// let x= Math.floor(Math.random()*6)+1
// console.log(x)

// slice() operator

// let fullName="Snoop Dogg"
// let firstName;
// let lastName;

// firstName= fullName.slice(0, fullName.indexOf(" "))
// lastName= fullName.slice(fullName.indexOf(" ")+1)
// console.log(firstName)
// console.log(lastName)

// method  chaining

// let userName="bro"
// let letter =userName.charAt(0).toUpperCase()
// console.log(letter)

// check property

document.getElementById("myButton").onclick=function(){


    const myCheckBox=document.getElementById("myCheckBox")
    const visaBtn =document.getElementById("visaBtn")
    const mastercardBtn =document.getElementById("mastercardBtn")
    const paypalBtn =document.getElementById("paypalBtn")

   if(document.getElementById("myCheckBox").checked){
           console.log("You are subscribed!")
   }else{
    console.log("You are NOT subscribed!")

   }

   if (visaBtn.checked){
    console.log("You are paying with a Visa!")
   }
   else if(mastercardBtn.checked){
    console.log("You are paying with a Mastercard! ")
   }
   else if(paypalBtn.checked){
    console.log("You are paying with a PayPla! ")
   }
   else{
    console.log("You must select a payment type!")
   }
}
