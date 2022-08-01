import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Records= () => {
    const [list, setList] = useState([])
    useEffect(()=>{
        fetch('https://mysterious-retreat-01894.herokuapp.com/records')
        .then(res => res.json())
        .then(data => setList(data))
    },[])
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id',id);
            const url = `https://mysterious-retreat-01894.herokuapp.com/records/${id}`;
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
<div class="overflow-x-auto pt-10 pb-10">
                <table class="table-compact w-full text-gray-400">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Heading</th>
                            <th>Description</th>
                            <th>Completed/Incomplete</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td className='text-center'>{a.email}</td>
                                <td className='text-center'>$ {a.heading}</td>
                                <td className='text-center'>{a.description}</td>
                                <td className='text-center'>{a.completed}</td>
                                <td className='text-center'>{a.comment}</td>
                                <td className='text-center'>
                                <button  className='btn btn-primary text-white '>
    <Link to={`/update/${a._id}`}>Edit</Link>
   </button>
     <button onClick={()=>handleDelete(a._id)} className='btn btn-error text-white'>Delete</button>
                                </td>

                               
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>




    </div>
  )
}