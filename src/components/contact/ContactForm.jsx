import React from 'react';
import { Formik, Field, Form } from 'formik';

   


export const ContactForm = ({onSubmit}) => {
  const initialValues ={ 
    name: '',
    number: '',
  }
  const handleSubmit = (values, { resetForm }) => {
    resetForm();

    onSubmit(values.name, values.number);
  };

  return (  
    
    <Formik  
    initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
        <Field id="firstName"  type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required />
        </label>

        <label>Number
        <Field id="lastName"  type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required  />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

// const findedContact = this.state.contacts.find(contact =>
//   contact.name.toLowerCase().includes(name.toLowerCase())
// ); 

// if (findedContact) {
//   alert(`${findedContact.name} is already in contacts`);
//   return;
// } else {
//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, { id: friendId, name, number }],
//   }));
// }