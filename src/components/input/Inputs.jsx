import React from 'react'

const Inputs = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.label}>{props.title}</label>
            <input
                id={props.label}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.inputHandler}
            />
        </div>
    )
}

export default Inputs