import React,{useState,useEffect} from 'react';
import './profile.css';


const Profile = () => {

    return (
        <div className="mainContainerItem">

      
            <div className="stats mt-5">
            <span>
            <h3>Name:   Boswell Orendain</h3>
            <h3>Role:   Junior Web Developer</h3>
            {/* <h3>Hobby:  Fitness</h3> */}
            </span>

            </div>


            <div className="summary-goal mt-5">
            <div className="summary"><h3>BACKGROUND</h3>
            <p>Graduated from Humber (Institute of Applied Technology and Advanced Learning) witih an Associate's Degree in Computer Engineering. 
                Though my degree encompasses both electrical and programming; I discovered that I have a passion and enjoyed the software side of the industry. </p>
            </div>
            <div className="goal"><h3>AIM</h3>
            <p>I aspire to be junior frontend developer. I want to be able to leverage the skills and way of thinking I have gained from computer engineering and apply it into software development. </p>
            </div>
            </div>

            <div className="mindset mt-5">
            <h3>Mindset</h3>
            <p>Persistence.</p>
            </div>

        




        </div>
    );



}

export default Profile;