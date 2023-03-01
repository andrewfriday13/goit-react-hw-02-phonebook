import { Component } from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';




export class App extends Component{

  state = {
  contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
  {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
  {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},],

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
    const { name, value}  =event.currentTarget
    this.setState({
      [name]: value
    })
  }
  removeContact =(contactId)=>{
    this.setState(prevState => ({
      contacts:  prevState.contacts.filter(contact => contact.id !== contactId )
    }))
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
        <ContactList
        onRemove={this.removeContact}
        filter={filter}
         contacts={contacts} />
    </div>
  );}
};