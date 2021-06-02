import { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import Contacts from './components/Conatacts/';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <Fragment>
        <ContactForm />
        <Contacts />
      </Fragment>
    );
  }
}

export default App;
