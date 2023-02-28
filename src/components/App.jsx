import { Component } from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';



export class App extends Component{

  state = {
  contacts: [ ],

    filter: '',

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
      filter: event.currentTarget.value
    })
  }

  render() {
    const {contacts, filter} = this.state
    // const filters = this.state.contacts.filter(contact => contact.text.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter 
        onChange={this.filterContact} 
        value={filter}/>
        <ContactList contacts={contacts} />
    </div>
  );}
};
