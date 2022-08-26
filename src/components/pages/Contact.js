import React from 'react';
import Form from '../Form/index';

export default function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>
                Thank you for your time and consideration!
            </p>
            <p>Please reach out via the following channels: </p>
            <p>email: kglinoga@gmail.com</p>
            <p>Instagram: @kristinacodes</p>
            <p>YouTube: @butchery101</p>
            <p>GitHub: <a href="https://github.com/KGlinoga">Kristina Glinoga</a></p>
            <a href="./assets/Resume.pdf" target="_blank">Resume</a>
            <Form />

        </div>
    );
}
