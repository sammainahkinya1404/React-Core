let Person={
    name1: 'Samson Kinyanjui',
    age:25,
    cars: ['BMW','Volkswalgen','Subaru','Landcruiser Tx','Mazda CX-5','Fortuner','Pugeot','Ford Ranger'],
    Animals:['Sheeps','Cow','Chicken'],

   

}
//Desctructing
const {name1,age,cars,Animals}=Person;

console.log(name1)
console.log(age)
console.log(cars)
console.log(Animals)


const Person2 ={...Person,name1:"Rosie",age:21}




