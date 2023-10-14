//Decalring  Empty array 
let  Team1=[]

//adding elements
Team1=['Arsenal','Bournmouth','Brighton','Manchester City','Man United']
Team1.push('Chelsea')

let Laliga=['Bayern Munchen','Leipzig','Dortmund','shalcke']
let Serie_A=['Ac Milan','Inter Milan','Juventus','Napoli','Lazio','AS Roma']

// combining multiple arrays
let Teams=[...Team1,...Laliga,...Serie_A]

// iterating over arrays
// for(let element in Teams){
//     console.log(element)
// }

// forEach

// Teams.forEach(function(value,index,array){
//     console.log(value)

// })

// using Map
// Teams.map(function(array){
//     console.log(array)

// })


// uisng filter()

const members=Teams.filter((member)=>{
    return member.length >5;
})
