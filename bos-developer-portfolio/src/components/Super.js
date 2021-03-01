import React,{useState,useEffect} from 'react';
import './super.css';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import {useParams} from "react-router-dom";
function Super () {

    let {id} = useParams();
    
    useEffect(() => {
        console.log(id);
    },[id])



    return (
        <div className="containerFluid mainContainer">
        <Nav/>
        <Profile/>
        </div>
    );
}

export default Super;



