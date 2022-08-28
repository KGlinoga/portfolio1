import React from 'react';
import Card from './Card';

// import logo from './logo192.png';

// lines 5-13 are my attempt to set up an array for a whole list of projects.  Will keep hardcoded for now.  Will do formatting instead, circle back to this.
// const projects = [ 
//     {
//         image: "https://secure.img1-fg.wfcdn.com/im/07042854/resize-h445%5Ecompr-r85/4518/45180826/Wrapped+Canvas+Photograph.jpg",
//         title: "Application One",
//         description: "Describing Application One! Selling it really really well so y'all wanna try it out!",
//         deployedLink: "www.youtube.com",
//         gitLink: "https://github.com/KGlinoga",
//         id: 1
//     },
// ];

export default function Project({ projects }) {
    return (
        <div>
            <Card />
            <h1 >{projects.title}</h1>
            {/* {props.projects.map(projects =>
                )} */}
        </div>
    )
}



// OG code, goes inside divs
// {/* image, Title, description, link to deployed app, link to GitHub repo */ }
// {/* need to find syntax for images, and links. */ }
//             <img src={"https://secure.img1-fg.wfcdn.com/im/07042854/resize-h445%5Ecompr-r85/4518/45180826/Wrapped+Canvas+Photograph.jpg"} alt=" beautiful sunset" />
//             <p>{ projects.description }</p>
//             <h3>App Title</h3>
//             <p>Hello</p>
//             <p>`${projects.description}`</p>
// {/* <link>Deployed App</link>
//             <link>GitHub Repo</link> */}
// <a href="https://github.com/KGlinoga">github</a>
