const express = require('express')
const app = express()
const path = require('path')
const port = process.env.port||3000;

app.use(express.static(__dirname+"/views"))

app.get('/', (request, responce)=>{
    responce.sendFile(__dirname+"/views/index.html")
})

app.get('/highscore', (request, responce)=>{
    responce.sendFile(__dirname+"/views/highscores.html")
})

//app listen sets up a connection
app.listen(port, ()=>{
    console.log(`Connected to port ${port}`)
})