import { Component} from 'react';


class ContactForm extends Component {
    state = {
    name: ''
}

    handleChange(e) {
        this.setState({
            name: e.currentTarget.value
        })
    }

    render() {
          return( <form>
            <h1>Phonebook</h1>
            <label htmlFor="">Name
                           <input value={this.state.name} onChange={this.handleChange}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
/>
</label>
            <button type="button">Add contact</button>
            </form>)
    }
}

export default ContactForm;