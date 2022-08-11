import React from 'react'

import '../styles/button.css'

const Button = ({ icon, text, color, bgColor }) => {
    return (
        <button
            type='button'
            className='button-component'
            style={{ backgroundColor: bgColor, color }}
        >
            {icon}
            {text}
        </button>
    )
}

export default Button