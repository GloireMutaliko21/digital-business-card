import React from 'react'
import image from "../assets/image.png";
import '../styles/main.css'
import Button from './Button';
import Description from './Description';
import { HiMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";

const MainContent = () => {
    return (
        <div className='mainContent'>
            <img src={image} alt="" />
            <div className='body'>
                <Description />
                <div style={{
                    display: "flex",
                    // justifyContent: "space-around"
                }}>
                    <Button
                        icon={<HiMail style={{ fontSize: 16 }} />}
                        text="Email"
                    />
                    <Button
                        icon={<AiFillLinkedin style={{ fontSize: 16 }} />}
                        text="Linkedin"
                        bgColor="#5093E2"
                        color="white"
                    />
                </div>
            </div>
        </div>
    )
}

export default MainContent