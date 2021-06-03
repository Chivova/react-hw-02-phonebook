const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Find Contacts By Name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
