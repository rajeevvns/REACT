import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div className="App">
      User: {props.customer.name} <br />
    </div>
  );
}

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
