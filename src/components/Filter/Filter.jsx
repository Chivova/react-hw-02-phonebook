import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={s.filterWrapp}>
    <h2 className={s.filterTitle}>Contacts</h2>
    <label>
      <p className={s.filterText}> Find Contacts By Name</p>
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
