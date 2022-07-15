import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './IndividualRecord.css'
export const IndividualRecord = (props) => {
    const {_id,email,displayname,contact,address,img}=props.tool;
    const [record, setRecord] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/records')
        .then(res => res.json())
        .then(data => setRecord(data))
    },[])

    const handleDelete = id =>{
console.log('deleting user with id',id);
    }
  return (
    <div>
       <div class="card bg-gray-500 shadow-banner lg:max-w-lg  pt-5">
  <figure><img src={img} alt="Shoes" className='w-28' /></figure>
  <div class="card-body">
    <p class="text-white"><b>Email: </b>{email}</p>
    <p class="text-white"><b>Name: </b>{displayname}</p>
    <p class="text-white"><b>Contact No: </b>{contact}</p>
    <p class="text-white"><b>Address: </b>{address}</p>
  
    <div class="card-actions justify-start">
   <button onClick={()=>handleDelete(record._id)} className='btn btn-error text-white'>Delete</button>
  
   
    </div>
  </div>
</div>
    </div>
  )
}