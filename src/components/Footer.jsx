import React from 'react'

import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='content-footer'>
            <FaTwitterSquare />
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaGithubSquare />
        </div>
    )
}

export default Footer