export function complexThing(){
    console.log("A complex thing has been created !")
}

export let obj1={
    a:1,
    b:"Samson"
}

export class Person{
    constructor(nam,age,height,location){
        this.nam=nam;
        this.age=age;
        this.height=height;
        this.location=location;
        age=25,height=164,location="Nyeri",nam="Samson Kinyanjui"
    }

    print(){
        console.log("Name is:",this.nam)
        console.log("Age is:",this.age)
        console.log("Height is:",this.height)
        console.log("location is:",this.location)


    

    }
}