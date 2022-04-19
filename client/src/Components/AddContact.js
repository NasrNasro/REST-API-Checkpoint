import React, { useEffect, useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addcontact, editcontact } from '../redux/actions/Contactactions'

function AddContact() {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)
    const [gender,setGender]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const contact=useSelector(state=>state.ContactReducer.contact)
    const edit=useSelector(state=>state.ContactReducer.edit)

    useEffect(() => {
      if (edit) {
          setName(contact.name);
           setEmail(contact.email);
            setAge(contact.age);
            setGender(contact.gender)
        }
      else {
          setName(''); 
          setEmail(''); 
          setAge(0)
        }
    }, [edit,contact])
    
    // function edit contact
    const handleEdit=(e)=>{
        e.preventDefault();
        dispatch(editcontact(contact._id, {name,age,email,gender}, navigate));
    }
    // function add contact
    const handleAdd=(e)=>{
        e.preventDefault();
        dispatch(addcontact({name,age,email,gender},navigate));
    }
  return (
    <div className='form'>
        <Form style={{ width: '30rem', marginTop:"15px", backgroundColor:"brown", padding:"20px 20px 20px 20px"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email}type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>name</Form.Label>
                <Form.Control onChange={(e)=>setName(e.target.value)} value={name}type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control onChange={(e)=>setAge(e.target.value)} value={age}type="number" placeholder="Enter your age" />
            </Form.Group>
            {edit ? 
            <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{marginRight:"10px"}}>Genre: </Form.Label>
                <input type="radio" id="gender" name="gender"  checked={contact.gender==="Male"} onChange={()=>setGender('Male')} />Male  
                <input type="radio" id="gender" name="gender"  checked={contact.gender==="Female"} onChange={()=>setGender('Female')} style={{marginLeft:"10px"}}/>Female <br/> 
            </Form.Group>
            <Button variant="primary" onClick={handleEdit} type="submit" >
                Edit contact
            </Button>
            </div> : 
            <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{marginRight:"10px"}}>Genre: </Form.Label>
                <input type="radio" id="gender" name="gender"   onChange={()=>setGender('Male')} />Male  
                <input type="radio" id="gender" name="gender"   onChange={()=>setGender('Female')} style={{marginLeft:"10px"}}/>Female <br/> 
            </Form.Group>
            <Button variant="primary" onClick={handleAdd} type="submit" >
                Add contact
            </Button>
            </div>}
        </Form>
    </div>
  )
}

export default AddContact