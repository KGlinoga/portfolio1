import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Welcome to my Portfolio!</h1>
                </div>
            </div>


        
            <div className="row">

                <div className="col-md-4 col-sm-6 col-xs-12 img img-responsive img-rounded">
                
                        <img src="./assets/avatar.png" alt="A friendly web dev with glasses and dark hair." className=""></img>
                
                </div>
            
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p>My name is Kristina Glinoga.  I am a web developer hoping to work with folks who value equity, work/life balance, and social justice. 
                    </p>

                    <p>In the following sections you can find my projects and contact info.</p>

                    <p>Please reach out via email, GitHub or LinkedIn if you want to get in touch!</p>
                </div>
            </div>

        </div>
    );
}
