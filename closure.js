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
   a1:1
}
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
