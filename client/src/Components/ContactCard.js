import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletecontact, getcontact, toggletrue } from '../redux/actions/Contactactions'

function ContactCard({contact}) {
  const dispatch=useDispatch()
  // function delete
  const handleDelete=()=>{
    if(window.confirm("Are you sure!")){
      dispatch(deletecontact(contact._id))
    }
  }
  // function edit
  const handleEdit=()=>{
    dispatch(toggletrue()); 
    dispatch(getcontact(contact._id));
  }
  // function details
  const handleDetails=()=>{
    dispatch(getcontact(contact._id))
  }
  return (
        <Card style={{ width: '18rem', marginTop:"15px" }}>
            <Card.Img variant="top" src={contact.gender==="Male" ? "https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
            : "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-woman.png"} />
            <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary" onClick={handleDelete}>Delete</Button>
                <Link to={`/edit/${contact._id}`}><Button variant="primary" onClick={handleEdit}>Edit</Button></Link>
                <Link to={`/contacts/${contact._id}`}><Button variant="primary" onClick={handleDetails}>Details</Button></Link>
            </Card.Body>
        </Card>
  )
}

export default ContactCard