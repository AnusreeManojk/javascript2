console.log('started');
let a
try{
    console.log('on try ')
    a=getVal1();
}catch(e){
    console.log('on catch')
    a=0;
}
finally{
    console.log('In finally')
}
const b=getVal2()
const result=processValues(a,b)
console.log(result)
console.log('ended')


function getVal1(){
     var obj=undefined
    return obj.value;
}
function getVal2(){
    return 22
}
function processValues(a,b){    return a+b
}
