import React from 'react'
import { useSelector } from 'react-redux'

function Contactdetails() {
  const contact=useSelector(state=>state.ContactReducer.contact)
  return (
    <div>
        <h1>{contact.name}</h1>
        <h2>{contact.email}</h2>
        <h3>{contact.age}</h3>
        <h4>{contact.gender}</h4>
    </div>
  )
}

export default Contactdetails