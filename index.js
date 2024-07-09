// call back registration
// document.getElementById('button').onclick=myFunction;

// function myFunction(arg){
//     console.log(arg)
// }
// function myFunction(val){
//     console.log("Hello World",val)
// }
// const values=[1,2,3,4,5,6,7]
// values.forEach(myFunction)


const values=[1,2,3,4,5,6,7]

values.forEach(function (val){
    console.log("Hello World",val)
})

function myFunction(val){
    console.log("Hello Me", val)
}
myFunction(100)
// anonymous function
const fn= function(val){
    console.log("Hello World=",val)
    return 19;
}
fn(200)

// arrow function 
const fn2= (val)=>{
    console.log("Hello njan=",val)
    return 19;
}
fn2(30)

// arrow function in single line
const fn3=(a,b)=>a+b
const add=fn3(3,2)
console.log(add)


const fn5=a=>a+100
const sum=fn5(3)
console.log(sum)
 

const fn4=()=>"Hello";
const strings=fn4()
console.log(strings)

// to return array
const fn6=()=>[1,2,3,4,5]
console.log(fn6())

// return object in javascript
const obj=()=>({
    a:1,
    b:2

})
const obj1=obj()
console.log(obj1)

const obj2={
    a:100,
    b:200,
    myFunc: function(){
        return this.a+this.b;
    }
}
console.log(obj2.myFunc());

// this key word
const myObj={
    a:1,
    b:2,
    c:function(){
        console.log(this)
    }
}
// console.log(myObj)
// myObj.c()
var aa=myObj.c;
aa();

// call by value call by refernce
// function with integer
function one(){
    var a=100;
    two(a)
    console.log('one',a)
}
function two(a){
    a=a+1;
    console.log('two',a)

}
one()

// function with object
function one1(){
    var a={
        value:100
        }
        two1(a)
        console.log('one',a.value)
}
function  two1(a){
    a.value = a.value+1
    console.log('two',a.value)
}
one1()

function one2(){
    var a=[100]
        two2(a)
        console.log('one',a[0])
}
function  two2(a){
    a[0] = a[0]+1
    console.log('two',a[0])
}
one2()


// closure
function add5(a,b){
    const c=a+b;
    return c;
}
function main(){
    const res =add5 (3,4);
    console.log(res)
}
main()

// 
function add6(a,b){
    function myAdd(){
    const d=a+b;
    return d;
}
return myAdd()
}
function main1(){
    const rest =add6 (8,4);
    console.log(rest)
}
main1()

function add4(a,b){
    function myAdd1(){
    const f=a+b;
    return f;
}
return myAdd1
}
function main2(){
    const rest =add4 (8,4);
    const valu=rest()
    console.log(valu)
}
main2()
 
var objs=[

    {
        name:'one',
        msg:'Hello I am one'
    },
    {
        name:'two',
        msg:'Hello I am two'
    },
    {
        name:'three',
        msg:'Hello I am three'
    }
]
function main(){
    objs.forEach((item)=>{
        const bt =document.createElement('button')
        bt.innnerHTML=item.name;
        bt.onclick=myCallback;
        document.body.appendChild(bt)
    })
}
function myCallback(){
    alert('hi')
}
main()