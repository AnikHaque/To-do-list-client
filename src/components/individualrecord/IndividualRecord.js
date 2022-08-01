import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './IndividualRecord.css'
export const IndividualRecord = (props) => {
    const {_id,email,heading,description,completed,comment}=props.tool;
    const [record, setRecord] = useState([])
    useEffect(()=>{
        fetch('https://mysterious-retreat-01894.herokuapp.com/records')
        .then(res => res.json())
        .then(data => setRecord(data))
    },[])

    const handleDelete = id =>{
console.log('deleting user with id',id);
    }
  return (
    <div>
       <div class="card bg-gray-500 shadow-banner lg:max-w-lg  pt-5">
  <div class="card-body">
    <p class="text-white"><b>Email: </b>{email}</p>
    <p class="text-white"><b>Task Heading: </b>{heading}</p>
    <p class="text-white">{description}</p>
    <p class="text-white"><b>Completed </b>{completed}</p>
    <p class="text-white"><b>Comment </b>{comment}</p>
  
    <div class="card-actions justify-start">
   <button onClick={()=>handleDelete(record._id)} className='btn btn-error text-white'>Delete</button>
  
   
    </div>
  </div>
</div>
    </div>
  )
}