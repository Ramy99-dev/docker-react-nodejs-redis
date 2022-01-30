const express = require('express')
const redis = require('redis')
const cors = require('cors')

const app = express()
const client = redis.createClient({url:"redis://redis:6379"})
const connect = async()=>{
    await client.connect()
}

connect()




app.use(cors())
app.use(express.json())


app.post('/', async (req,res)=>{
    await client.lPush('todo',req.body.todo)
    res.send("added Successfully")
})



app.get('/', (req ,res)=>{
    const data = await client.lRange('todo',0,-1);
    res.send(data)
    
})

app.delete('/', (req ,res)=>{
    
    
})

app.listen(7082,()=>{
    console.log("Listening to port 3082")
})
