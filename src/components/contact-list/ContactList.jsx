import React from 'react';

export const ContactList = ({contacts, filter, onRemove})=>{
  return(
      <ul>
        {
        contacts.filter(({name})=>
        name.toLowerCase().includes(filter.toLowerCase())).map(({id, name, number}) =>
          <li key={id}>
            <p>{name}: {number}</p>
            <button onClick={()=>{onRemove(id)}}>привет</button>
          </li>
        )}
      </ul>
    
  )
}