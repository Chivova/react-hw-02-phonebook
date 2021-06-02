import { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import Contacts from './components/Conatacts/';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = data => {
    const contact = {
      id: uuidv4(),
      name: data,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    console.log(this.state);
  };

  render() {
    return (
      <Fragment>
        <ContactForm onSubmit={this.addContact} />
        <Contacts />
      </Fragment>
    );
  }
}

export default App;
