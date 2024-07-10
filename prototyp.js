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
var b1= new Button('Hello')
console.log(b1)

function MyButton(name){
    this.button=document.createElement('button')
    this.button.innerHTML=name;
    document.body.appendChild(this.button)

}
MyButton.prototype.onClick=function(fn){
    this.button.onclick=fn
}
var b2=new MyButton('Yo!') 
b2.onClick(function(){
    console.log('clicked')
})
console.log(b2)

