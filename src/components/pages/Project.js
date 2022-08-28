import React from 'react';
import Card from './Card';

const projects =
    [{
        image: "data:image/png;base64,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",
        title: "Application One",
        description: "Describing Application One! Selling it really really well so y'all wanna try it out!",
        deployedLink: "www.youtube.com",
        gitLink: "https://github.com/KGlinoga",
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

