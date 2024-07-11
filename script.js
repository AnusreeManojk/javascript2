// console.log('Script')
// export function addArray(arr){
//     return arr.reduce((total,item)=>total+item,0 )
// }
const name= 'My arryay Library'
const option={
    version:'1.1',
    author:'Code Malyalam'
}
function addAll(arr=[]){
    log('addAll')
    return arr.reduce((total,item)=>total+item,0)
}
 function findMax(arr=[]){
    log('findMax')
    return Math.max(...arr)
}
function log(val){
    console.log('INSIDE', val)
}

export default ()=>{
    console.log('hello')
}
export {
    name, 
    option,
    addAll,
    findMax
}
