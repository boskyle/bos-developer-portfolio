import React,{useState,useEffect} from 'react';
import './project.css';

import ProjectItem from './ProjectItem/ProjectItem';


const Project = () => {

    return (
        <div className="mainContainerItem projects-container">
        {/* <h2>projects.</h2> */}
       
            {/* Project Item components will live here, these are just dummies for now */}
            {/* 
                I should pass Title, Modal pop up => {Description,Tech Used (pos array),Images}
            */}
        <ProjectItem title="Fitness Social Media"/>
        <ProjectItem title="Province Finder"/>
        

       
        
        </div>
    );



}

export default Project;