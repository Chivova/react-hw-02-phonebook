const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onClick(id)} type="button">
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
