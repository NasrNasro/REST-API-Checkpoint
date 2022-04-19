import { GET_CONTACT, GET_CONTACTS, TOGGLE_FALSE, TOGGLE_TRUE } from "../types/ContactTypes"
import axios from  'axios'

export const getcontacts=()=> async (dispatch)=>{
    try {
        //communiquer avec back-end
        const res= await axios.get('/contacts')
        // communiquer avec redux
        dispatch({type:GET_CONTACTS,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

export const addcontact=(newContact,navigate)=> async (dispatch)=>{
    try {
        const res= await axios.post('/contacts/addContact', newContact)
        dispatch(getcontacts())
        navigate('/contacts')
    } catch (error) {
        console.log(error)
    }
}

export const deletecontact=(id)=> async (dispatch)=>{
    try {
        const res = await axios.delete(`/contacts/deleteContact/${id}`)
        dispatch(getcontacts())
    } catch (error) {
        console.log(error)
    }
}

export const getcontact=(id)=> async (dispatch)=>{
    try {
        const res= await axios.get(`/contacts/${id}`)
        dispatch({type:GET_CONTACT,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

export const toggletrue=()=>{
    return{
        type:TOGGLE_TRUE
    }
}

export const togglefalse=()=>{
    return{
        type:TOGGLE_FALSE
    }
}

export const editcontact=(id, updated, navigate)=> async (dispatch)=>{
    try {
        const res = await axios.put(`/contacts/updateContact/${id}`, updated)
        dispatch(getcontacts())
        navigate('/contacts')
    } catch (error) {
        console.log(error)
    }
}