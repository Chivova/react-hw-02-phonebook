import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';

import 'modern-normalize/modern-normalize.css';

class App extends Component {
  static propTypes = {
    contacts: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    filter: PropTypes.string,
  };
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    )
      ? alert(`${name} is already in conacts `)
      : this.setState({
          contacts: [contact, ...contacts],
        });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handlerFilterConacts = e => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedContacts = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedContacts),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.handlerFilterConacts} />
        <ContactList contacts={filteredContacts} onClick={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
