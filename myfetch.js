console.log('started')


var pr=myFetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(pr)
// console.log('en ded')
  function buttonClick(){
pr.then((data)=>{
  console.log(data)
},(err)=>{
    console.log(err)
})
  }
console.log('ended')