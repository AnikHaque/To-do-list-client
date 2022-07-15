import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddRecord.css';

const AddRecord = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/records',data)
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
      <input {...register("displayname",)} placeholder="Name"  />
      <input type="number" {...register("contact", )} placeholder="Contact No"/>
      <input {...register("address",)} placeholder="Address" />
      
      <input {...register("img",)} placeholder="User Image"/>
      <input type="submit" className='bg-secondary' />
    </form> 
        </div>
    );
};

export default AddRecord;