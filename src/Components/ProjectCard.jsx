import React from "react";
import Linkify from 'react-linkify';

export default function ProjectCard({ project }) {
    return (
        <div className="col-lg-4 mb-4">
            <div className="card card-custom">
                <img src="Images/projects/KeyboardMouseBot.png" alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text"><Linkify>{project.description}</Linkify></p>
                    <a href={project.html_url} target="_blank" className="btn btn-outline-success btn-sm">Github</a>
                </div>
            </div>
        </div>
    );
}