// function average(a,b){
//     console.log(a,b)
//     const avg=(a+b)/2
//     return avg;
// }
// const avg=average(5,3)
// console .log(avg)


// function average(a=0,b=0){
//         console.log(a,b)
//         const avg=(a+b)/2
//         return avg;
//     }
//     const avg=average(5)
//     console .log(avg)
    
    function average(a=getDefault(),b=0){
        console.log(a,b)
        const avg=(a+b)/2
        return avg;
    }
     function getDefault(){
        return 100
     }                          
    const avg=average(5)
    console .log(avg)                                                     
// rest parameter                            
function test(a,b){
  console.log(a,b)

}                           
test(11,44,64, 22,66)          

function test1(a,b,...remaining){
    console.log(a,b, ...remaining)
  
  }                           
  test1(11,44,64, 22,66)   

  function test2(...remaining){
    console.log( ...remaining)
  
  }                           
  test2(11,44,64, 22,66,)   

  function test3(...total){
    const a=total.reduce((sum, current)=> sum+current)
    console.log( a)
  
  }                           
  test3(11,44,64, 22,66,5)   
//   array element spread ayyt kittan
function item(...sum){
    console.log(sum)
    const b =sum.reduce((sum,current)=>sum+current)
    console.log(b)
}
const b=[11,22,33,44,55,66,100]
 // parameter destructuring

function testcase(x){
    // console.log(x);
    const{
        name,
        age
    }=x;
    console.log(name,age)
}
const obj ={
    name:'Code Malayalam',
    age:1
}
testcase(obj)
// destructure in argument
function destruc({name,age}){
    console.log(name,age)
}
const obj1={
    name:'code malayalam',
    age:1
}
destruc(obj1)
  
// try to acces undeclared variable
function testscop(){
    console.log(testVar)
}
testscop();

