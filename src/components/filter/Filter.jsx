import React from 'react';

export const Filter = ({filter ,onChange})=>{
  return(
    <label>
      <input 
      type="text"
       name='filter'
       value={filter} 
       onChange={onChange}/>
    </label>
  )
  
} 
