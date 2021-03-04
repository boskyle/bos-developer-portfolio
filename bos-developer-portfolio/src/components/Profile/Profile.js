import React,{useState,useEffect} from 'react';
import './profile.css';


const Profile = () => {

    return (
        <div className="mainContainerItem">

        {/* <h2>Profile</h2> */}
        <div className="stats mt-5">
        <span>
        <h3>Name:   Boswell Orendain</h3>
        <h3>Role:   Junior Web Developer</h3>
        <h3>Hobby:  Fitness</h3>
        </span>

        </div>


        <div className="summary-goal">
       <div className="summary mr-5"><h3>SUMMARY</h3></div>
       <div className="goal ml-5"><h3>GOAL</h3></div>

        </div>




        </div>
    );



}

export default Profile;