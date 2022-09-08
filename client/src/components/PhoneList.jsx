import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react'



function PhoneList() {

  
  const [allPhones,setAllPhones]= useState([])  
  const [isFetching, setIsFetching] = useState(true);


  useEffect(()=>{
    getAllPhones()
  },[])

  const getAllPhones = async () => {
    try {
        const response = await axios.get('http://localhost:5005/api/phones')
        setAllPhones(response.data)
        setIsFetching(false)
    } catch (error) {
        console.log(error)
    }
  }
  if (isFetching === true) {
    return <h3>...</h3>;
  }


  return (
    <div>
        <h5>Phone List</h5>
        {allPhones.map((eachPhone)=>{
            return (
                <p>
                    <Link to={`/phones/${eachPhone._id}`}>
                        {eachPhone.name}
                    </Link>
                </p>
            )
        })}

    </div>
  )
}

export default PhoneList