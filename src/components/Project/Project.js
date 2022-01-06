import React from 'react';
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
        description="A Full-Stack fitness social web application. User can register,login, track their calories, see their progress."
        techUsed={['React','Redux','Bootstrap','HTML5','JavaScript(ES6)','CSS','PHP','MySQL']}
        img_urls={['https://boskyle.me/assets/images/fitness-homie-images/fh-front.png',
        'https://boskyle.me/assets/images/fitness-homie-images/fh-main2.png',
        'https://boskyle.me/assets/images/fitness-homie-images/fh-logbook.png',
        ]}

        code_link="https://github.com/boskyle/laboratory/tree/main/react_lab/react_projects/fitness-homie/src"
        demo_link="http://fitness-homie.com/"
        order={1}
        />

        <ProjectItem
        title="Canada Covid 19 Tracker!"
        description="Displays how many recorded cases are on a province or territory. It has an option to track confirmed covid 19 cases of all provinces/territories on a daily, weekly and monthly timeframe. Has a leaderboard
        on which province/territory have the most confirmed cases to least confirmed cases."
        techUsed={['React','Covid REST API','Javascript(ES6)','CSS','Bootstrap']}
        img_urls={['https://boskyle.me/assets/images/ca-covid19-tracker-images/covid19-tracker-image-one.png',
        'https://boskyle.me/assets/images/ca-covid19-tracker-images/covid19-tracker-image-two.png'
        ]}
        code_link="https://github.com/boskyle/covid19-tracker-canada"
        demo_link="http://canadacovid19tracker.boskyleprojects.com/"
        order={2}
        />


        <ProjectItem 
        title="Github Lookup-nator"
        description="A simple github lookup web application that utilizes asynchronous github api calls to display the searched users: Followers,Following and
        Repositories.
        "
        techUsed={['Github API','React','Bootstrap','HTML5','CSS']}
        img_urls={['https://boskyle.me/assets/images/github-lookup-images/gh-main.png',
        'https://boskyle.me/assets/images/github-lookup-images/gh-searched.png',
        'https://boskyle.me/assets/images/github-lookup-images/gh-repos.png'
        ]}
        code_link="https://github.com/boskyle/github-search-react"
        demo_link="http://githubsearch.boskyleprojects.com"
        order={3}
        />
        <ProjectItem 
        title="Province Finder"
        description="Allows users to enter a province/territory to display it on a map and show population count for that region."
        techUsed={['Geonames API','Mapbox API','Bootstrap','HTML5','CSS','JavaScript','jQuery']}
        img_urls={['https://boskyle.me/assets/images/pf-images/pf-1.png',
        'https://boskyle.me/assets/images/pf-images/pf-2.png'
        ]}
        code_link="https://github.com/boskyle/bos-portfolio-projects/tree/main/iss-tracker"
        demo_link="http://provincefinder.boskyleprojects.com"
        order={4}
        />
        <ProjectItem 
        title="Lucky Station"
        description="My doggos personal portfolio and blog website"
        techUsed={['React','CSS','CSS Grid','SASS','Bootstrap']}
        img_urls={['https://boskyle.me/assets/images/lucky-station-images/landing-page.png']}
        code_link="https://github.com/boskyle/lucky-station"
        demo_link="http://luckystation.boskyleprojects.com/"
        order={5}
        />

        </div>
    );



}

export default Project;