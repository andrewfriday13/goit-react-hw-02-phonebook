import { Component } from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';
import { nanoid } from 'nanoid';


export class App extends Component{

  state = {
  contacts: [ 
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
  ],
    name: '',
    filter: '',
    number: '',
  }
  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts:[...prevState.contacts, newContact ]
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList />
        <Filter/>
    </div>
  );}
};
