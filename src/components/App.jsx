import { Component } from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';
export class App extends Component{

  state = {
  contacts: [],
  name: ''
  }
  

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <ContactList />
        <Filter/>
    </div>
  );}
};
