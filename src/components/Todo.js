import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = () => {
  return (
    <div className='Todo'>
        <p>Go to school</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrash} />
        </div>
    </div>
  )
}
