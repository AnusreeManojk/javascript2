// export function addArray(arr1, arr2){
//     return  arr1.concat(arr2)
// }
export function createButton(name,fn){

//  export function createButton(name, fn){
    const btn =document.createElement('button')
    btn.innerText=name;
    btn.onclick=fn;
    btn.style.margin='5px'
    document.body.appendChild(btn)

}
                                                                           