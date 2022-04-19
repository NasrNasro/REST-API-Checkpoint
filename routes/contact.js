const express=require("express")
const { AddContact, getOneContact, GetContacts, deleteContact, updateContact } = require("../controllers/contact")
const ContactSchema = require("../models/contact")
const ContactRoute=express.Router()

// method post
ContactRoute.post('/addContact', AddContact)

// method get
ContactRoute.get('/', GetContacts)

// method get one
ContactRoute.get('/:id', getOneContact)

// method delete
ContactRoute.delete('/deleteContact/:id', deleteContact)

// method put
ContactRoute.put('/updateContact/:id', updateContact)



module.exports=ContactRoute 