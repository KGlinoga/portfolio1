import React from 'react';

export default function Card(props) {
    const cardStyle = {
        width: '18rem',
    };

    return (
        <div className="container">
            
            {/* {props.projects.map(project => ( */}
            
                <div className="card" style={cardStyle} >
                    <img
                        
                    className="card-img-top"
                    src={props.image}
                    alt="app screenshot"
                />
                    <div className="card-body">
                        <h5 className="card-title"> {props.title}</h5>
                        <p>{props.description}</p>
                        <p>Find this project here: {props.deployedLink} </p>
                        <p>Find this code here: {props.gitLink}</p>
                        <p>Project ID: {props.id}</p>
                    </div>
            </div>
                {/* ))} */}
        </div>
    );
}