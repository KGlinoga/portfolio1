import React from 'react';
import Form from '../Form/index';

export default function Contact() {
    return (
        <div className="title">
            <h1>Contact Me</h1>
            <p>
                Thank you for your time and consideration!
            </p>
            <p>Please reach out via the following channels: </p>
            <p>email: <a href="mailto:kglinoga@gmail.com" target="_blank" rel="noopener noreferrer">kglinoga@gmail.com</a></p>
            <p>Instagram: @kristinacodes (Coming Soon!)</p>
            <p>YouTube: <a href="https://www.youtube.com/butchery101" target="_blank" rel="noopener noreferrer">@butchery101</a></p>
            <p>GitHub: <a href="https://github.com/KGlinoga" target="_blank" rel="noopener noreferrer">Kristina Glinoga</a></p>
            <a href="./assets/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <Form />

        </div>
    );
}
