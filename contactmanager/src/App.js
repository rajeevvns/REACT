import { connect } from 'react-redux';
import './App.css';
import { useState } from 'react';

function App(props) {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  function addNewContact() {
    props.addContact({
      name,
      email
    });
  }
  return (
    <div className="App">
      User: {props.customer.name} <br />
      Name : <input type='text' onChange={(evt) => setName(evt.target.value)} /> <br />
      Email : <input type='text' onChange={(evt) => setEmail(evt.target.value)} /> <br />
      <button type='button' onClick={addNewContact}>Add Contact</button>
      {
        props.friends.map(contact => (
          <div key="contact.email">
              {contact.email} , {contact.name}
              <button type='button' onClick={() => props.removeContact(contact.email)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

// HOC injects props to "App"
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

function mapStateToProps(state) {
  return {
    friends: state.contacts,
    customer: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: contact => dispatch({ type: 'CREATE_CONTACT', payload: contact }),
    removeContact: (email) => dispatch({ type: 'REMOVE_CONTACT', payload: email }),
    clearContacts: () => dispatch({ type: 'CLEAR_CONTACTS' })
  }
}
