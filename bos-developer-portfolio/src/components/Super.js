import React,{useState,useEffect} from 'react';
import './super.css';
import Profile from './Profile/Profile';
import {useParams} from "react-router-dom";
function Super () {

    const urlParam = useParams();

    useEffect( () => {
    console.log(urlParam);
    },[urlParam])



    return (
        <div className="containerFluid mainContainer">
        <div className="mainContainerItem" id="profile-summary">1</div>
        <Profile/>
        </div>
    );
}

export default Super;



