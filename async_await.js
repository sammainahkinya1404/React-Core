
const axios =require("axios");

const fetchData=async()=>{
    try{
    const data = await axios.get("https://cat-fact.herokuapp.com/facts")
    console.log(data)
}
catch(err){
    console.log(err)

}finally{
    console.log("Async fetch Worked")
}

};
fetchData()