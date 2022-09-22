import React from 'react';
// import resume from '../../assets/Resume';

export default function Resume() {
    return (
        <div>
            <div className="title">
                <h1>Resume</h1>
        </div>
            <p>Check out my <a href="./assets/Resume.pdf" target="_blank">resume here</a>!</p>

            <p>Drop me a line if you want help in: </p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Databases in SQL OR Mongo</li>
                <li>MERN stack code</li>
                <li>React</li>
                <li>Much more, just ask!</li>
            </ul>
        </div>
    );
}