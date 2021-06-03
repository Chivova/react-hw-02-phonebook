import { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import 'modern-normalize/modern-normalize.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handlerFilteredConacts(e) {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  }

  render() {
    const { contacts } = this.state;

    return (
      <Fragment>
        <ContactForm onSubmit={this.addContact} />
        <ContactList contacts={contacts} />
        <Filter value={this.filter} onChange={this.handlerFilteredConacts} />
      </Fragment>
    );
  }
}

export default App;
