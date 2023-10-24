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
        console.log("production has started")
        setTimeout(()=>{
          console.log("The fruit has been chopped")
          setTimeout(()=>{
            console.log(`${stock.liquid[0]} and ${stock.liquid[1]} Added`)
            setTimeout(()=>{
              console.log("start the machine")
              setTimeout(()=>{
                console.log(`Ice cream placed on ${stock.holder[1]}`)
                setTimeout(()=>{
                  console.log(`${stock.toppings[0]} as toppings`)
                  setTimeout(()=>{
                    console.log("serve Ice cream")
                  },2000)
                },3000)
              },2000)
            },1000)
          },1000)
        },2000)
      },0)

}

order(0,productions)