class Numbers{
    constructor(public collection:number[]){}
    get(index:number):number{
        return this.collection[index];
    }
//     get=(index:number):number=>{
//         return this.collection[index];
//     }
}

class Strings{
    constructor(public collection:string[]){}
    get(index:number):string{
        return this.collection[index];
    }
}

class Anything<T>{
    
    get(index:T):T{
        return index;
    }
}


const test=new Anything();

interface Printable{
    print():void;
}

function addConstraint<T extends Printable>(arr:T[]):void{
    for(let i=0;i<arr.length;i++){
        arr[i].print();
    }
}

