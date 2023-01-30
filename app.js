const express = require("express")
const app = express()




app.get("/", async (req, res) =>{
    try {
        res.send("Hello World!")
    } catch (err) {
        console.log("Error Occured")
    }
})

app.listen(3000, ()=>{
    console.log("Server Is Running On Port 3000");
    
})