import express from 'express';
import cors from 'cors';

const app = express()
import client  from './redisDB.js'
app.post('/',async (res,req)=>{
    await client.lPush("todo",JSON.stringify(req.body.todo))
    res.json({"msg":"Added Successfully"})
})



app.get('/',async (req ,res)=>{
    let data = await client.lRange(0,-1)
    console.log(data)
    res.json({"data":data})
})

app.use(cors())
app.use(express.json())

app.listen(7082,()=>{
    console.log("Listening to port 7082")
})