import React from 'react';

export default function Card(props) {
    const cardStyle = {
        width: '18rem',
    };

    return (
        <div className="container">
                        
                <div className="card" style={cardStyle} >
                    <img
                        
                    className="card-img-top"
                    src={props.image}
                    alt="app screenshot"
                />
                    <div className="card-body">
                        <h5 className="card-title"> {props.title}</h5>
                    <p>{props.description}</p>
                    <p>Technologies Used: {props.techUsed}</p>
                    <p>Find this project here: <a href={props.deployedLink} target="_blank" rel="noopener noreferrer">{props.deployedLink}</a> </p>
                    <p>Find this code here: <a href={props.gitLink} target="_blank" rel="noopener noreferrer">{props.gitLink}</a></p>
                        <p>Project ID: {props.id}</p>
                    </div>
            </div>
               
        </div>
    );
} 