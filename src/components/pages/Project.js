import React from 'react';
import Card from './Card';

const projects =
    [{
        image: "./assets/webApp.jpg",
        title: "Note Taker App",
        description: "A web app that uses Express.js, and local storage to allow users to title, write, and save notes for themselves.  Notes persist even when the page is closed or refreshed, thanks to local storage!",
        techUsed: "Express.js",
        deployedLink: "https://kglinoga.github.io/note-taker/",
        gitLink: "https://github.com/KGlinoga/note-taker",
        id: 1
    },
    {
        image: "./assets/webApp.jpg",
        title: "Application Two",
        description: "Describing Application Two! Selling it really really well so y'all wanna try it out!",
        techUsed: " ",
        deployedLink: "www.youtube.com",
        gitLink: "https://github.com/KGlinoga",
        id: 2
        },
        {
            image: "./assets/webApp.jpg",
            title: "Application Three",
            description: "Describing Application Three! Selling it really really well so y'all wanna try it out!",
            techUsed: " ",
            deployedLink: "www.youtube.com",
            gitLink: "https://github.com/KGlinoga",
            id: 3
        },
        {
            image: "./assets/webApp.jpg",
            title: "Application Four",
            description: "Describing Application Four! Selling it really really well so y'all wanna try it out!",
            techUsed: " ",
            deployedLink: "www.youtube.com",
            gitLink: "https://github.com/KGlinoga",
            id: 4
        },
        {
            image: "./assets/webApp.jpg",
            title: "Application Five",
            description: "Describing Application Five! Selling it really really well so y'all wanna try it out!",
            techUsed: " ",
            deployedLink: "www.youtube.com",
            gitLink: "https://github.com/KGlinoga",
            id: 5
        },
        {
            image: "./assets/webApp.jpg",
            title: "Application Six",
            description: "Describing Application Six! Selling it really really well so y'all wanna try it out!",
            techUsed: " ",
            deployedLink: "www.youtube.com",
            gitLink: "https://github.com/KGlinoga",
            id: 6
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
                techUsed={project.techUsed}    
                deployedLink={project.deployedLink}
                gitLink={project.gitLink}
                id={project.id}
            />))}
        </div>
    );
}

export default Project;

