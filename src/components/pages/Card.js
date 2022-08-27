import React from 'react';

export default function Card(props) {
    const cardStyle = {
        width: '18rem',
    };

    return (
        <div className="container">
            <div className="card" style={cardStyle}>
                <img
                    className="card-img-top"
                    src="https://secure.img1-fg.wfcdn.com/im/07042854/resize-h445%5Ecompr-r85/4518/45180826/Wrapped+Canvas+Photograph.jpg"
                    alt="app screenshot"
                />
                <div className="card-body">
                    <h5 className="card-title"> {props.title}</h5>
                </div>
            </div>
        </div>
    );
}