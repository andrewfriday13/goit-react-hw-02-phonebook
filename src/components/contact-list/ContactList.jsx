import React from 'react';

export const ContactList = ({contacts, filter, onRemove})=>{
  return(
      <ul>
        {contacts.length > 0 ? (
        contacts.filter(({name})=>
        name.toLowerCase().includes(filter.toLowerCase())).map(({id, name, number}) =>
          <li key={id}>
            <p>{name}: {number}</p>
            <button onClick={()=>{onRemove(id)}}>Remove</button>
          </li>
        )): ('You don`t have contacts')}
      </ul>
    
  )
}