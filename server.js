const express=require('express')
const connectDb = require('./config/connectDb')
const ContactRoute = require('./routes/contact')
require("dotenv").config()
const app=express()

connectDb()

app.use(express.json())
app.use('/api/contacts', ContactRoute)



app.listen(process.env.port, ()=>console.log(`server is running on port ${process.env.port}`))