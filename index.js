require('dotenv').config()
console.log("Hello Welcome");
const express = require('express')
const app = express()

const port = process.env.PORTZ || 3000

app.get('/', (req, res) => {
      res.send('Hello World!')
})
app.get('/twitter',(req,res) =>{
    res.send('twittercom')
})
app.get('/login' , (req , res ) =>{
    res.send('Login Page <h1>please login at the page </h1>')
})

app.listen(process.env.portz, () => {
     console.log(`Example app listening on port ${port}`)
})