const express=require('express')
const app=express()
const fs=require('fs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

 
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/html.html")
})

app.listen(process.env.PORT || 3000)