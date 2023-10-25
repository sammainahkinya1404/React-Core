const event=new Promise((resolve, reject) =>{
    let name="Kinyanjui"
    if(name=="Samson"){
        resolve(name);

}

else{
    reject("Name is not Samson it  is:"+name);
}
})

event.
then((name)=>{
    console.log(name);

}).catch((err)=>{
    console.error(err);

})
.finally(()=>{
    console.log("PROMISED FINISHED");
});