import React  from "react";
import './propertiesInput.css'

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="property-data-input-field">
  {label && <label htmlFor={name}>{label}</label>}
    <input
      className='property-data'
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;