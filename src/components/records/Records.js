import React, { useEffect, useState } from 'react'
import { IndividualRecord } from '../individualrecord/IndividualRecord'


export const Records= () => {
    const [records, setRecords] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/records')
        .then(res => res.json())
        .then(data => setRecords(data))
    },[])
  return (
    <div>
<h1 className='font-bold text-5xl text-center mt-10 mb-5 text-white'>All Tools</h1>
<div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-10 px-12  pt-10 pb-10'>
{
    records.map(tool=><IndividualRecord
    key={tool._id}
    tool={tool}
    
    ></IndividualRecord>)
}
</div>

    </div>
  )
}