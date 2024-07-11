function fn1(){
//   local scop
    var number=12
    console.log(number)
}

function fn2(){
    console.log(number)
}
fn1()
fn2()
// import export function

