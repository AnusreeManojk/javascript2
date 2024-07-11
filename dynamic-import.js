import {createButton} from './script2.js';
// import {changeBg, stopChangingBg} from './featur.js';


createButton ('Feature 1',()=>{
alert('feature1')
})
createButton ('Feature 2',()=>{
    import ('./featur.js')
    .then((obj)=>{
        createButton('Start Disco', obj.changeBg)
        createButton('Stop Disco', obj.stopChangingBg)
    })
})

 // let isGreen=true;
// let handle =null;
// function changeBg(){
//     handle=setInterval(()=>{
//       document.body.style.background=isGreen? 'green':'blue'
//       isGreen=!isGreen
//     },500)
// }
// function stopChangingBg(){
//     clearInterval(handle)
//     handle=null
//     document.body.style.background='none'
// }
