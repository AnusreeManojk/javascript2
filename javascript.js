// normal way of asigning object value to variable
const obj1 = {
    name: 'Code Malayalam',
    place: 'Kerala',
    rank: 100
}
function myFunction() {
    const name = obj1.name
    const place = obj1.place
    const rank = obj1.rank
    console.log(name, place, rank)
}
myFunction()
// assigning value to variable using destructuring
const obj2 = {
    name1: 'Code Malayalam',
    place1: 'Kerala',
    rank1: 1000
}
function myFunc() {
    const {
        name1,
        place1,
        rank1
    } = obj2
    console.log(name1, place1, rank1)
}
myFunc()
// array
const marks = [1, 4, 5, 6, 23]
function myfunction() {
    const [a, b, c, d, e] = marks
    console.log(a, b, c, d, e)
}
myfunction()


function firsttwo() {
    const [a, b] = marks
    console.log(a, b)
    const [c, d, ...others] = marks
    console.log(c, d, others)

}
firsttwo()

const obj01 = {
    name: 'Anu',
    age: 32
}
function myfunc() {
    const {
        name,
        age,
        place = 'Kannur'
    } = obj01
    console.log(name, age, place)
}
myfunc();
// array
const mark = [1, 4, 6]
function newfunction() {
    const [e,f,g,h=false]=mark
    console.log(e, f, g, h)
}
newfunction()


var obj5={
   name3:'code ',
   rank2:20

}
function thisFunction({name3,rank2}){
    console.log(name3,rank2)
}

thisFunction(obj5)

// 
var score=[1,4,6]

function callFunction(){
    // var arr1=getValue(
// we can directly destructure the array value
    var[x,y,z]=getValue()
    console.log(x,y,z)
    // console.log(arr1)
}
function getValue(){
    return score
}
callFunction()
// 

var objA={
    name:'Code',
    place:'Kerala'
}
var objB={
    name:'BOB',
    place:'USA'
}
function abc(){
    var{
        name,
        place
    }=objA
    var{
        name:name2,
        place:place2
    }=objB

console.log(name,place,name2,place2)
}
abc()
// nested destructure
var obja={
    name:'Anu',
    mark:35,
    place:'kannur',
    subject:{
           teacher:'science'
    }
}
var {
    subject:{
        teacher
    }
}=obja
console.log(teacher)
// nestede destructuring in array
var arr =[11,22,33];
var[val1, val2]=arr
console.log(val2)
                                                                 

var array=[
{
    name:'Ajo',
    mark:20,
    place:'Kannur'
}
,22,33]
var[val1]=array
console.log(val1)
