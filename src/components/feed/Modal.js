import React, {useState} from 'react'
import './modal.css'

const Modal = ({closeModal, deleteItem}) => {
    // console.log(deleteItem, 'delete item')

    // const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="modal-container">
            <div className='modal'>
                <h4>Delete property</h4>
                <div className='btn-container'>
                    <button
                        type='button'
                        className='btn confirm-btn'
                        onClick={deleteItem}
                    >
                        confirm
                    </button>
                    <button
                        type='button'
                        className='btn clear-btn'
                        onClick={()=> closeModal(false)}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Modal