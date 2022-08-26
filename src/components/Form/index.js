import React, { useState } from 'react';
import '../App.css';

// import { validateEmail } from '../../utils/helpers';

function Form() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        
        if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username if invalid');
            return;
        }

        if (!message) {
            setErrorMessage(
                `Hey ${userName}! Don't forget to let me know what you want to talk about!`
            );
            return
        }
        alert(`Thanks for reading out ${userName}!  I'll be in touch soon!`);

        setUserName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <p>Hello {userName}</p>
            <form className="form">

                <input
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your Name"
                />

                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Your Email"
                />

                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="What would you like to talk about?"
                />

                <button type="button" onClick={handleFormSubmit}>Submit</button>
                
            </form>

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}

        </div>
    );
}

export default Form;
