const express = require("express")

const app = express()

app.get('/',(req ,res)=>{
    res.send({msg:"Docker is easy"})
})

app.listen(8080,()=>{
    console.log("Listening to port 8080")
})