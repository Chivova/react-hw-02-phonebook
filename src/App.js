import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form/';
import Contacts from './components/Conatacts/';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Fragment>
        <Form />
        <Contacts />
      </Fragment>
    );
  }
}

export default App;
