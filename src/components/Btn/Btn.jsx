import React from 'react'

const Btn = (props) => {
    return (
        <button
            type={props.type}
            disabled={props.isDisable}
            onClick={props.clickHandler}
            className={`btns ${props.className}`}
        >
            {props.value}
        </button>
    )
}

export default Btn