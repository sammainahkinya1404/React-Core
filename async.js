// Asynchronous 
// console.log("I")
// console.log("Am")
// console.log("Samson")
// setTimeout(()=>{
//     console.log("Am a Software Developer");

// },5000)
// console.log("Studying Masters in Computer Science")



// function one(call_two){
//     console.log("Step1......complete.........call step2")
//     call_two()
// }

// function two(){
//     console.log("Step 2")

// }

// one(two)

// Callback

let stock={
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}

let order=(fruit_name,call_production)=>{
    call_production.call()
    setTimeout(()=>{

        console.log(`${stock.Fruits[fruit_name]} was selected`)

    },2000)
} 

let productions=()=>{
    setTimeout(()=>{
        console.log("Production Started.......")

    },0)

    setTimeout(()=>{
        console.log("Cut The Fruits")

    },2000)

    setTimeout(()=>{
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} Added`)

    },1000)

    setTimeout((()=>{
        console.log("Machine Started")

    }),1000)

    setTimeout(()=>{
        console.log(`${stock.holder[0]} Selected`)
    },2000)

   setTimeout(()=>{
    console.log(`${stock.toppings[0]} was Selected`)
   },3000)

   setTimeout(()=>{
    console.log("Ice Cream was Served ...........")
   },1000)

}

order(0,productions)