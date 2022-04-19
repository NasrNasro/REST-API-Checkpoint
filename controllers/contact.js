const ContactSchema = require("../models/contact")

exports.AddContact=async (req,res)=>{
    const {email} = req.body
    try {
        // check contact exist
        const found = await ContactSchema.findOne({email})
        if (found) {
            return res.status(400).send("contact already exists")
        } 

        // create new contact
        const newContact = new ContactSchema(req.body)
       
        await newContact.save()
        res.status(200).send({msg:"contact added", newContact})
    } catch (error) {
        res.status(500).send("could not add contact")
    }
}

exports.GetContacts = async (req,res)=>{
    try {
        const contacts= await ContactSchema.find()
        res.status(200).send({msg:"list of contacts", contacts})
    } catch (error) {
        res.status(500).send("could not get contacts")
    }
}

exports.getOneContact = async(req,res)=>{
    const {id} = req.params
    try {
        const foundContact = await ContactSchema.findById(id)
        res.status(200).send({msg:"conatct found", foundContact})
    } catch (error) {
        res.status(500).send("could not get contact")
    }
}

exports.deleteContact = async (req,res)=>{
    const {id} = req.params 
    try {
        const deleted = await ContactSchema.findByIdAndDelete(id)
        res.status(200).send({msg:'Contact deleted', deleted})
    } catch (error) {
        res.status(500).send("could not delete contact")
    }
}

exports.updateContact = async (req,res)=>{
    const {id} =req.params
    try {
        const updated = await ContactSchema.findByIdAndUpdate(id, {$set:{...req.body}})
        res.status(200).send({msg:"contact updated", updated})
    } catch (error) {
        res.status(500).send("could not update contact")
    }
}