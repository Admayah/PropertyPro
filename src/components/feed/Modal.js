import React, {useState} from 'react'

const Modal = ({closeModal}) => {

    const [isOpen, setIsOpen] = useState(false)

    // const showModal = () => useState(true)
    // const closeModal = () => useState(false)
    return (
        <section className="modal-container">
            <div className='modal'>
                <h4>Delete property</h4>
                <div className='btn-container'>
                    <button
                        type='button'
                        className='btn confirm-btn'
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