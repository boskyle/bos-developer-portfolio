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
        <ProjectItem 
        title="Fitness Social Media"
        techUsed={['React','Redux','Bootstrap','HTML5','JavaScript(ES6)','PHP','MySQL']}
        description="A fitness social media made for the people by the people. User can register,login, track their calories, see their progress."
        img_urls={['http://127.0.0.1/projects/bos-developer-portfolio/bos-developer-portfolio/src/assets/images/fitness-homie-images/fh-front.png',
        'http://127.0.0.1/projects/bos-developer-portfolio/bos-developer-portfolio/src/assets/images/fitness-homie-images/fh-main2.png',
        'http://127.0.0.1/projects/bos-developer-portfolio/bos-developer-portfolio/src/assets/images/fitness-homie-images/fh-logbook.png'
        ]}
        />
        <ProjectItem title="Province Finder"/>
        <ProjectItem title="Github Lookup-nator"/>
        

       
        
        </div>
    );



}

export default Project;