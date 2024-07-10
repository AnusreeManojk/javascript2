// class
// function printMinYob(...args){
//    var arr= args.map((item=>item.yob));
//    console.log(Math.min(...arr));
// }


// class Student {
//     name;
//     yob;
//     place;
//     constructor(name,yob){
//        this.name=name;
//        this.yob=yob
//     }
//     getAge(){
//         return new Date().getFullYear() -this.yob;
//     }
//     getName(){
//         return this.name
//     }
// }
// var student1=new Student('Anu',2001);
// var student2=new Student('jo',2000)
// var student3=new Student ('Sree',1997)

// // console.log(student1, student1.getName(), student1.getAge())
// // console.log(student2, student2.getName(), student2.getAge())
// // console.log(student3, student3.getName(), student3.getAge())


// // console.log(student1)
// // console.log(student2)
// // console.log(student3)
// printMinYob(student1,student2,student3)

// setters and getters
// 
// var b1={

//     init(name){
//         this.button=document.createElement('button')
//         this.button.innerHTML=name;
//         document.body.appendChild(this.button)
//     },
//     set width(width){
//         this.button.style.width=width + 'px';
    
//     },  
//     // setHeight(height){
//         set height(height){
//         this.button.style.height=height + 'px';
    
//     },
   
//     get width(){
//         return   this.button.style.width,10
     
//      },

//    get height(){
//        return   this.button.style.height,10
    
//     },
// }
// b1.init('click')
// b1.width =100
// b1.height=50

class Button{
    constructor(name){
        this.button=document.createElement('button')
        this.button.innerHTML=name;
        document.body.appendChild(this.button)
    }
    onClick(fn){
        this.button.onclick=fn;

    }
}

var b1=new Button('My Button 1')
b1.onClick(function(){
    console.log('Clicked')
})

// inheritance

class GreenButton extends Button{
    
    onClick(fn){
        super.onClick(function(){
            this.button.style.background='green'
            fn();
        }.bind(this))

    }
}
var b1=new GreenButton('GButton ')
b1.onClick(function(){
    console.log('Clicked')
}) 

