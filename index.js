const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/twitter',(req,res)=>{
    res.send('Kamal')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listeningon port ${process.env.PORT}`)
})