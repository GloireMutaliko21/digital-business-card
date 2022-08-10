import React from 'react'
import image from "../assets/image.png";
import '../styles/main.css'
import Description from './Description';

const MainContent = () => {
    return (
        <div className='mainContent'>
            <img src={image} alt="" />
            <div className='body'>
                <Description />
            </div>
        </div>
    )
}

export default MainContent