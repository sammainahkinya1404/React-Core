const person1={
    name: 'John',
    age:23,
    hasCar: true,
    sports:['Football','Chess','Coffee','Tea'],
    



}
// destructuring person1
const {name,age,hasCar,sports}=person1;
console.log(person1.age);
console.log(person1.name);
console.log(person1.sports);
console.log(person1.hasCar);

const person2 ={...person1,name: 'Samson',age:25} 
console.log(person2.age);
console.log(person2.name);
console.log(person2.sports);
console.log(person2.hasCar);


