import React from 'react'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div
            style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: "0px 0px 10px 10px",
                bottom: 0,
                right: 0,
                left: 0,
                height: 34,
                backgroundColor: "#161619",
                marginBottom: 0,
                padding: "10px",
                fontSize: 25,
                color: "#918E9B"
            }}
        >
            <FaTwitterSquare />
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaGithubSquare />

        </div>
    )
}

export default Footer