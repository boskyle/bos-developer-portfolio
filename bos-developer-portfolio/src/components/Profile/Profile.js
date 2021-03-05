import React,{useState,useEffect} from 'react';
import './profile.css';


const Profile = () => {

    return (
        <div className="mainContainerItem">

      
            <div className="stats mt-5">
            <span>
            <h3>Name:   Boswell Orendain</h3>
            <h3>Role:   Junior Web Developer</h3>
            <h3>Hobby:  Fitness</h3>
            </span>

            </div>


            <div className="summary-goal mt-5">
            <div className="summary"><h3>SUMMARY</h3>
            <p>Lorem ipsum dolor sit amet, consectet.Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectet.Lorem</p>
            </div>
            <div className="goal"><h3>GOAL</h3>
            <p>Lorem ipsum dolor sit amet, consectet.Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectet.Lorem</p>
            </div>
            </div>

            <div className="mindset mt-5">
            <h3>Mindset</h3>
            <p>Lorem ipsum dolor sit amet, consectet.Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectet.Lorem</p>
            </div>

        




        </div>
    );



}

export default Profile;