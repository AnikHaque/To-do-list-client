import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IndividualRecord } from '../individualrecord/IndividualRecord'


export const Records= () => {
    const [list, setList] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/records')
        .then(res => res.json())
        .then(data => setList(data))
    },[])
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id',id);
            const url = `http://localhost:5000/records/${id}`;
            fetch(url,{
                method:'DELETE'

            })
            .then(res=>res.json())
            .then(data=>{
         if(data.deletedCount>0){
            console.log('deleted');
            const remaining = list.filter(records=>records._id !==id);
            setList(remaining);

         }
            })
        }
    
            }
  return (
    <div>
<h1 className='font-bold text-5xl text-center mt-10 mb-5 text-secondary'>All Records: {list.length}</h1>
<div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-10 px-12  pt-10 pb-10'>
{
    list.map(record=><div class="card bg-gray-500 shadow-banner lg:max-w-lg  pt-5">
    <figure><img src={record.img} alt="Shoes" className='w-28' /></figure>
    <div class="card-body">
      <p class="text-white"><b>Email: </b>{record.email}</p>
      <p class="text-white"><b>Name: </b>{record.displayname}</p>
      <p class="text-white"><b>Contact No: </b>{record.contact}</p>
      <p class="text-white"><b>Address: </b>{record.address}</p>
    
      <div class="card-actions justify-start">
   <button  className='btn btn-primary text-white'>
    <Link to={`/update/${record._id}`}>Edit</Link>
   </button>
     <button onClick={()=>handleDelete(record._id)} className='btn btn-error text-white'>Delete</button>
    
     
      </div>
    </div>
  </div>)
    
}

</div>

    </div>
  )
}