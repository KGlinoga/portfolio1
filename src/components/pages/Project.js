import React from 'react';
import Card from './Card';

const projects =
    [{
        image: "./assets/portTN.png",
        title: "Note Taker App",
        description: "A web app that uses Express.js, and local storage to allow users to title, write, and save notes for themselves.  Notes persist even when the page is closed or refreshed, thanks to local storage!",
        techUsed: "Express.js, HTML, CSS, JavaScript",
        deployedLink: "https://kglinoga.github.io/note-taker/",
        gitLink: "https://github.com/KGlinoga/note-taker",
        id: 1
    },
    {
        image: "./assets/concertopia.jpg",
        title: "Concertopia",
        description: "Concertopia is a web app for music lovers and event goers! Search for your favorite musical artists and see fun information about them and local events!",
        techUsed: "HTML, CSS (Materialize), JavaScript, 3rd Party Web APIs (TicketMaster, The Audio DB, Lyrics.ovh, Open Cage Data Geocoder)",
        deployedLink: "https://lpatino1.github.io/concertopia/",
        gitLink: "https://github.com/lpatino1/concertopia",
        id: 2
        },
        {
            image: "./assets/sarApp.jpg",
            title: "sarApp",
            description: "sarApp is the Instagram of recipes, where users can share how to make their favorite dishes, and find new favorites by other users.  It's  inspired by the lack of representation in mainstream media and society of foods from different parts of the world. We wanted to create a project that would shine a light on cultures from around the world and show their delicious cuisines.",
            techUsed: "JavaScript, SQL, MySQL2, Handlebars, Cloudinary, Coolors, heroku",
            deployedLink: "https://sarapprecipes.herokuapp.com/",
            gitLink: "https://github.com/anniech1/sarApp",
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

