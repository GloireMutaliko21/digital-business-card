import React from 'react'

const AboutInterst = ({ title, description }) => {
    return (
        <div style={{ textAlign: "start", paddingInline: 35 }}>
            <h3 style={{
                fontSize: 16,
                color: "#F5F5F5",
                marginBottom: 10
            }}>
                {title}
            </h3>
            <p style={{
                fontSize: 10.24,
                color: "#DCDCDC"
            }}>
                {description}
            </p>
        </div>
    )
}

export default AboutInterst