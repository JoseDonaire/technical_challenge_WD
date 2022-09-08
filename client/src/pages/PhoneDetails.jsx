import React, { useEffect, useState }  from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function PhondeDetails() {

  const {id} = useParams()
  const [phone,SetPhone]= useState([])

  useEffect(()=>{
    getPhone()   
  },[])

  const getPhone = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/api/phones/${id}`)
      SetPhone(response.data)
    } catch (error) {
     console.log(error)
    }

  }

  return (
    <div>
        <h4>Phone Details</h4>
        <p>Name: {phone.name}</p>
        <br />
        <p>Manufacturer: {phone.manufacturer}</p>
        <br />
        <p>Description: {phone.description}</p>
        <br />
        <p>Color: {phone.color}</p>
        <br />
        <p>Price: {phone.price}</p>
        <br />
        <p>Screen: {phone.screen}</p>
        <br />
        <p>Processor: {phone.processor}</p>
        <br />
        <p>Ram: {phone.ram}</p>
    </div>
  )
}

export default PhondeDetails