class Vehicle{
   
    constructor( public color:string){
        
    }
    drive():void{
        console.log('vehicle');
    }

    honk():void{
        console.log('honking');
    }
    
}
let v=new Vehicle('red');
v.drive();
v.honk();
console.log(v.color);

class Car extends Vehicle {

    constructor(color:string,public wheels:number){
        super(color);
    }
    drive():void{
        console.log('driving car');
        this.learnDriving();
    }
   private learnDriving():void{
       console.log('learning to drive a car');
   }

}


let c=new Car('red',4);
c.drive();
// c.learnDriving();