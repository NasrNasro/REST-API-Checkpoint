import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getcontacts, togglefalse } from '../redux/actions/Contactactions'
function Navbare() {
    const dispatch=useDispatch()
    // function get contacts
    const handleContacts=()=>{
        dispatch(getcontacts())
    }
    // function toggle add 
    const handleAdd=()=>{
        dispatch(togglefalse())
    }
  return (
    <div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Contact List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link as={Link} to='/contacts'  onClick={handleContacts}>Contacts</Nav.Link>
                    <Nav.Link as={Link} to='/addContact' onClick={handleAdd}>Add</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navbare