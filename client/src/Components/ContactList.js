import React from 'react'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'

function ContactList() {
    const contacts = useSelector(state=>state.ContactReducer.contacts)
  return (
    <div className="List">
        {contacts.map(contact=> <ContactCard contact={contact} key={contact._id}/>)}
    </div>
  )
}

export default ContactList