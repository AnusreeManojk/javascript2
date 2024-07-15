// async function getValue(){
//     return 12;
// }
// const result =getValue()
// // console.log(result )
// result.then((data)=>{
// console.log(data)
// })

// const loadFile=new Promise((resolve, reject)=>{
//     let fileLoaded = true;

//     if(fileLoaded){
//         resolve("File loaded")
//     }
//     else{
//         reject("File NOT loaded")
//     }
// })
// loadFile.then(value=> console.log(value))
//          .catch(error  => console.log(error))
async function loadFile(){
    if(fileLoaded){
                return Promise.resolve("File loaded")
            }
            else{
                return Promise.reject( "File NOT loaded")
            }
}
loadFile.then(value=> console.log(value))
         .catch(error  => console.log(error))