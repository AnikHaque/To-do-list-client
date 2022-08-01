import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddRecord.css';

const AddRecord = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://mysterious-retreat-01894.herokuapp.com/records',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-course container bg-base-200'>
            <h1 className='text-center text-4xl font-bold mb-4  text-secondary'>Please Add a Record !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email",)} placeholder="Email" />
      <input {...register("heading",)} placeholder="Task Heading"  />
      <input {...register("description",)} placeholder="Task Description"  />
     
      <input {...register("completed",)} placeholder="Completed/ Not Completed" />
      <input {...register("comment",)} placeholder="Please add a comment" />
      
    
      <input type="submit" className='bg-secondary' />
    </form> 
        </div>
    );
};

export default AddRecord;