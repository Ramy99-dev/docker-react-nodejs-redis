const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Todo = require('./models/todo')

const app = express()
mongoose.connect('mongodb://mongo:27017/',(res)=>{
     console.log("Connected to Database")
   
    
  })



app.use(cors())
app.use(express.json())


app.post('/', (req,res)=>{
    let todo = new Todo(req.body.todo)
    todo.save()
    .then((result)=>{
       console.log("Saved Successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
})



app.get('/', (req ,res)=>{
    Todo.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
    
})

app.delete('/', (req ,res)=>{
    
    
})

app.listen(7082,()=>{
    console.log("Listening to port 3082")
})
