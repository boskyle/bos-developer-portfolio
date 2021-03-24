import React,{useState,useEffect} from 'react';
import './project.css';

import ProjectItem from './ProjectItem/ProjectItem';
import { zoomIn } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  
    fadeIn: {
        animationName: zoomIn,
        animationDuration: '0.25s'
    }
  })


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
        description="A Full-Stack fitness social web application. User can register,login, track their calories, see their progress."
        techUsed={['React','Redux','Bootstrap','HTML5','JavaScript(ES6)','CSS','PHP','MySQL']}
        img_urls={['http://127.0.0.1/projects/bos-developer-portfolio/bos-developer-portfolio/src/assets/images/fitness-homie-images/fh-front.png',
        'http://127.0.0.1/projects/bos-developer-portfolio/bos-developer-portfolio/src/assets/images/fitness-homie-images/fh-main2.png',
        'http://127.0.0.1/projects/bos-developer-portfolio/bos-developer-portfolio/src/assets/images/fitness-homie-images/fh-logbook.png',
        ]}

        code_link="https://github.com/boskyle/laboratory/tree/main/react_lab/react_projects/fitness-homie/src"
        demo_link="http://fitness-homie.com/"
        styles={styles.fadeIn}
        />
        <ProjectItem 
        title="Github Lookup-nator"
        description="A simple github lookup web application that utilizes asynchronous github api calls to display the searched users: Followers,Following and
        Repositories.
        "
        techUsed={['Github API','React','Bootstrap','HTML5','CSS']}
        img_urls={['http://127.0.0.1/projects/bos-developer-portfolio/bos-developer-portfolio/src/assets/images/github-lookup-images/gh-main.png',
        'http://127.0.0.1/projects/bos-developer-portfolio/bos-developer-portfolio/src/assets/images/github-lookup-images/gh-searched.png',
        'http://127.0.0.1/projects/bos-developer-portfolio/bos-developer-portfolio/src/assets/images/github-lookup-images/gh-repos.png'
    ]}
        code_link="https://github.com/boskyle/github-search-react"
        demo_link="http://githubsearch.boskyleprojects.com"
    
        />
        <ProjectItem 
        title="Province Finder"
        description="Allows users to enter a province/territory to display it on a map and show population count for that region."
        techUsed={['Geonames API','Mapbox API','Bootstrap','HTML5','CSS','JavaScript','jQuery']}
        img_urls={['http://127.0.0.1/projects/bos-developer-portfolio/bos-developer-portfolio/src/assets/images/pf-images/pf-1.png',
        'http://127.0.0.1/projects/bos-developer-portfolio/bos-developer-portfolio/src/assets/images/pf-images/pf-2.png'
    ]}
        code_link="https://github.com/boskyle/bos-portfolio-projects/tree/main/iss-tracker"
        demo_link="http://provincefinder.boskyleprojects.com"
        />
        

       
        
        </div>
    );



}

export default Project;