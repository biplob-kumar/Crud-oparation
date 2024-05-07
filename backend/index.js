
const express = require('express')
const app = express()
const mongoose= require("mongoose")
const UserModal= require('./models/User')
const cors=require('cors')

app.use(express.json())
app.use(cors())
const port = 3000


//  Db connestion
mongoose.connect('mongodb://127.0.0.1:27017/Crud-oparation');

app.get('/', (req, res) => {
   UserModal.find({})
   .then( user=>  res.json(user))
   .catch(err => console.log(err))
  })
  

app.post('/createUser', (req, res) => {
    
 UserModal.create(req.body)
 .then( user => res.json(user) )
 .catch(err=> res.json(err))
  })
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/getUser/:id', (req, res) => {
      const id= req.params.id
      UserModal.findById({_id:id})
      .then( user => res.json(user) )
      .catch(err=> res.json(err))
  })
  
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})