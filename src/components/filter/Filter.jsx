import { Component } from 'react';

export const Filter = ({value ,onChange})=>{
  return(
    <label>
      <input type="text"  value={value} onChange={onChange}/>
    </label>
  )
  
} 