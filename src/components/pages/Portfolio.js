import React from 'react';
import Project from './Project';
// import Project2 from './Project';

// const projects = [
//     {
//         id: 1,
//         image: "https://secure.img1-fg.wfcdn.com/im/07042854/resize-h445%5Ecompr-r85/4518/45180826/Wrapped+Canvas+Photograph.jpg",
//         title: "Application One",
//         description: "Describing Application One! Selling it really really well so y'all wanna try it out!",
//         deployedLink: "www.youtube.com",
//         gitLink: "https://github.com/KGlinoga"
//     },
// ];


export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <p>
                Below, please find a selection of my coding projects.  Included are lists of the technologies used, and rundowns/instructions for use/intention of each project.
            </p>
            <Project />
        
        </div>
    );
}
