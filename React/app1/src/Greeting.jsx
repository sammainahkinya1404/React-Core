import React,{useState} from 'react';

const Greeting = () => {
    const[name,setName]=useState("")
    
    return (

        <>
        <h1>{name}</h1>
        <button onClick={()=>{
            setName("Samson Kinyanjui")
        }}>Show Name</button>
        </>
    )
}

export default Greeting;
