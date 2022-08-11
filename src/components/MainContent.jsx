
import { HiMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";

import image from "../assets/image.png";
import '../styles/main.css'
import Button from './Button';
import Description from './Description';
import AboutInterst from './AboutInterst';
import Footer from './Footer';

const MainContent = () => {
    return (
        <div className='mainContent'>
            <img src={image} alt="" />
            <div className='body'>
                <Description />
                <div className="content-button">
                    <Button
                        icon={<HiMail className="icon" />}
                        text="Email"
                    />
                    <Button
                        icon={<AiFillLinkedin className="icon" />}
                        text="Linkedin"
                        bgColor="#5093E2"
                        color="white"
                    />
                </div>
                <AboutInterst
                    title='About'
                    description='I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.'
                />
                <AboutInterst
                    title='Interests'
                    description='Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'
                />

                <Footer />
            </div>

        </div>
    )
}

export default MainContent