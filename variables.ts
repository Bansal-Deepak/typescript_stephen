let apples:number =4;
let speed:string='fast';
let isit:boolean=true;
let x:null=null;
let y:undefined=undefined;

// built in object
let d:Date=new Date();
// array
let colors:string[] =['red','yellow']

// class

// class Car{}
// let car:Car=new Car();

// object literal

let newobj:{x:number,y:number}={
    x:10,
    y:20
}

// function 

const logNumber:(i:number)=>void =(i)=>{
console.log(i);
}

let z:(boolean|number)=true;
z=1;

let typedarray:(string|number)[]=['red',1];

let datearr:Date[]=[new Date(),new Date()]
let twodarray:string[][]=[['red','yellow']]

let xy=[['red'],[1,2]];

let carMakers=['suzuki','hyundai','audi'];

let ts=123;

carMakers.map((car:string):number=>{
return ts;
})