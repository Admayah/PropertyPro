import React from 'react'

const Select = (props) => {
  return (
    <>
    <label htmlFor={props.label}>{props.title}</label>
    <select
    name={props.name}
    id={props.id}>
        <option value={props.value}>{props.data((option)=>option)}</option>
    </select>
    </>
  )
}

export default Select;