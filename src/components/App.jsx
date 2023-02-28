import { Component } from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';
import { nanoid } from 'nanoid';


export class App extends Component{

  state = {
  contacts: [   ],

    findContact: '',

  }
  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts:[...prevState.contacts, newContact ]
      }
    })
  }

  filterContact = event =>{
    this.setState({
      findContact: event.currentTarget.value
    })
  }

  render() {
    const {contacts, findContact} = this.state
    // const findContacts = this.state.contacts.filter(contact => contact.text.toLowerCase().includes(this.state.findContact.toLowerCase()))
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter 
        onChange={this.filterContact} 
        value={findContact}/>
        <ContactList contacts={contacts} />
    </div>
  );}
};
