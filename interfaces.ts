const oldCivic={
    name:'civic',
    year :2000,
    summary():string{
        return `${this.year}`;
        }
    
}
const drink={
    carbonated:true,
    sugar:40,
    summary():string{
        return `${this.sugar}`
    }
}

interface Vehicle{
    
    summary():string;
}
const showInfo=(vehicle:Vehicle):void=>{
   
    console.log(vehicle.summary());
}
showInfo(oldCivic);
showInfo(drink);