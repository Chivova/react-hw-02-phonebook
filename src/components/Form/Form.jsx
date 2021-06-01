// import {  Fragment } from 'react';

const Form = () => {
    return (
        <form>
            <h1>Phonebook</h1>
            <label htmlFor="">
                           <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
/>
</label>
            <button type="button">Add contact</button>
            </form>

    )


}

export default Form;