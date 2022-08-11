import React from 'react'

const Button = ({ icon, text, color, bgColor }) => {
    return (
        <button type='button' style={{
            width: "100%",
            marginTop: 6,
            width: 115,
            height: 34,
            backgroundColor: bgColor,
            color,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: 6,
            fontSize: 14,
            border: "0px"
        }}>
            {icon}
            {text}
        </button>
    )
}

export default Button