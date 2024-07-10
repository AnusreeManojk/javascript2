// var objs=[

//     {
//         name:'one',
//         msg:'Hello I am one'
//     },
//     {
//         name:'two',
//         msg:'Hello I am two'
//     },
//     {
//         name:'three',
//         msg:'Hello I am three'
//     }
// ]
// function main(){
//     objs.forEach((item)=>{
//         const bt =document.createElement('button')
//         bt.innnerHTML=item.name;
//         bt.onclick=myCallback;
//         document.body.appendChild(bt)
//     })
// }
// function getCallBack(arg){
//    return function (){
//         alert('hi')
//     }
// }

// main()


// spread

var obj = {
    a: 1,
    b: 2,
    c: 'Hello'
}

var obj2 = {
    ...obj
}

console.log(obj)

console.log(obj2)

var a=[1,2,3,4]
var b=[...a]

console.log(a)
console.log(b)


var objA={
    a:1,
    b:3,
    c:'Hello'
}

var objB={
   a1:1,
   b1:2,
   c1:'Hello 2'
}
var obj2={
    ...objA,
    ...objB,

}
console.log(obj2)
// array
var a=[1,2,3,4]
var b=[6,7,8,9]
var c=[...a, ...b]
console.log(c)

// 
var a1=[1,2,3,4]
var  b1=a1; 
console.log(b1===a1)

// 
var obja={
    a2:1,
    b2:2
}
obj2.c=33
var objb=obja

console.log(obja,objb)
// wed
var a =Math.max(1,2,33,49,15,6)
console.log(a)
// 
var arr=[1,3,54,62,12,4]
var b= Math.max(arr[0],arr[2],arr[3],arr[4],arr[5])
console.log(b)
// we can use  spread operator insted of seprating array with index
var c=Math.max(...arr);
console.log(c)


// namsthe javascript
var n=2
function square(num){
    var ans=num *num
    return ans
}
var square2=square(n)
var square4=square(4)
console.log(square2)
console.log(square4)

// 
