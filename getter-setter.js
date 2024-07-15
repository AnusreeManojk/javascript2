class Car{
    constructor(power){
        this._gas=25
        this._power=power
    }
    get power(){
           return this._power
    }
}
let car=new Car(400)
console.log(car.power + "hp")
