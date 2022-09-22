import React from 'react';

export default function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 title">
                    <h1>Welcome!</h1>
                </div>
            </div>


        
            <div className="row">

                <div className="col-md-4 col-sm-6 col-xs-12 img img-responsive img-rounded">
                
                    <img src="https://drive.google.com/file/d/1QAJNV2gC90jH9hQb6UwOYPm_bTUtwcpr/view?usp=sharing" alt="A friendly web dev with glasses and dark hair." className=""></img>
                
                </div>
            
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p>Hello! My name is Kristina Glinoga.</p>
                    
                    <p>I worked in restaurants and owned my own small business for a long time, so I have a solid sense of urgency, can deftly manage the chaos of a professional kitchen, and work both independently/self-manage while also participating in a team.</p>
                        
                    <p>And although I did find some success in those fields, I didn’t want to do it forever. If 2020 taught me anything, it’s that my career in food was unsustainable in the long run. 
                    </p>

                    <p>That's why I pivoted to coding.  I graduated from the University of Washington’s Coding BootCamp in 2022 and am LOVING the work!</p>
                        
                    <p>I learned hugely valuable coding skills, and am looking to apply everything I learned from kitchens and small business ownership (communication skills [between different teams/stakeholders, and clients], systemic organization and optimization for production efficiency, proper preparation skills, and much more!) in a new, more societally/economically valuable setting.</p>

                    <p>Now, I’m looking for a remote role in software/website/app development, with preference for companies that are mission-driven and socially conscious. I'm also open to contract work!</p>

                    <h5>Please reach out for:</h5>
                    <ul>
                        <li>mobile-first custom app design and development</li>
                        <li>emotionally intelligent communication/collaboration (between teammates and clients/customers!)</li>
                        <li>website building on Squarespace or from scratch!</li>
                        <li>website/app/program debugging and/or custom styling</li>
                    </ul>

                
                    <h5>Possible website/app features include:</h5>
                    <ul>
                        <li>e-commerce/online store</li>
                        <li>SECURE user/employee accounts (via encryption or JWT)</li>
                        <li>social media</li>
                        <li>scheduling</li>
                        <li>asset galleries</li>
                        <li>customer feedback forms</li>
                        <li>and MORE! </li>
                    </ul>
                    
                        {/* 
                        <h5>Coding Languages/Frameworks include:</h5>
                        <ul>
                        <li> HTML
                        CSS
                        JavaScript
                        React, Node.js/Express.js, MySQL, Mongo/Mongoose, Materialize, Material UI, Cloudinary, other API's, and MUCH MORE! </li>
                        </ul> */}
                    {/* </ul> */}

                    <p>Check out my CONTACT page if you'd like to get in touch!</p>
                </div>
            </div>

        </div>
    );
}
