import React from 'react';
import Card from './Card';

const projects =
    [{
        image: "https://secure.img1-fg.wfcdn.com/im/07042854/resize-h445%5Ecompr-r85/4518/45180826/Wrapped+Canvas+Photograph.jpg",
        title: "Note Taker App",
        description: "A web app that uses Express.js, and local storage to allow users to title, write, and save notes for themselves.  Notes persist even when the page is closed or refreshed, thanks to local storage!",
        deployedLink: "https://kglinoga.github.io/note-taker/",
        gitLink: "https://github.com/KGlinoga/note-taker",
        id: 1
    },
    {
        image: "https://secure.img1-fg.wfcdn.com/im/07042854/resize-h445%5Ecompr-r85/4518/45180826/Wrapped+Canvas+Photograph.jpg",
        title: "Application Two",
        description: "Describing Application Two! Selling it really really well so y'all wanna try it out!",
        deployedLink: "www.youtube.com",
        gitLink: "https://github.com/KGlinoga",
        id: 2
    },
    ];

function Project() {
    return (
        <div>
            {projects.map(project => (
                <Card
                    key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                deployedLink={project.deployedLink}
                gitLink={project.gitLink}
                id={project.id}
            />))}
        </div>
    );
}

export default Project;

