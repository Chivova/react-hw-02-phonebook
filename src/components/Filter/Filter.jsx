const Filter = ({ value, onChange }) => (
  <label>
    Find Contacts By Name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
